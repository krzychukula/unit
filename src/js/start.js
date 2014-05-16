

(function startmodule (window, document) {
	var keybard = new Keybard();
	keybard.init();
	var game = new Game(document.getElementById('game'), keybard);
	var render = new Render(game);
	game.init(640, 480);
	render.init();

})(window, document)