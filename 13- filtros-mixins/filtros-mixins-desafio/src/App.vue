<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ exercicio1 | trocarEspacosPorVirgula }}</p>

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ exercicio2 | contarPalavras }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p> {{ trocarEspacosPorVirgulaConputada }}</p>
		<p> {{ tamanhoConputada }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->

	</div>
</template>

<script>
import mix from './mixin'
export default {
	mixins: [mix],
	filters: {
		trocarEspacosPorVirgula(valor) {
			return valor.replace(/\s+/g, ',');
		}
	},
	data() {
		return {
			exercicio1: 'W i l l i a n',
			exercicio2: 'Pedro é legal'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
