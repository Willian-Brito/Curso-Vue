<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible 
			v-for="mensagem in mensagens" 
			:key="mensagem.texto" 
			:variant="mensagem.tipo"> 
			{{ mensagem.texto }}
		</b-alert>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input 
					type="text" 
					size="lg" 
					v-model="usuario.nome" 
					placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email">
				<b-form-input 
					type="email" 
					size="lg" 
					v-model="usuario.email" 
					placeholder="Informe o Email"></b-form-input>
			</b-form-group>
			<hr>

			<b-button @click.prevent="save" size="lg" variant="primary">Salvar</b-button>
			<b-button @click.prevent="getUsers" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>Email: </strong> {{ usuario.email }} <br>
				<strong>ID: </strong> {{ id }} <br>
				<b-button variant="warning" size="lg" @click="load(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="remove(id)">Delete</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>

export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		clean() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.mensagens = []
			this.id = null
		},
		alert(tipo, msg, timeout = 100) {
			setTimeout(() => {
				this.mensagens.push({
					texto: msg,
					tipo: tipo
				})
			},timeout)
		},
		load(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		remove(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.clean()

					setTimeout(() => {
						this.getUsers()
					}, 500)

					this.alert('success', 'Operação realizada com  sucesso!', 1500)
				})
				.catch(err => {
					console.log(err)
					this.alert('danger', 'Problema para excluir!')
				})
		},
		save() {
			const metodo = this.id ? 'patch' : 'post'
			const finalURL = this.id ? `/${this.id}.json` : '.json'

			this.$http[metodo](`/usuarios${finalURL}`, this.usuario)
				.then(_ => {
					
					if (this.id) 
						this.getUsers()
					else
						this.clean()

					this.alert('success', 'Operação realizada com  sucesso!')
				})
		},
		getUsers() {
			this.$http.get('usuarios.json')
				.then(res => {
					this.clean()
					this.usuarios = res.data
					console.log(res.data)
				})				
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
