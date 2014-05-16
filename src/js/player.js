(function playerModule (window) {
	window.Player = Player;

	function Player (keybard) {
		this.x = 20;
		this.y = 20;
		this.width = 20;
		this.height = 20;
		this.color = 'white';
		this.keybard = keybard;
		this.friction = 0.7;
		this.speed = 7;
		this.jump = -18;
		this.vy = 0;
		this.vx = 0;
		this.inAir = false;
	}

	Player.prototype.draw = function(c) {
		c.beginPath();
		c.rect(this.x, this.y,
			this.width,
			this.height);
		c.fillStyle = 'white';
		c.fill();
		c.closePath();
	};

	Player.prototype.update = function() {
		if(this.keybard.right){
			this.vx += this.speed;
		}
		if(this.keybard.left){
			this.vx -= this.speed;
		}
		this.vx *= this.friction;
		this.x += this.vx;

		if(this.keybard.up && !this.inAir){
			this.vy = this.jump;
			this.inAir = true;
		}

		this.y += this.vy;

	};

})(window);