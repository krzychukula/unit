(function bulletmodule (window) {
	window.Bullet = Bullet;

	function Bullet () {
		this.x = 0;
		this.y = 0;
		this.width = 10;
		this.height = 5;
		this.speed = 7;
		this.vy = 0;
		this.vx = 0;
		this.inAir = true;
		this.color = "#1BBC9B";
		this.killed = false;
	}

	Bullet.prototype.init = function(player) {
		this.killed = false;
		if(player.directionRight){
			this.x = player.x + player.width;
			this.vx = this.speed;
		}else{
			this.x = player.x;
			this.vx = -1 * this.speed;
		}
		this.y = player.y + (player.height / 2) - (this.height /2);
	};

	Bullet.prototype.update = function() {
		this.x += this.vx;
	};
	Bullet.prototype.collide = function(collide) {

		this.killed = true;

	};

	Bullet.prototype.draw = function(c) {
		if(this.killed) return;

		c.beginPath();
		c.rect(this.x, this.y,
			this.width,
			this.height);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	};

})(window);