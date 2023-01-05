const burgerBtn = document.querySelector('.burger__menu');
const burgerMenu = document.querySelector('.header__wrap');
const menuLink = document.querySelectorAll('.header__menu-list li a');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
})

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
  })
})





const projectsSwiper = new Swiper('.projects__swiper', {
  loop: true,
  pagination: {
    el: '.projects__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
  },
  breakpoints: {
    310: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    481: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    961: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1201: {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});


const projectsSliderSwiper = new Swiper('.projects-slider__swiper', {
  loop: true,
  slidesPerView: 1.65,
  spaceBetween: 100,
  centeredSlides: true,
  pagination: {
    el: '.projects-slider__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.projects-slider__next',
    prevEl: '.projects-slider__prev',
  },

  breakpoints: {
    310: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    641: {
      spaceBetween: 60,
    },
    961: {
      spaceBetween: 80,
    },
    1201: {
      spaceBetween: 100,
    },
  },
});