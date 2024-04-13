new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('teste');
        },
        alterarValor(e) {            
            this.valor = e.target.value;
        }
    }
})