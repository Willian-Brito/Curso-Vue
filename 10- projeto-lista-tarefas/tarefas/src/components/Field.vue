<template>
    <div>
        <div class="field">
            <input type="text" placeholder="Nova Tarefa?" v-model="text" @keydown.enter="createCard" required>
            <button @click="createCard">+</button>
        </div>
        <div v-show="this.messageValidation.length != 0">{{ messageValidation }}</div>
    </div>
</template>

<script>
import '../assets/css/global.css'
import eventBus from '@/eventBus.js'

export default {
    data() {
        return {
            text: '',
            messageValidation: ''
        }
    },
    methods: {
        createCard() {   
            
            if(this.text === '') {
                this.messageValidation = 'Informe uma nova tarefa!'
                return;
            }

            eventBus.createCard({
                text: this.text
            })

            eventBus.addTask()
            this.text = ''
            this.messageValidation = ''
        }
    }
}
</script>

<style scoped>

.field {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
}

input {
    height: 30px;
    width: 20rem;
    border-radius: 5px;
    border: 1px solid #a09b9b;
    outline-color: var(--primary);
    color: #636060;
    font-size: 18px;
}

button {
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #ffffff9c;
    width: 30px;
    font-size: large;
    font-weight: 600;
    background-color: var(--primary);
    color: #fff;
    cursor: pointer;
}

</style>