new Vue({
	el: '#desafio', 
	data: {
		selecionarClasse: false,
		classeCSS: '',
		aplicarClasse: 'false',
		meuEstilo: 'meuEstilo',
		meuEstilo2: 'meuEstilo2',
		meuEstilo3: 'meuEstilo3',
		cor: '',
		estilo1: {
			height:'100px', 
			width:'100px'
		},
		classe1: 'classe1',
		width: '0'
	},
	computed: {
		classe2(){
			
			if (this.aplicarClasse == 'true') 
				return 'classe2';

			return '';
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.selecionarClasse = !this.selecionarClasse;
				this.classeCSS = this.selecionarClasse ? 'destaque' : 'encolher'
			}, 1000)
		},
		iniciarProgresso() {

			let largura = 0;
			let ponteiro = setInterval(() => {

				largura += 10;
				this.width = `${largura}%`;

				if (largura >= 100) clearInterval(ponteiro);

			}, 500)
		}
	}
})
