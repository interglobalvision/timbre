/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last. 

/+ ---------------------------------------------------- */

//

Template.login.rendered = function(){
	var winHeight = $(window).height(),
	$holder = $('.login-holder'),
	$street = $('.street'),
	$building = $('.building'),
	$coneA = $('.coneA'),
	$coneB = $('.coneB'),
	$circle = $('#circle'),
	$form = $('.login-form'),
	$music = $('.music'),
	$note = $('.note');

	resizeScene = function() {
		$holder.height(winHeight + 'px');
		$building.height(winHeight - $street.outerHeight());
	}

	resizeScene();
	
	$('.building').each(function() {
		var windowRowTop = -2;
		$(this).children('.window-row').each(function() {
			$(this).css('top',windowRowTop + '%');
			windowRowTop += 15;
		});
	});
		

	$(window).on('resize', function() {
		winHeight = $(window).height();
		resizeScene();
	});
}

