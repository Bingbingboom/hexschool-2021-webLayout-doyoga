$(function() {
  // 首頁 - 精心設計、課程多元 swiper
  let courseSwiper = new Swiper(".courseSwiper", {
    slidesPerView: 1.34,
    spaceBetween: 30,
  });

  // 首頁 - 聽聽他們怎麼說 swiper
  let commentSwiper = new Swiper('.commentSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'row',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768:{
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      992:{
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      }
    },
  });

  // 課程介紹頁 - 師資介紹
  let teachersSwiper = new Swiper('.teachersSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 4,
      fill: 'row',
    },
    breakpoints: {
      768:{
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
      },
      992:{
        slidesPerView: 3,
        grid: {
          rows: 1,
        },
      }
    },
  });

  // 瑜珈空間 - 課程推薦 swiper
  let coursesRecommendSwiper = new Swiper(".coursesRecommendSwiper", {
    slidesPerView: 1.34,
    spaceBetween: 30,
    breakpoints: {
      768:{
        slidesPerView: 3,
      },
      992:{
        slidesPerView: 4.34,
      }
    },
  });
  
  // 立即預約選擇方案頁面
  // 尚未製作點選不同方案改變最終選擇課程名稱（只有初中高階）
  $('.js-schemeCard').click(function(e){
    $(this).addClass('active');
    $(this).parent().siblings().find('.card').removeClass('active');
    $(this).parent().removeClass('remove');
    $(this).parent().siblings().addClass('remove');

    // 開啟 繼續預約按鈕、選擇課程 swiper
    $('.js-contiBtn, .js-chooseLv').removeClass('d-none');
    
    // 立即預約 - 選擇課程等級 swiper
    let courseLevelSwiper = new Swiper('.courseLevelSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 3,
        fill: 'row',
      },
      breakpoints: {
        768:{
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
        1200:{
          slidesPerView: 3,
          spaceBetween: 20,
          grid: {
            rows: 1,
            fill: 'row',
          },
        }
      },
    });

    // 預設選擇基礎課程
    $('.js-firstLvBtn').addClass('active');
    $('.js-firstLvBtn').parent().siblings().find('button').removeClass('active');
    $('.js-firstLv').removeClass('d-none');
    $('.js-firstLv').siblings().addClass('d-none');
  })

  // 立即預約 - 箭頭
  $('.js-first').click(function(e){
    e.preventDefault();
    $('.first').toggleClass('d-none');
    $('.first').parent().siblings().find('span').addClass('d-none');
  });
  $('.js-short').click(function(e){
    e.preventDefault();
    $('.short').toggleClass('d-none');
    $('.short').parent().siblings().find('span').addClass('d-none');
  });
  $('.js-long').click(function(e){
    e.preventDefault();
    $('.long').toggleClass('d-none');
    $('.long').parent().siblings().find('span').addClass('d-none');
  });

  $('.js-level').click(function(e){
    $(this).toggleClass('active');
    $(this).parent().siblings().find('button').removeClass('active');
  });

  // 選擇結果呈現
  $('.js-firstLvBtn').click(function(){
    $('.js-firstLv').removeClass('d-none');
    $('.js-firstLv').siblings().addClass('d-none');
  });
  $('.js-midLvBtn').click(function(){
    $('.js-midLv').removeClass('d-none');
    $('.js-midLv').siblings().addClass('d-none');
  });
  $('.js-highLvBtn').click(function(){
    $('.js-highLv').removeClass('d-none');
    $('.js-highLv').siblings().addClass('d-none');
  });

  // vanillajs-datepicker
  const elem = document.querySelector('input[name="datepicker"]');
  const datepicker = new Datepicker(elem, {
    buttonClass: 'btn link-primary',
    nextArrow: '>',
    prevArrow: '<',
    todayHighlight: true
  }); 
});

