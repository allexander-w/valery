const swiper=new Swiper(".swiper",{slidesPerView:2,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:2,grid:{rows:1},pagination:!1,navigation:!1},992:{grid:{rows:2}}}}),aboutSwiper=new Swiper(".about__swiper",{slidesPerView:3,spaceBetween:30,scrollbar:{el:".swiper-scrollbar"},breakpoints:{320:{slidesPerView:6,direction:"vertical",scrollbar:!1,navigation:!1},767:{slidesPerView:3,spaceBetween:30,scrollbar:{el:".swiper-scrollbar"}}}}),reviewSwiper=new Swiper(".review__swiper",{slidesPerView:3,loop:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),sad=new Swiper(".bar-slider",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),accordion=document.querySelectorAll(".dropdown");for(i=0;i<accordion.length;i++)accordion[i].addEventListener("click",(function(){this.classList.toggle("active")}));document.querySelector(".burger").addEventListener("click",(()=>{document.querySelector(".header__navigation").classList.add("header__open"),document.querySelector("html").classList.add("overflow")})),document.querySelector(".burger__close").addEventListener("click",(()=>{document.querySelector(".header__navigation").classList.remove("header__open"),document.querySelector("html").classList.remove("overflow")}));