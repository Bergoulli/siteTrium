let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let contactInfo = document.querySelector('.contact-info');

// BOTÕES
let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let loginBtn = document.querySelector('#login-btn');
let infoBtn = document.querySelector('#info-btn');
let closeContactBtn = document.querySelector('#close-contact-info');

// MENU
if(menuBtn){
   menuBtn.onclick = () =>{
      navbar?.classList.toggle('active');
      searchForm?.classList.remove('active');
   };
}

// SEARCH
if(searchBtn){
   searchBtn.onclick = () =>{
      searchForm?.classList.toggle('active');
      navbar?.classList.remove('active');
   };
}

// LOGIN (mesmo que você remova, não quebra mais)
if(loginBtn){
   loginBtn.onclick = () =>{
      navbar?.classList.remove('active');
      searchForm?.classList.remove('active'); 
   };
}

// CONTACT INFO (AGORA VAI FUNCIONAR NORMAL)
if(infoBtn){
   infoBtn.onclick = () =>{
      contactInfo?.classList.add('active');
   };
}

// FECHAR CONTACT
if(closeContactBtn){
   closeContactBtn.onclick = () =>{
      contactInfo?.classList.remove('active');
   };
}

// SCROLL
window.onscroll = () =>{
   navbar?.classList.remove('active');
   searchForm?.classList.remove('active');
   contactInfo?.classList.remove('active');
}

// SWIPERS
new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
   },
});

new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
   },
});

new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1000: { slidesPerView: 5 },
   },
});