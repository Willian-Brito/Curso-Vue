<template>    
    <div class="card" :class="finishClass" @click="taskStateChange">
        <span class="close" @click.stop="removeTask()">x</span>
        <div> {{ card.text }}</div>
    </div>
</template>

<script>
import '../assets/css/global.css'
import eventBus from '@/eventBus.js'

export default {
    props: {
        card: {
            type: Object,
            required: true   
        }
    },
    data() {
        return {            
            finishClass: this.card.pending ? 'pending' : 'finish',            
        }
    },
    methods: {
        removeTask() {            
            eventBus.removeTask(this.card);
        },
        taskStateChange() {

            this.finishClass = this.card.pending ? 'finish' : 'pending';
            eventBus.taskStateChange(this.card); 
        }
    }
}
</script>

<style scoped>
.card {
    position: relative;
    box-sizing: border-box;
    display: flex;    
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background-color: #ffffffc7;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
    cursor: pointer;
    user-select: none;
}

.close {
    position: absolute;
    right: 10px;
    top:10px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 9px;
    font-weight: 600;
    width: 12px;
    height: 12px; 
    cursor: pointer;        
}

.pending {
    border: 1px solid #ee6464;
    color: #ee6464;
    border-left: 12px solid;
}

.pending .close{
    background-color: #ee6464;
}

.finish {
    border: 1px solid #61936e;
    color: #61936e;
    border-left: 12px solid;
    text-decoration: line-through;
}

.finish .close{
    background-color: #61936e;
}

</style>