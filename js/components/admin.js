$(document).ready(function() {
  $('.button--create').on('click', function(e) {
    e.preventDefault();
    $('.create').toggleClass('create_active');
    $('.header').toggleClass('header_active');
    if ($(this).hasClass('visible')) {
      $(this).removeClass('visible');
      $(this).toggleClass('active');
      $(this).css("pointer-events", "auto");
      $('.button--create').css("pointer-events", "none");
    } else {
      $(this).addClass('visible');
      $(this).removeClass('active');
      $('.button--create').css("pointer-events", "auto");
    };
  });
  $('.create__button').on('click', function(e) {
    e.preventDefault();
    $('.create').removeClass('create_active');
    $('.header').removeClass('header_active');
    $('.button--create').css("pointer-events", "auto");
    $('.button--create').addClass('visible');
    $('.button--create').removeClass('active');
  });
});