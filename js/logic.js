// Copyright Caglar Yanik, 2014

jQuery(document).ready(function($) {
		
		// bootstrap dropdown and toggable menu
		// $('.navbar .parent > a').addClass('dropdown-toggle');
		// $('.navbar .dropdown-toggle').attr('data-toggle','dropdown');
		// $('.navbar .dropdown-toggle').append(' <b class="caret"></b>');
		
		// alle Bilder responive machen
		$('main img').addClass('img-responsive');
	
		//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
	
		//Click event to scroll to top
		$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
});