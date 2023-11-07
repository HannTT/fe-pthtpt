// btn-search
searchForm = document.querySelector('.search-form');

document.querySelector('#btn-search').onclick = () => {
    searchForm.classList.toggle('active');
    log.classList.remove('active');
}

// login logout
log = document.querySelector('.header .header-1 .profile');

document.querySelector('#btn-user').onclick = () => {
  log.classList.toggle('active');
  searchForm.classList.remove('active');
}

// header
window.onscroll = () => {
    searchForm.classList.remove('active');
    if ( window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    log.classList.remove('active');
}

window.onload = () => {
    if ( window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

// product-slider banner
var swiper = new Swiper(".product-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

// feature product slider
var swiper = new Swiper(".products-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

// new arrivals
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

// loader



function loader() {
    document.querySelector('.loader-container').style.display = 'none';
}

function fadeOut() {
    setInterval(loader, 300);
}

window.onload = fadeOut;