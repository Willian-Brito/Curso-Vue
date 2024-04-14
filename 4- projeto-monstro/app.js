new Vue({
    el: '#app',
    data: {
        min: 5,
        max: 10,
        iniciarJogo: false,
        lifeJogador: 100,
        lifeMonstro: 100,
        tamanhoBarraJogador: '100%',
        tamanhoBarraMonstro: '100%',
        resultado: false,
        jogadorVenceu: false,
        monstroVenceu: false,
        logs: []
    },
    computed: {
        aplicarClasseJogador() {
            return {
                'danger': this.lifeJogador <= 20,
            }
        },
        aplicarClasseMonstro() {
            return {
                'danger': this.lifeMonstro <= 20,
            }
        }
    },
    methods: {
        startGame() {
            this.iniciarJogo = true;
            this.resetGame();
        },
        restartGame() {
            this.iniciarJogo = false;
            this.resetGame();
        },
        resetGame() {
            this.resultado = false;
            this.jogadorVenceu = false;
            this.monstroVenceu = false;
            this.lifeJogador = 100;
            this.lifeMonstro = 100;
            this.tamanhoBarraJogador = `100%`;
            this.tamanhoBarraMonstro = `100%`;
            this.logs = [];
        },
        getRandomNumber() {
            return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        },
        attack() {
            let ataqueMonstro = this.getAttackMonster(); 
            let ataqueJogador = this.getAttackPlayer(); 

            this.renderHTML(ataqueMonstro, ataqueJogador);
            this.takeLife(ataqueMonstro, ataqueJogador);
            this.endGame();        
        },
        specialAttack() {
            let acrescimo = Math.floor(Math.random() * 10);
            let ataqueMonstro = this.getAttackMonster(); 
            let ataqueJogador = this.getAttackPlayer() + acrescimo; 
            
            this.renderHTML(ataqueMonstro, ataqueJogador);
            this.takeLife(ataqueMonstro, ataqueJogador);
            this.endGame(); 
        },
        getAttackPlayer() {
            return this.getRandomNumber(); 
        },
        getAttackMonster() {
            let acrescimo = Math.floor(Math.random() * 5);
            let ataque = this.getRandomNumber() + acrescimo; 

            return ataque;
        },
        heal() {
            let ataqueMonstro = this.getAttackMonster();
            let life =   this.getLifePlayer();
            this.lifeJogador += life;

            this.renderHtmlWithLife(ataqueMonstro, life);
            this.takeLife(ataqueMonstro, 0);
            this.endGame(); 
        },
        getLifePlayer() {
            let acrescimo = Math.floor(Math.random() * 10);
            let life = this.getRandomNumber() + acrescimo; 

            return this.lifeJogador >= 100 ? 0 : life;
        },
        renderHTML(ataqueMonstro, ataqueJogador) {
            let htmlMonstro = `<div class="monster"> MONSTRO ATINGIU JOGADOR COM ${ataqueMonstro}.</div>`
            let htmlJogador = `<div class="player"> JOGADOR ATINGIU MONSTRO COM ${ataqueJogador}.</div>`
            
            this.setHTML(htmlMonstro, htmlJogador);
        },
        renderHtmlWithLife(ataqueMonstro, lifeJogador) {
            let htmlMonstro = `<div class="monster"> MONSTRO ATINGIU JOGADOR COM ${ataqueMonstro}.</div>`
            let htmlJogador = `<div class="player"> JOGADOR GANHOU FORÇA DE ${lifeJogador}.</div>`
            
            this.setHTML(htmlMonstro, htmlJogador);
        },
        setHTML(htmlMonstro,htmlJogador ) {
            this.logs.reverse();            
            this.logs.push(htmlJogador);
            this.logs.push(htmlMonstro);
            this.logs.reverse();
        },
        takeLife(ataqueMonstro, ataqueJogador) {
            this.lifeJogador -= ataqueMonstro;
            this.lifeMonstro -= ataqueJogador;
            this.tamanhoBarraJogador = `${this.lifeJogador}%`;
            this.tamanhoBarraMonstro = `${this.lifeMonstro}%`;
        },
        endGame() {

            if(this.lifeJogador <= 0) {
                this.youLose();
                return;
            }
            
            if(this.lifeMonstro <= 0) this.youWin();
        },
        youWin() {
            this.iniciarJogo = false;
            this.resultado = true;
            this.jogadorVenceu = true;
            this.lifeMonstro = 0;
            this.tamanhoBarraMonstro = `${this.lifeMonstro}%`;
        },
        youLose() {
            this.iniciarJogo = false;
            this.resultado = true;
            this.monstroVenceu = true;
            this.lifeJogador = 0;
            this.tamanhoBarraJogador = `${this.lifeJogador}%`;
        }
    }
}) 