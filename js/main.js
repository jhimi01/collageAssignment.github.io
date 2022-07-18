let nav  = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// owl slider==========

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 3,
        },
        // 991:{
        //     items: 4,
        // }
    }
});