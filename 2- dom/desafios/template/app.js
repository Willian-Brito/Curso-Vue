new Vue({
    el: '#desafio',
    data: {
        nome: 'Willian Ferreira Brito',
        idade: 32,
        imagem: 'https://i.ytimg.com/vi/MmgswF5GFf8/maxresdefault.jpg'
    },
    methods: {
        multiplicarIdade() {
            return this.idade * 3;
        },
        random() {
            return Math.random();
        }
    }
})