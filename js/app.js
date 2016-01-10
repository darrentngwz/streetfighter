$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		//play hadouken sound
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().animate(
			{'left':'1020px'},
			800,//this is measured in milliseconds and makes hadouken move in this time
			function() {
				$(this).hide();//hides hadouken at 520px
				$(this).css('left','600px');
			});
	})
	.mouseup(function() {
		console.log('mouseup');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.hadouken').show();
	})
	function playHadouken () {
		$('#hadouken-sound')[0].volume=0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
});

$('body').keydown(function(event) {
    if (event.which == 88) {
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
        $('.hadouken').hide();
        $('.ryu-cool').show();      
		}
	});
	
	$('body').keyup(function(event) {
	if (event.which == 88) {
        $('.ryu-still').show();
	    $('.ryu-cool').hide();
		}
	});