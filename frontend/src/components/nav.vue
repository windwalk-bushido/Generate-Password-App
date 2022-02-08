<template>

	<div>
		<nav class="NAV">
			<router-link to="/" class="">Home</router-link>
			<router-link to="/test" class="">Test</router-link>
		</nav>
		<router-view/>
	</div>

</template>


<script>

	export default {
		name: "Nav"
	}

</script>


<style lang="scss">

	.NAV {
		background-color: black;
		color: white;
	}

</style>
