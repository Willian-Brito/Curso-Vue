<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade (Evento)</button>
        <button @click="reiniciarIdadeFN()">Reiniciar Idade (Callback)</button>

    </div>
</template>

<script>
import eventBus from '@/eventBus.js'

export default {
    props: {
        idade: Number,
        reiniciarIdadeFN: Function
    },
    methods: {
        alterarIdade() {
            this.idade += 1
            eventBus.alterarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
