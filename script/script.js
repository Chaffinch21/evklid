window.onload = function() {


  const sliderEl = document.querySelector('.swiper-container-js');
  const questionBtn = document.querySelectorAll('.questions__btn-js');
  const questionItemEl = document.querySelectorAll('.questions__item-js');
  const stepItemBtnEl = document.querySelectorAll('.step-item__btn');
  const worktabDescriptionListEl = document.querySelectorAll('.worktab-description__list');
  const stepItemEl = document.querySelectorAll('.step__item');
  const burgerEl = document.querySelector('.header-burger-js');
  const menuEl = document.querySelector('.header__menu');
  

  let mySwiper = new Swiper (sliderEl, {
    loop: true,
    spaceBetween: 1,
    slidesPerView: 1.0,
    centeredSlides: true,
    effect: 'fade',
    // autoplay: {
    //   delay: 3000,
    // },

    fadeEffect: {
      crossFade: false
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  stepItemBtnEl.forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(ev){
     
      const path = ev.currentTarget.dataset.path;

      stepItemBtnEl.forEach(function(stepItem){
        stepItem.classList.remove('active');
      })
      ev.currentTarget.classList.add('active');

      worktabDescriptionListEl.forEach(function(tabContent){
        tabContent.classList.remove('worktab-description-active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('worktab-description-active');
    })
  });

  burgerEl.addEventListener('click', function(ev){
    ev.preventDefault();
    document.body.classList.toggle('burger-visible');
    if (document.body.classList.contains('burger-visible')) {
      burgerEl.setAttribute('aria-label', 'Закрыть меню');
  } else { 
      burgerEl.setAttribute('aria-label', 'Открыть меню');
  }
    // setTimeout(() => {
    //   document.body.classList.toggle('burger-visible')
    // }, 1000);
    // if (getComputedStyle(menuEl).display == 'block'){
    //   menuEl.classList.add('hide');
    //   setTimeout(() => {
    //        document.body.classList.remove('burger-visible')
    //      }, 1000);
    //  }
    //  else {
    //    document.body.classList.add('burger-visible');
    //    menuEl.classList.remove('hide');
    //  }
    // if ($('.burger-visible').is(':visible')) {
    //     burgerEl.setAttribute('aria-label', 'Закрыть меню');
        
    // } else { 
    //     burgerEl.setAttribute('aria-label', 'Открыть меню');
    // }
});

    // for(i=0; i<questionItemEl.length; i++){
    //   questionItemEl[i].addEventListener('click', function(ev){
    //   ev.preventDefault();
    //   this.children[1].classList.toggle('visible');
    //   this.children[0].children[1].classList.toggle('open');
    //   })
    // }
      
    $( function() {
      $( ".accordion" ).accordion({
        active: false,
        collapsible: true,
        // header: "button",
        heightStyle: "content",
        a11y: {
          enabled: true,
          paginationBulletMessage: 'Перейти к слайду {{index}}'
        }
      });
    })

  
  } 