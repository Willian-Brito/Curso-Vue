new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            console.log('computed')
            return this.valor == 37 ? 'Valor igual 37' : 'Valor diferente de 37';
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});