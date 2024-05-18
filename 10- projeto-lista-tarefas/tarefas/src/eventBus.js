import Vue from 'vue'

export default new Vue({
    methods: {
        createCard(text) {
            this.$emit('createCard', text)
        },
        onCreateCard(callback) {
            this.$on('createCard', callback)
        },
        taskStateChange(task) {
            this.$emit('taskStateChange', task)
        },
        onTaskStateChange(callback) {
            this.$on('taskStateChange', callback)
        },
        addTask() {
            this.$emit('addTask')
        },
        onAddTask(callback) {
            this.$on('addTask', callback)
        },
        removeTask(hasFinish) {
            this.$emit('removeTask', hasFinish)
        },
        onRemoveTask(callback) {
            this.$on('removeTask', callback)
        },
        calculateProgress(progress) {
            this.$emit('calculateProgress', progress)
        },
        onCalculateProgress(callback) {
            this.$on('calculateProgress', callback)
        },
    }
})