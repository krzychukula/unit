(function enemymodule (window) {
	window.Enemy = Enemy;

	function Enemy () {
		Player.apply(this);
		this.inAir = true;
		this.speed = 1;
		this.color = '#E64C66';
	}

	Enemy.prototype = new Player();
	Enemy.prototype.constructor = Enemy;

	Enemy.prototype.init = function(x) {
		this.x = x;
	};

	Enemy.prototype.update = function() {
		if(!this.inAir){
			this.vx += this.speed;
			this.vx *= this.friction;
		}
		this.x += this.vx;

		this.y += this.vy;
	};
	Enemy.prototype.collide = function(collide) {
		if(Game.prototype.isPrototypeOf(collide)){
			this.speed *= -1;
		}else if(Bullet.prototype.isPrototypeOf(collide)){
			this.killed = true;
		}
	};
})(window);