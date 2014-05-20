(function groupmodule (window) {
	window.Group = Group;

	function Group (newObjConstructor) {
		this.newObjConstructor = newObjConstructor;
		this.collection = [];
	}

	Group.prototype.add = function() {
		var instance = new this.newObjConstructor();
		instance.init.apply(instance, arguments);
		this.collection.push(instance);
	};

	Group.prototype.update = function(callback) {
		for (var i = this.collection.length - 1; i >= 0; i--) {
			//this.gravity(this.collection[i]);
			this.collection[i].update();
			//this.collideWithWorld(this.collection[i]);
			callback(this.collection[i]);
		};
	};

	Group.prototype.removeKilled = function() {
		for (var i = this.collection.length - 1; i >= 0; i--) {
			if(this.collection[i].killed){
				this.collection.splice(i, 1);
			}
		};
	};

	Group.prototype.draw = function(c) {
		for (var i = this.collection.length - 1; i >= 0; i--) {
			this.collection[i].draw(c);
		};
	};

})(window);