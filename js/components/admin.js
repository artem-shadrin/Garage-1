$(document).ready(function() {
  $('.button--create').on('click', function(e) {
    e.preventDefault();
    $('.create').toggleClass('create_active');
    $('.header').toggleClass('header_active');
  });


  $('.button--add__news').on('click', function(e) {
    e.preventDefault();
    $('.create__add').toggleClass('create_active');
    $('.header').toggleClass('header_active');
  });


  $('.button--add').on('click', function(e) {
    e.preventDefault();
    $('.create__survey').toggleClass('create_active');
    $('.header').toggleClass('header_active');
  });

  
  $('.create .create__button').on('click', function(e) {
    e.preventDefault();
    $('.create').removeClass('create_active');
    $('.header').removeClass('header_active');
  });


  $('.create__add .create__button').on('click', function(e) {
    e.preventDefault();
    $('.create__add').removeClass('create_active');
    $('.header').removeClass('header_active');
  });

  
  $('.create__survey .create__button').on('click', function(e) {
    e.preventDefault();
    $('.create__survey').removeClass('create_active');
    $('.header').removeClass('header_active');
  });
  
  $('a.camera-card__video').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#player') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#player__close, #myOverlay').click( function(){
    $('#player, #create').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

  $('a.camera-card__title').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#create') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });
});
