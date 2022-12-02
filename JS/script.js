
$(function(){
		$('a[href^="#"]').click(function(){ 
			let anchor = $(this).attr('href'); 
			$('html, body').animate({
			scrollTop: $(anchor).offset().top 
			}, 600);
			});
	
			$(document).ready(function() {
				$('.header__burger').click(function(event){
					$('.header__burger,.header__menu').toggleClass('active');
				});
			})
	});