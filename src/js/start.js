

(function startmodule (window, document) {
	var keyboard = new Keyboard();
	keyboard.init();
	var game = new Game(document.getElementById('game'), keyboard);
	var render = new Render(game);
	game.init(640, 480);
	render.init();

})(window, document);