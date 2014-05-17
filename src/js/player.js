(function playerModule (window) {
	window.Player = Player;

	function Player (game) {
		this.x = 20;
		this.y = 20;
		this.width = 20;
		this.height = 20;
		this.color = 'white';
		if(game){
			this.game = game;
			this.keyboard = game.keyboard;
		}
		this.friction = 0.7;
		this.speed = 7;
		this.jump = -18;
		this.vy = 0;
		this.vx = 0;
		this.inAir = false;
		this.directionRight = true;
		this.killed = false;
		this.lastFire = Date.now()
		this.reloadTime = 400;
	}

	Player.prototype.draw = function(c) {
		c.beginPath();
		c.rect(this.x, this.y,
			this.width,
			this.height);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	};

	Player.prototype.update = function() {
		if(this.keyboard.right){
			this.vx += this.speed;
			this.directionRight = true;
		}
		if(this.keyboard.left){
			this.vx -= this.speed;
			this.directionRight = false;
		}
		this.vx *= this.friction;
		this.x += this.vx;

		if(this.keyboard.up && !this.inAir){
			this.vy = this.jump;
			this.inAir = true;
		}

		if(this.keyboard.space){
			if(Date.now() - this.lastFire > this.reloadTime){
				this.game.addBullet(this);
				this.lastFire = Date.now();
			}

		}

		this.y += this.vy;

	};

	Player.prototype.collide = function(collide) {
		if(typeof collide == 'Game'){

		}
	};

})(window);