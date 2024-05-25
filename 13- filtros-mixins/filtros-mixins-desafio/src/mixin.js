export default {
    computed: {
		trocarEspacosPorVirgulaConputada() {
			return this.exercicio1.replace(/\s+/g, ',')
		},
		tamanhoConputada() {
			return this.exercicio2.split(' ').map(a => `${a} (${a.length})`).join(' ')
		}
	}
}