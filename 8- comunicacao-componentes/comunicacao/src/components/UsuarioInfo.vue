<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome (Evento)</button>
        <button @click="reiniciarFN()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import eventBus from '@/eventBus.js'

export default {
    props: {
        nome: {
            type: String,
            // required: true,
            // default: function() {
            //     return Array(10).fill(0).join('.')
            // },
            default: 'Anônimo'
        },
        reiniciarFN: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const nomeAntigo = this.nome
            this.nome = 'Pedro'

            this.$emit('nomeMudou', {
                antigo: nomeAntigo,
                novo: this.nome
            })
        }
    },
    created() {
        eventBus.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
