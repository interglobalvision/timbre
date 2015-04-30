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
	$cone = $('#cone'),
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

	$music.addClass('show-hide');

	var buildingWinHeight = $('.window').height();

	$music.animate({'top': '10%'}, 2000, function() {
		$cone.animate({'opacity': 0}, 1000, function() {
			$cone.appendTo('.open-window').css('top', (buildingWinHeight/2));
			$cone.animate({'opacity': 1}, 1000, function() {
				var formHeight = $form.css('height', 'auto').height();
				$form.css('height',0);
				$form.animate({'height': formHeight, 'opacity': 1}, 1000);
			})
		});
	})
		

	$(window).on('resize', function() {
		winHeight = $(window).height();
		resizeScene();
	});
}

