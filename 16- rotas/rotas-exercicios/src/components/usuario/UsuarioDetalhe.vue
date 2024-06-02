<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>        
        <p><strong>Codigo: </strong> {{ id }} / {{ $route.params.id }}</p>
        <!-- :to="`/usuario/${id}/editar`"> -->
        <router-link 
            tag="button" 
            primario 
            :to="{ name: 'editarUsuario', params: {id}, query: {completo: false, lingua: 'en'}, hash: '#rodape' }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        console.log('dentro do componente -> usuario detalhe')
        const autenticado = true

        autenticado ? next() : next(false)
    }
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>