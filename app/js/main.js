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
      spaceBetween: 20,
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
});

Fancybox.bind('[data-fancybox="presentation"]', {
  dragToClose: false,
  Toolbar: false,
  Thumbs: false,
  showNavArrows: false,
  mainClass: "video-overflow",
  Carousel: {
    Navigation: false,
  },
});

Fancybox.bind('[data-fancybox="video"]', {
  dragToClose: false,
  Toolbar: false,
  Thumbs: false,
  showNavArrows: false,
  mainClass: "video-overflow",
});


const portfolioTabs = document.querySelectorAll(".portfolio__head-item");
const portfolioTabsContent = document.querySelectorAll(".portfolio__content");

portfolioTabs.forEach(function(portfolioTab) {
  portfolioTab.addEventListener("click", function() {
    const tab = this.dataset.tab;
    const activeTab = document.querySelector(".portfolio__head-item.active");
    const activeTabContent = document.querySelector(".portfolio__content.active");

    activeTab.classList.remove("active");
    activeTabContent.classList.remove("active");

    this.classList.add("active");
    document.getElementById(tab).classList.add("active");
  });
});