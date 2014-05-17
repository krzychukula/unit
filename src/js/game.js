
(function gamemodule (window) {
	window.Game = Game;

	function Game (canvas, keybard) {
		this.canvas = canvas;
		this.keybard = keybard;
	}

	Game.prototype.init = function(width, height) {
		this.width = width;
		this.height = height;
		this.player = new Player(this.keybard);
		this.player.x = 50;
		this.player.y = 50;
		this.enemies = [new Enemy(width/4), new Enemy(width/2)]
		requestAnimationFrame(this.update.bind(this));
	};

	Game.prototype.update = function() {
		this.gravity(this.player);
		this.player.update();
		this.collideWithWorld(this.player);

		for (var i = this.enemies.length - 1; i >= 0; i--) {
			this.gravity(this.enemies[i]);
			this.enemies[i].update();
			this.collideWithWorld(this.enemies[i]);
		};

		requestAnimationFrame(this.update.bind(this))
	};


	Game.prototype.collideWithWorld = function(box) {
		if(box.y + box.height > this.height){
			box.y = this.height - box.height;
			box.inAir = false;

		}
		if(box.x < 0) {
			box.x = 0;
			box.collide(this);
		}else if(box.x + box.width > this.width){
			box.x = this.width - box.width;
			box.collide(this);
		}
	};

	Game.prototype.gravity = function(box) {
		box.vy += 0.8;
	};






})(window);