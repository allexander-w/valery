const swiper = new Swiper(".swiper", {
  slidesPerView: 2,

  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 'auto',
      grid: {
        rows: 1,
      },
      pagination: false,
      navigation: false,
    },
    992: {
      grid: {
        rows: 2,
      },
    }
  }
});

const aboutSwiper = new Swiper(".about__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 6,
      direction: "vertical",
      scrollbar: false,
      navigation: false,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    },
  }
});

const reviewSwiper = new Swiper(".review__swiper", {
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 'auto'
    },
    767: {
      slidesPerView: 3,
    },
  }
});

const sad = new Swiper(".bar-slider", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const accordion = document.querySelectorAll('.dropdown');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('active')
  })
}

document.querySelector('.burger').addEventListener("click", () => {
  document.querySelector(".header__navigation").classList.add("header__open")
  document.querySelector("html").classList.add("overflow")
})

document.querySelector('.burger__close').addEventListener("click", () => {
  document.querySelector(".header__navigation").classList.remove("header__open")
  document.querySelector("html").classList.remove("overflow")
})