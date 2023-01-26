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
      allowTouchMove: false,
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

const barSlider = new Swiper(".bar-slider", {
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

const reviewSwiperCards = new Swiper(".review__swiper-cards", {
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
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 3,
    },
  }
})

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

const clickHandler = document.querySelectorAll(".popup-wrapper__expanded")
const html = document.querySelector("html")

window.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("popup-wrapper")) {
    document.querySelector(".popup-wrapper").classList.remove("popup-wrapper__expanded")
    html.style.overflow = ""
  }
  if (e.target && e.target.getAttribute("data-class") === "popup-wrapper__expanded") {
    document.querySelector(".popup-wrapper").classList.add("popup-wrapper__expanded")
    html.style.overflow = "hidden"
  }
})


Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: false,
  Thumbs: false,
  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});

let $items = document.querySelectorAll(".portfolio__item")
const items = [...$items]

let size = 8
let res = []

for (let i = 0; i < Math.ceil(items.length / size); i++) {
  res[i] = items.slice((i * size), (i * size) + size)
}

for (let i = 1; i < res.length; i += 8) {
  items[i].gridRowStart = 6;
  items[i].gridRowEnd = 8;
}
