const projectsSwiper = new Swiper('.projects__swiper', {
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
const projectsSliderSwiper = new Swiper('.projects-slider__swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 100,
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