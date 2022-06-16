$(document).ready(function() {
    /*counter */
    $(".fact__number").counterUp({
        delay: 10,
        time: 2000
    });
    $("#slider__feedback").owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                dots: true,

            },

            768: {
                items: 2,
                dots: true,

            }




        }
    });
    $("#slider__brand").owlCarousel({
        loop: true,
        autoplay: true,
        rewind: true,
        /* use rewind if you don't want loop */
        margin: 20,
        dots: false,
        /*
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 2000,
        smartSpeed: 800,
        autoplayHoverPause: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },

            768: {
                items: 3,
                nav: false,
            },

            1000: {
                items: 5,
                nav: false
            },


        }
    });
});

/**filter */
const item = $('.portfolio__list-item');

item.click(function() {
    const value = $(this).attr('data-filter');
    console.log(value);
    if (value == 'all') {
        $('.portfolio__item').show(1000)
    } else {
        $('.portfolio__item').not('.' + value).hide(1000);
        $('.portfolio__item').filter('.' + value).show(1000);
    }
});
item.click(function() {
    $(this).addClass('text-active').siblings().removeClass('text-active');

})

/**show mneu-icon-chart */
const nav_mobile = document.querySelector('.nav-mobile');
const overlaymenu = document.querySelector('.overlaymenu');
const nav__menu_mobile = document.querySelector('.nav__menu_mobile');
console.log(nav_mobile);
nav_mobile.addEventListener('click', function() {
    this.classList.toggle('is__show');
    overlaymenu.classList.toggle('open');
    nav__menu_mobile.classList.toggle('is_show_menu');
});

const nav__menu_mobile_pages = document.querySelector('.nav__menu-mobile-pages');
const nav__menu_mobile_list = document.querySelector('.nav__menu_mobile-list')
nav__menu_mobile_pages.addEventListener('click', function() {
    nav__menu_mobile_list.classList.toggle('show_pages');

})



/*dropdown menu */
const list_blog = document.querySelector('.list-blog');
const list_page = document.querySelector('.ul__list-page');

const nav_list_blog = document.querySelector('.nav__list-item-blog');
const nav_list_page = document.querySelector('.nav__list-item-page');
console.log(nav_list_page);
nav_list_blog.addEventListener("mouseover", function() {
    list_blog.style.display = "block";
    list_page.style.display = "none";
})
nav_list_blog.addEventListener("mouseleave", function() {
    list_blog.style.display = "none";

})
nav_list_page.addEventListener("mouseover", function() {
    list_blog.style.display = "none";
    list_page.style.display = "block";
})
nav_list_page.addEventListener("mouseleave", function() {
    list_page.style.display = "none";

})

/*back-to-top */
const back_top = document.querySelector('.back-to-top');
console.log(back_top);
/*-- thực hiện sự kiện scroll */
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    console.log(scrolled);
    if (scrolled > 600) {
        back_top.classList.add('show-back');
    } else {
        back_top.classList.remove('show-back');
    }
    back_top.addEventListener('click', function() {
        window.scrollTo({
            top: 0
        })
    })
})