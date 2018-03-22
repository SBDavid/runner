var Runner = require('./runner');

window.onload = function () {

	
	var vConsole = new VConsole({
		onReady: function() {
			//this.$dom.style.display = 'none';
			var runner = new Runner('#game-containter');
		}
	});
	

	

}