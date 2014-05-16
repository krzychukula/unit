(function keybardmodule (window) {
	window.Keybard = Keybard;

	function Keybard () {
		this.up = false;
		this.left = false;
		this.right = false;
		this.down = false;
		this.space = false;
	}

	Keybard.prototype.init = function() {
		window.addEventListener("keydown", this.keyDown.bind(this), false);
		window.addEventListener("keyup",this.keyUp.bind(this), false);
	};

	Keybard.prototype.dealWithKeybard = function(e, value) {
		switch(e.keyCode) {
			case 37:
			// left key
			this.left = value;
			break;
			case 38:
			// up key
			this.up = value;
			break;
			case 39:
			// right key
			this.right = value;
			break;
			case 40:
			// down key
			this.down = value;
			break;
			case 32:
			//space
			this.space = value;
			break;
		}
	};
	Keybard.prototype.keyDown = function(e) {
		this.dealWithKeybard(e, true);
	};
	Keybard.prototype.keyUp = function(e) {
		this.dealWithKeybard(e, false);
	};
})(window);