const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
  },
});