function Hand(){
	
	var _$root = $('<canvas id="board" width="500" height="80"></canvas>');
	var _$divRoot = $('<div>');

	var _cardWidth = 35;


	function _init(){
		var elem = _$root.get(0);
		_ctx = elem.getContext('2d');
	}

	this.draw = function(){
		require(["text!cards/10C.svg!strip", "text!cards/AH.svg"], function(){
			
			var s = new XMLSerializer();
			for(var i=0; i < arguments.length; i++){
				var $svg =  $(arguments[i]);
				$svg.width('35');
				$svg.height('50');
				var $card = $('<div>');
				$card.append($svg);
				_$divRoot.append($svg);
			}

		});

	}


	this.get$Root = function(){
		return _$divRoot;
	}

	_init();
}