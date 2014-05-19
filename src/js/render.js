(function rendermodule (window) {
	window.Render = Render;

	function Render (game) {
		this.game = game;
		this.canvas = game.canvas;
		this.c = game.canvas.getContext('2d');
	}

	Render.prototype.init = function() {
		requestAnimationFrame(this.draw.bind(this));

		this.width = this.game.width;
		this.height = this.game.height;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	};

	Render.prototype.draw = function() {
		this.canvas.width = this.width;
		this.game.player.draw(this.c);

		this.game.enemies.draw(this.c);

		for (var i = this.game.bullets.length - 1; i >= 0; i--) {
			this.game.bullets[i].draw(this.c);
		};

		requestAnimationFrame(this.draw.bind(this))
	};
})(window);