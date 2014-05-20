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
		this.game.bullets.draw(this.c);

		requestAnimationFrame(this.draw.bind(this));
	};
})(window);