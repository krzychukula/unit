
(function gamemodule (window) {
	window.Game = Game;

	function Game (canvas, keyboard) {
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.bullets = new Group(Bullet);
		this.player = null;
		this.enemies = new Group(Enemy);
	}

	Game.prototype.init = function(width, height) {
		this.width = width;
		this.height = height;
		this.player = new Player(this);
		this.player.x = 50;
		this.player.y = 50;
		this.enemies.add(width / 4);
		this.enemies.add(width / 3 );
		requestAnimationFrame(this.update.bind(this));
	};

	Game.prototype.update = function() {
		this.gravity(this.player);
		this.player.update();
		this.collideWithWorld(this.player);

		this.enemies.update(function(enemy){
			this.gravity(enemy);
			this.collideWithWorld(enemy);
		}.bind(this));

		this.bullets.update(function(bullet){
			this.collideWithWorld(bullet);
		}.bind(this));

		this.collideGroups(this.enemies, this.bullets);

		this.bullets.removeKilled();
		this.enemies.removeKilled();

		requestAnimationFrame(this.update.bind(this))
	};

	Game.prototype.collideGroups = function(groupA, groupB) {
		//TODO: think about moving it to Group.js
		for (var i = 0; i < groupA.collection.length; i++) {
			for (var j = i; j < groupB.collection.length; j++) {
				this.collide(groupB.collection[j], groupA.collection[i]);
			};
		};
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
		this.bullets.add(player);
	};


})(window);