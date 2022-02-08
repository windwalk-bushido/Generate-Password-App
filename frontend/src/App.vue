<template>

	<div class="flex flex-row flex-wrap justify-center w-full bg-gray-800">
		<Nav/>
	</div>

</template>


<script>

	import Nav from './components/nav';

	export default {
		name: "App",
		components: { Nav },
	}

</script>


<style lang="scss">

	.html {
		font-size: 16px;
		font-family: "Poppins", sans-serif;
	}

</style>
