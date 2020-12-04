import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween:10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      870:{
        slidesPerView:2,
        spaceBetween: 0,
      },
     1200:{
        slidesPerView:3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween:20,
      },
    }
  });