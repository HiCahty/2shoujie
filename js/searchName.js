define(function(){
	function GetClass(opts){
		this.opts = opts;
	}
	GetClass.prototype.getclass = function( ) {
		var Oparent = this.opts.Oparent;
		var OclassName = this.opts.OclassName;
		var obj = Oparent.getElementsByTagName('div');
		var pinS = []; 
		for(var i=0;i<obj.length;i++){
			if(obj[i].className == OclassName){
				pinS.push(obj[i]);
			}
		};
		return pinS;
	};

	return {
		GetClass:GetClass
	}
});