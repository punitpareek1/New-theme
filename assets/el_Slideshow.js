$(document).ready(function(){
	
	NpSlideshow_HideAllSlides();
	NpSlideshow_DisplayFirstSlide();
	
	setInterval( "NpSlideshow_ChangeSlide()", 7000 );
	
});

function NpSlideshow_HideAllSlides(){
	$('.np-slideshow .np-slideshow-slide').hide();
}

function NpSlideshow_DisplayFirstSlide(){
	$('.np-slideshow .np-slideshow-slide:first').show().addClass('active');		
}

function NpSlideshow_ChangeSlide(){
	
	var active 	= $('.np-slideshow .active');
    var next 		= active.next('.np-slideshow-slide');   

	if (typeof next.attr('class') === "undefined"){
		next		 = $('.np-slideshow .np-slideshow-slide:first');
	}
	
	active.removeClass('active').fadeOut(function(){
		next.addClass('active').fadeIn('fast');
	});
	
}


/*
<div class="contain-1200 np-slideshow">
		<div class="np-slideshow-slide">Slide One</div>
		<div class="np-slideshow-slide">Slide Two</div>
		<div class="np-slideshow-slide">Slide Three</div>
	</div>
*/