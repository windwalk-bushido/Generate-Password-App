<template>
	<div class="flex flex-wrap flex-row justify-center items-start w-full">
		<button class="btn mb-16 bg-blue-600" @click="FetchPosts()">
			<Icon :icon="['fas', 'plus']" class="text-xl" />
		</button>
		<article class="flex flex-wrap flex-row justify-center items-start w-9/12 p-4">
			<img src="'thumbnail'" />
			<h3>{{ title }}</h3>
			<p class="text-red-500">{{ date }}</p>
			<div v-html="'content'"></div>
		</article>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "Component",

		data() {
			return {
				thumbnail: "http://127.0.0.1:1337/",
				title: "",
				date: "",
				content: "",
			};
		},

		methods: {
			FetchPosts() {
				axios
					.get("http://127.0.0.1:1337/posts")
					.then((response) => {
						let posts = response["data"];
						this.thumbnail += posts[0].Thumbnail.url;
						this.title = posts[0].Title;
						this.data = posts[0].Date;
						this.content = posts[0].Content;
						console.log(posts);
					})
					.catch((error) => {
						alert(error);
					});
			},
		},
	};
</script>
