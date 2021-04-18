const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // hide badges
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // show up-side button
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    // show badges
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // hide up-side button
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, idx) {
  gsap.to(fadeEl, 1, {
    delay: (idx + 1) * .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // hide Promotion
    promotionEL.classList.add('hide');
  } else {
    // show Promotion
    promotionEL.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector,
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1, // repeat without a break
      yoyo: true,  //rewind animation
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // Element to be spied
      triggerHook: .8 // at 0.8 of the viewport
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});