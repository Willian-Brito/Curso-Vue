<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar />
		<Field />
		<Cards />
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import Field from './components/Field.vue';
import Cards from './components/Cards.vue';

export default {
	components: { ProgressBar, Field, Cards }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;		
		color: #FFF;
		background: rgb(34,193,195);
		background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 600;
		font-size: 4rem;
	}
</style>
