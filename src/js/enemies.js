(function enemiescollectionmodule (window) {
	window.Enemies = Enemies;

	function Enemies (Enemy) {
		this.collection = [];
	}

	Enemies.prototype.addEnemy = function(x) {
		this.collection.push(new Enemy(x));
	};

	Enemies.prototype.update = function(callback) {
		for (var i = this.collection.length - 1; i >= 0; i--) {
			//this.gravity(this.collection[i]);
			this.collection[i].update();
			//this.collideWithWorld(this.collection[i]);
			callback(this.collection[i]);
		};
	};

	Enemies.prototype.removeKilled = function() {
		for (var i = this.collection.length - 1; i >= 0; i--) {
			if(this.collection[i].killed){
				this.collection.splice(i, 1);
			}
		};
	};

	Enemies.prototype.draw = function(c) {
		for (var i = this.collection.length - 1; i >= 0; i--) {
			this.collection[i].draw(c);
		};
	};

})(window);