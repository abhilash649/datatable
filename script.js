jQuery(document).ready(function(){
	jQuery(".final-header").hide();
	var headerOffset = jQuery("thead").offset().top;
	
	jQuery(window).scroll(function(){
		var scrollPos = jQuery(window).scrollTop();
		// jQuery(".status").html(scrollPos);
		if(scrollPos >= headerOffset){
			jQuery(".initial-header").hide();
			jQuery(".final-header").show();
			jQuery("#fill").addClass("filler");
			
		}
		else{
			jQuery(".initial-header").show();
			jQuery(".final-header").hide();
			jQuery("#fill").removeClass("filler");
		}
	});
	

});