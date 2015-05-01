/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last. 

/+ ---------------------------------------------------- */

//

Template.login.rendered = function(){
	var winHeight = $(window).height(),
	winWidth = $(window).width(),
	$holder = $('.login-holder'),
	$street = $('.street'),
	$building = $('.building'),
	$coneA = $('.coneA'),
	$coneB = $('.coneB'),
	$circle = $('#circle'),
	$form = $('.login-form'),
	$music = $('.music'),
	$note = $('.note'),
	skyHeight,
	streetHeight,
	buildingHeight,
	buildingWidth,
	buildingScale,
	buildingCenter,
	buildingLeft,
	buildingMargin = 30;

	resizeScene = function() {
		streetHeight = $street.outerHeight();
		$street.removeAttr('viewBox');
		$street.attr('viewBox','0 0 ' + winWidth + ' ' + streetHeight);
		$street.attr('width', winWidth);
		console.log('0 0 ' + winWidth + ' ' + streetHeight);

		skyHeight = winHeight - streetHeight;
		buildingHeight = $building.height();
		buildingWidth = $building.width();
		buildingScale = skyHeight / buildingHeight;

		$holder.height(winHeight + 'px');

		$building.css({
			'height': buildingHeight*buildingScale,
			'width': buildingWidth*buildingScale,
		});

		buildingWidth = $building.width();
		buildingCenter = -(buildingWidth/2);
		buildingLeft = buildingCenter-buildingWidth-buildingMargin;

		$building.each(function() {
			$(this).css('margin-left', buildingLeft);
			buildingLeft += buildingWidth+buildingMargin;
		});

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
		winWidth = $(window).width();
		winHeight = $(window).height();
		resizeScene();
	});
}

