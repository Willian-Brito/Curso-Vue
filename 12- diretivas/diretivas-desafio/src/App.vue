<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<p v-quando:mousemove="altualizarXY">Mouse: {{ x }} e {{ y }}</p>
		<button v-quando:click="acao">Executar</button>
	</div>
</template>

<script>

export default {
	data() {
		return {
			x: 0,
			y: 0
		}
	},
	directives: {
		'quando': {
			bind(el, binding) {	

				// el.onclick = function(e) {
				// 	binding.value()
				// }

				const tipo = binding.arg
				const fn = binding.value

				el.addEventListener(tipo, fn)				
			}
		}	
	},
	methods: {
		acao() {
			alert('click')
		},
		altualizarXY(e) {
			this.x = e.clientX;
			this.y = e.clientY;
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
