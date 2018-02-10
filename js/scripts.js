
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');


if(tab_id=="tab-1"){
	$('#bxSlider1').bxSlider({
		mode: 'fade',
    captions: true,
    slideWidth: 300
	})
}

if(tab_id=='tab-2'){
	$('#bxSlider2').bxSlider({
		mode: 'fade',
    captions: true,
    slideWidth: 300
	})
}

if(tab_id=="tab-3"){
	$('#bxSlider2').bxSlider({
		mode: 'fade',
    captions: true,
    slideWidth: 300
	})
}

	})

  });
});
