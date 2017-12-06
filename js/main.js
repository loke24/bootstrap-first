$(document).ready(function(){
	$('section#screenshot a').on('click',function(){
		$('div#modal img').attr('src',$(this).attr('data-image-url'));
	});
	var nav=$('.navbar-fixed-top');
	
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		/*console.log(scroll);*/
		if(scroll>=500)
		{
			nav.addClass('effect');
		}
		else{
			nav.removeClass('effect');
		}
	});
	$('.navbar div.navbar-collapse>ul').waypoint(function(){
		$(this.element.hover).addClass('animated fade');
		},{offset:'50%'
	});
	
	$('.about .cicle').waypoint(function(){
		$('.about .cicle').addClass('animated fadeInUp');
		},{offset:'50%'
	});
	$('.center-feature img').waypoint(function(){
		$('.center-feature img').addClass('animated rubberBand');
		},{offset:'50%'
	});
	$('.features .cicle').waypoint(function(){
		$(this.element).addClass('animated fadeInUp');
		},{offset:'50%'
	});
	$('#screenshot .col-sm-4').waypoint(function(){
		$(this.element).addClass('animated zoomIn');
		$(this.element).css({opacity:1});
		},{offset:'50%'
	});
	$('#download div.phone img').waypoint(function(){
		$(this.element).addClass('animated fadeInRight');
		},{offset:'50%'
	});
	$('#download .download-platforms>div').waypoint(function(){
		$(this.element).addClass('animated fadeInUp');
		},{offset:'50%'
	});
	
});
