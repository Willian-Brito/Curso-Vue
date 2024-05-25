<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixins from '@/mixins/frutasMixins'
import usuarioMixin from '@/mixins/usuarioMixins'

export default {
    mixins: [frutasMixins, usuarioMixin],
    created() {
		console.log('created - Frutas.vue!')       
	}
}
</script>