
(function gamemodule (window) {
	window.Game = Game;

	function Game (canvas, keybard) {
		this.canvas = canvas;
		this.player = new Player(keybard);
	}

	Game.prototype.init = function(width, height) {
		this.width = width;
		this.height = height;
		requestAnimationFrame(this.update.bind(this));
	};

	Game.prototype.update = function() {
		this.player.update();
		this.collideWithWorld(this.player);
		this.gravity(this.player);
		requestAnimationFrame(this.update.bind(this))
	};


	Game.prototype.collideWithWorld = function(box) {
		if(box.y + box.height > this.height){
			box.y = this.height - box.height;
			box.inAir = false;
		}
		if(box.x < 0) {
			box.x = 0;
		}else if(box.x + box.width > this.width){
			box.x = this.width - box.width;
		}
	};

	Game.prototype.gravity = function(box) {
		box.vy += 0.8;
	};






})(window);