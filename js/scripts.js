$(function() {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 300
  });
});

$(function(){
  $('.tabs .tab-links a').on('click',function(e){
    var currentAttrValue=$(this).attr('href');
    $('.tabs'+currentAttrValue).show().siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
  e.preventDefualt();
});
});
