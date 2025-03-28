const navLink = document.querySelectorAll('.nav-menu .nav-link')
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close");


menuOpenButton.addEventListener("click" ,()=>{
    // toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu")
})

// close menu when the close button is clicked 
menuCloseButton.addEventListener("click" ,()=> menuOpenButton.click())


// close menu when the nav-link is clicked 

navLink.forEach(link=>{
  link.addEventListener("click", ()=>menuOpenButton.click())
})
// // Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor :true,
    spaceBetween :25,
  
    // If we need pagination
    
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
      DynamicsBullets : true,
    },
  
    // Navigation arrows

    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive breackpoints
    breakpoints:{
      0:{
        slidesPerView : 1
      },
      768:{
        slidesPerView : 1
      },
      1024:{
        slidesPerView : 1
      }
    }
  
  });

