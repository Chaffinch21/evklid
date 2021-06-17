window.onload = function() {


  const sliderEl = document.querySelector('.swiper-container-js');
  const questionBtn = document.querySelectorAll('.questions__btn-js');
  const questionItemEl = document.querySelectorAll('.questions__item-js');
  

  let mySwiper = new Swiper (sliderEl, {
    loop: true,
    spaceBetween: 1,
    // autoplay: {
    //   delay: 3000,
    // },

    effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

    for(i=0; i<questionItemEl.length; i++){
      questionItemEl[i].addEventListener('click', function(ev){
      ev.preventDefault();
      this.children[1].classList.toggle('visible');
      this.children[0].children[1].classList.toggle('open');
      })
    }
      
  } 