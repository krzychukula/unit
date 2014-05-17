
(function gamemodule (window) {
	window.Game = Game;

	function Game (canvas, keyboard) {
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.bullets = [];
		this.player = null;
		this.enemies = [];
	}

	Game.prototype.init = function(width, height) {
		this.width = width;
		this.height = height;
		this.player = new Player(this);
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
		for (var i = this.bullets.length - 1; i >= 0; i--) {
			this.bullets[i].update();
			this.collideWithWorld(this.bullets[i]);
		};

		for (var i = 0; i < this.enemies.length; i++) {
			for (var j = i; j < this.bullets.length; j++) {
				this.collide(this.bullets[j], this.enemies[i]);
			};
		};

		this.removeKilled();

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

	Game.prototype.collide = function(a, b) {
		if(this.checkCollision(a, b)){
			a.collide(b);
			b.collide(a);
		}
	};

	Game.prototype.checkCollision = function(a, b){
		return !(a.x + a.width < b.x ||
				b.x + b.width < a.x ||
				a.y + a.height < b.y ||
				b.y + b.height < a.y);
	};

	Game.prototype.gravity = function(box) {
		box.vy += 0.8;
	};


	Game.prototype.addBullet = function(player) {
		var b =  new Bullet();
		b.init(player);
		this.bullets.push(b);
	};

	Game.prototype.removeKilled= function() {
		for (var i = this.bullets.length - 1; i >= 0; i--) {
			if(this.bullets[i].killed){
				this.bullets.splice(i, 1);
			}
		};
		for (var i = this.enemies.length - 1; i >= 0; i--) {
			if(this.enemies[i].killed){
				this.enemies.splice(i, 1);
			}
		};
	};



})(window);