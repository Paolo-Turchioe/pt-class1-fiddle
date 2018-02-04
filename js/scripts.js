$(function() {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 300
  });
});

function selectTab(tabIndex){
  document.getElementsById('tab1content').style.display="none";
  document.getElementsById('tab2content').style.display="none";

  document.getElementsById('tab'+ tabIndex +'content').style.display="block";
  }
