<template>
	<div class="flex flex-row flex-wrap justify-center items-start w-screen h-screen">
		<div
			class="flex flex-row flex-wrap justify-center items-start w-full p-4 m-4 mb-12 rounded-xl shadow-lg border-2 border-blue-600 bg-blue-900 lg:m-12 lg:p-8 PASS_GEN"
		>
			<h3 class="text-2xl mb-8">Password generator</h3>
			<div class="flex justify-between items-center w-full mt-2 mb-2">
				<p>Uppercase letters</p>
				<input type="checkbox" class="toggle toggle-lg" checked @click="ToggleSwitch(0)" />
			</div>
			<div class="flex justify-between items-center w-full mt-2 mb-2">
				<p>Lowercase letters</p>
				<input type="checkbox" class="toggle toggle-lg" checked @click="ToggleSwitch(1)" />
			</div>
			<div class="flex justify-between items-center w-full mt-2 mb-2">
				<p>Numbers</p>
				<input type="checkbox" class="toggle toggle-lg" checked @click="ToggleSwitch(2)" />
			</div>
			<div class="flex justify-between items-center w-full mt-2 mb-2">
				<p>Special characters</p>
				<input type="checkbox" class="toggle toggle-lg" @click="ToggleSwitch(3)" />
			</div>
			<div class="flex flex-row flex-wrap justify-center w-full mt-2">
				<div class="flex flex-row">
					<p>Length:</p>
					<p class="ml-1 font-bold">{{ password_length }}</p>
				</div>
				<input
					class="range range-lg mt-2 mb-8"
					type="range"
					min="16"
					max="32"
					:value="'password_length'"
					id="slider"
					@change="ToggleSlider()"
				/>
			</div>
			<textarea
				class="w-full textarea bg-white text-black"
				placeholder="Password will show up here..."
				rows="1"
				warp="hard"
				readonly
				:value="this.password"
				id="password_field"
			></textarea>
			<div class="mt-8 mb-4 lg:mb-0">
				<button class="btn mr-2" v-if="'textarea_empty' == true" disabled>
					<Icon :icon="['fas', 'copy']" class="text-xl" />
				</button>
				<button class="btn mr-2 bg-blue-600" @click="CopyPassword()" v-else>
					<Icon :icon="['fas', 'copy']" class="text-xl" />
				</button>
				<button class="btn ml-2 bg-blue-600" @click="FetchPassword()">
					<Icon :icon="['fas', 'plus']" class="text-xl" />
				</button>
			</div>
		</div>

		<div
			class="flex flex-row flex-wrap justify-center items-start w-full p-4 m-4 mb-12 rounded-xl shadow-lg border-2 border-blue-600 bg-blue-900 lg:m-12 lg:p-8 PASS_GEN"
		>
			<h3 class="text-2xl mb-8">Hash text</h3>
			<div class="w-full">
				<p class="mb-2">Input text</p>
				<textarea
					class="w-full mb-8 textarea bg-white text-black"
					placeholder="I will never serve..."
					rows="1"
					warp="soft"
					id="text_field"
				></textarea>
			</div>
			<div class="w-full">
				<p class="mb-2">Hash</p>
				<textarea
					class="w-full textarea bg-white text-black"
					placeholder="Hash will show up here..."
					rows="2"
					warp="hard"
					readonly
					:value="this.hash"
					id="hash_field"
				></textarea>
			</div>
			<div class="mt-8 mb-4 lg:mb-0">
				<button class="btn mr-2" v-if="'hash_field_empty' == true" disabled>
					<Icon :icon="['fas', 'copy']" class="text-xl" />
				</button>
				<button class="btn mr-2 bg-blue-600" @click="CopyHash()" v-else>
					<Icon :icon="['fas', 'copy']" class="text-xl" />
				</button>
				<button class="btn ml-2 bg-blue-600" @click="FetchHash()">
					<Icon :icon="['fas', 'plus']" class="text-xl" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "Home",

		data() {
			return {
				password: "",
				switch_uppercase: true,
				switch_lowercase: true,
				switch_numbers: true,
				switch_specials: false,
				password_length: 24,
				textarea_empty: true,

				hash: "",
				hash_field_empty: true,
			};
		},

		methods: {
			ToggleSwitch(id) {
				switch (id) {
					case 0: {
						this.switch_uppercase = !this.switch_uppercase;
						break;
					}
					case 1: {
						this.switch_lowercase = !this.switch_lowercase;
						break;
					}
					case 2: {
						this.switch_numbers = !this.switch_numbers;
						break;
					}
					case 3: {
						this.switch_specials = !this.switch_specials;
						break;
					}
				}
			},

			ToggleSlider() {
				this.password_length = document.getElementById("slider").value;
			},

			FetchPassword() {
				let arg1 = { gen_uppercase: this.switch_uppercase };
				let arg2 = { gen_lowercase: this.switch_lowercase };
				let arg3 = { gen_numbers: this.switch_numbers };
				let arg4 = { gen_specials: this.switch_specials };
				let arg5 = { pass_len: this.password_length };

				axios
					.put("https://generate-password-api.herokuapp.com/password", { arg1, arg2, arg3, arg4, arg5 })
					.then((response) => {
						this.password = response["data"];
						this.textarea_empty = false;
					})
					.catch((error) => {
						alert(error);
					});
			},

			CopyPassword() {
				document.getElementById("password_field").select();
				document.getElementById("password_field").setSelectionRange(0, 255);
				document.execCommand("copy");
			},

			FetchHash() {
				let arg1 = document.getElementById("text_field").value;

				axios
					.put("https://generate-password-api.herokuapp.com/hash", { arg1 })
					.then((response) => {
						this.hash = response["data"];
						this.hash_field_empty = false;
					})
					.catch((error) => {
						alert(error);
					});
			},

			CopyHash() {
				document.getElementById("hash_field").select();
				document.getElementById("hash_field").setSelectionRange(0, 255);
				document.execCommand("copy");
			},
		},
	};
</script>

<style lang="scss">
	.PASS_GEN {
		max-width: 420px;
	}
</style>
