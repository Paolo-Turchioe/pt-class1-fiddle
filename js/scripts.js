
$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

$(function() {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 300
  });
});
