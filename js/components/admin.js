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

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal_player')
  const trigger = document.querySelectorAll('.camera-card__video')
    .forEach(item => item.addEventListener('click', (e) => {
      if (e.target.closest('.camera-card__video')) {
        modal.classList.add('modal--show')
        activeModal();
      }
    }))

  const activeModal = () => {
    const trigger = (e) => {
      if (e.target.classList.contains('modal_player') || e.target.closest('.close')) {
        modal.classList.remove('modal--show')
        modal.removeEventListener('click', trigger)
      }
    }
    modal.addEventListener('click', trigger)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal_create')
  const trigger = document.querySelectorAll('.camera-card__title')
    .forEach(item => item.addEventListener('click', (e) => {
      if (e.target.closest('.camera-card__title')) {
        modal.classList.add('modal--show')
        activeModal();
      }
    }))

  const activeModal = () => {
    const trigger = (e) => {
      if (e.target.classList.contains('modal_create') || e.target.closest('.close, .create-ad-btn')) {
        modal.classList.remove('modal--show')
        modal.removeEventListener('click', trigger)
      }
    }
    modal.addEventListener('click', trigger)
  }
})