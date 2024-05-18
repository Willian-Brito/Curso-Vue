<template>
    <div class="bar">
        <span class="progress-value">{{ progress }}%</span>
        <div class="progress" :style="{ width: `${progress}%` }"> </div>
    </div>    
</template>

<script>
import eventBus from '@/eventBus.js'

export default {
    data() {
		return {
            progress: 0
		}
	},
    created() {
        eventBus.onCalculateProgress(progress => {            
            this.progress = progress
        })
    }
}
</script>

<style scoped>

.bar {    
    position: relative;
    width: 80%;    
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;    
    align-items: center;    
    border-radius: 8px;
    color: #fff;
    height: 30px;
}

.progress {
    position: absolute;    
    border-radius: 8px;
    height: 100%;    
    background-color: var(--primary);
    align-self: flex-start;
}

.progress-value {
    z-index: 1;
    font-size: 1.5rem;
}

</style>