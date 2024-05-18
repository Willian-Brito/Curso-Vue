<template>
    <div>
        <div v-if="cards.length != 0" class="cards">
            <div v-for="card in cards" :key="card.text">            
                <Card :card="card"/>
            </div>
        </div>
        <div v-else>
            <p>Sua vida está em dia :)</p>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import eventBus from '@/eventBus.js'

export default {
    components: { Card },
    data() {
        return {
            cards: []
        }
    },
    computed: {
        progress() {
            const total = this.cards.length 
            const done = this.cards.filter(card => !card.pending).length
            return Math.round(done / total * 100) || 0
        }
    },
    watch: {
        cards: {
            deep: true,
            handler() {
                eventBus.calculateProgress(this.progress)
                localStorage.setItem('tasks', JSON.stringify(this.cards))
            }
        }
    },
    created() {

        const json = localStorage.getItem('tasks')
        const array = JSON.parse(json) 
        this.cards = Array.isArray(array) ? array : []

        eventBus.onCreateCard(card => {
                        
            const sameName = t => t.text === card.text
            const reallyNew = this.cards.filter(sameName).length == 0

            if (reallyNew) {
                this.cards.push({
                    text: card.text,
                    pending: card.pending || true
                })
            }
        })

        eventBus.onRemoveTask(card => {
            // const index = this.cards.indexOf(card);
            // if(index >= 0) this.cards = this.cards.splice(index, 1);

            this.cards = this.cards.filter(item => item !== card);
        })

        eventBus.onTaskStateChange(card => {
            const i = this.cards.indexOf(card);
            this.cards[i].pending = !this.cards[i].pending            
        })
    }
}
</script>

<style scoped>
.cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

p {
    font-size: 20px;
    font-weight: 500;
}
</style>