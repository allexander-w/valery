const swiper = new Swiper(".swiper", {
  slidesPerView: 2,

  grid: {
    rows: 2,
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const aboutSwiper = new Swiper(".about__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});