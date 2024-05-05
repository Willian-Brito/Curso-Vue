import Vue from 'vue'

export default new Vue({
    methods: {
        exibirUsuario(usuario) {
            this.$emit('mudouUsuario', usuario)
        },
        quandoClicarNoUsuario(callback) {
            this.$on('mudouUsuario', callback)
        }
    }
})