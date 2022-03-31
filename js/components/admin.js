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
});