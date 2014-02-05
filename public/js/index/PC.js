function PC(){
	require({
		paths: {
			text: "js/lib/text"
		}
	});

	var hand = new Hand();
	$('.board').append(hand.get$Root());
	hand.draw();
}

$(function(){
	new PC();
})