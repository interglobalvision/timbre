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
	$note = $('.note'),
	skyHeight,
	buildingHeight,
	buildingWidth,
	buildingScale,
	buildingCenter,
	buildingLeft,
	buildingMargin = 30;

	resizeScene = function() {
		skyHeight = winHeight - $street.outerHeight();
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
		winHeight = $(window).height();
		resizeScene();
	});
}

