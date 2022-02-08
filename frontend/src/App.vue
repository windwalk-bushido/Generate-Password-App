<template>
	<div class="flex flex-row flex-wrap justify-center w-full bg-gray-800">
		<Home />
	</div>
</template>

<script>
	import Home from "./views/home";

	export default {
		name: "App",
		components: { Home },
	};
</script>
