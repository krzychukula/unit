/* exported Keyboard */
(function keyboardmodule (window) {
	window.Keyboard = Keyboard;

	function Keyboard () {
		this.up = false;
		this.left = false;
		this.right = false;
		this.down = false;
		this.space = false;
	}

	Keyboard.prototype.init = function() {
		window.addEventListener('keydown', this.keyDown.bind(this), false);
		window.addEventListener('keyup',this.keyUp.bind(this), false);
	};

	Keyboard.prototype.dealWithKeyboard = function(e, value) {
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
	Keyboard.prototype.keyDown = function(e) {
		this.dealWithKeyboard(e, true);
	};
	Keyboard.prototype.keyUp = function(e) {
		this.dealWithKeyboard(e, false);
	};
})(window);