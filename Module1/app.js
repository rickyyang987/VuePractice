new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameRun: false,
		turns: []
	},
	methods: {
		startGame: function(){
			this.gameRun = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function(){
			var dmg = this.calcDamage(3,10)
			this.monsterHealth -= dmg;
			this.turns.unshift({isPlayer: true, text: 'Player hits monster for ' + dmg})
			if(this.checkWin()){
				return;
			}
			this.monsterAttack();
		},
		specialAttack: function(){
			var dmg = this.calcDamage(10,20);
			this.monsterHealth -= dmg;
			this.turns.unshift({isPlayer: true, text: 'Player hits monster hard for ' + dmg})
			if(this.checkWin()){
				return;
			}
			this.monsterAttack();
		},
		heal: function(){
			if(this.playerHealth<=90){
				this.playerHealth+=10;
				this.turns.unshift({isPlayer: true, text: 'Player heals for ' + 10})
			}
			else{
				this.turns.unshift({isPlayer: true, text: 'Player heals for ' + (100-this.playerHealth)})
				this.playerHealth=100;
			}
			this.monsterAttack();
		},
		giveUp: function(){
			this.gameRun=false;

		},
		monsterAttack: function(){
			var dmg = this.calcDamage(5,12)
			this.playerHealth-=dmg;
			this.checkWin();
			this.turns.unshift({isPlayer: false, text: 'Monster hits player for ' + dmg})
		},
		calcDamage: function(min,max){
			return Math.floor(Math.random()*(max-min+1))+min;
		},
		checkWin: function(){
			if(this.monsterHealth<=0){
				if(confirm('You Won. New Game?')){
					this.startGame();
				}
				else{
					this.gameRun=false;
				}
				return true;
			}
			else if(this.playerHealth<=0){
				if(confirm('You Lost. New Game?')){
					this.startGame();
				}
				else{
					this.gameRun=false;
				}
				return true;
			}
			return false;
		}
	}
});

