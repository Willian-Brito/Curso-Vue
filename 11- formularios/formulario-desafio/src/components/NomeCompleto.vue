<template>
    <div class="container">
        <label>Nome Completo:</label>

        <div class="nomeCompleto">
            <input 
                id="nome" 
                type="text" 
                placeholder="Nome" 
                required 
                :value="value.nome"
                @input="alterarNome"
            >
            
            
            <input 
                id="sobrenome" 
                type="text" 
                placeholder="Sobrenome" 
                :value="value.sobrenome"
                @input="alterarSobrenome"
            >
        </div>
    </div>
</template>

<script>

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },  
    methods: {
        alterarNome(event) {
            this.$emit('input', {
                nome: event.target.value, 
                sobrenome: this.value.sobrenome
            })
        },
        alterarSobrenome(event) {
            this.$emit('input', {
                nome:this.value.nome, 
                sobrenome: event.target.value
            })
        }
    } 
}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 15px 0px;
    font-size: 1.4rem;
}

#sobrenome {
    margin-left: 10px;
}

.nomeCompleto {
    display: flex;
    align-self: stretch;
    margin: 10px 0px;
}

input {
    flex: 1;
    font-size: 1.4rem;
    outline: none;
    border: 1px solid #DDD;
    border-radius: 5px;
    padding: 5px 10px;
}

::-webkit-input-placeholder {
   color: #bbb8b8;
}

input:focus {
    border: 1px solid #6b3ba1;
}
</style>