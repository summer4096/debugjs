var debug = function(){
	var args = process.argv;
	this.enabled = (args[2] == 'debug');
	this.type = this.enabled ? (args[3] ? args[3] : 'all') : false;
	this.msg = function(type, msg){
		if (!this.enabled) {return;}
		if (typeof msg == 'undefined') {
			msg = type;
			type = 'all';
		}
		if (this.type != 'all' && this.type != type) {return;}
		console.error('[debug] ['+type+'] '+msg);
	};
};

module.exports = new debug();
