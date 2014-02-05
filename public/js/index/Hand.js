function Hand(){
	
	var _$divRoot = $('<div class = "hand">');


	function _init(){

	}

	this.draw = function(){
		require(["text!cards/10C.svg!strip", "text!cards/AH.svg"], function(){
			
			var s = new XMLSerializer();
			for(var i=0; i < arguments.length; i++){
				var $svg =  $(arguments[i]);
				$svg.width('35');
				$svg.height('55');
				if( i != 0){
					$svg.css('margin-left' , -30);
				}
				$card = $('<span>');
				$card.append($svg);
				$card.on('click', function(e){
				})
				_$divRoot.append($card);
			}

		});

	}


	this.get$Root = function(){
		return _$divRoot;
	}

	_init();
}