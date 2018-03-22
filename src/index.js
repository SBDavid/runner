var Runner = require('./runner');

window.onload = function () {

	
	/* window.onError = function() {
		if (vConsole.$dom) {
			this.$dom.style.display = 'block';
		}
	}
 */
	var vConsole = new VConsole({
		onReady: function() {
			//this.$dom.style.display = 'none';
			var runner = new Runner('#game-containter');
		}
	});
	

	

}