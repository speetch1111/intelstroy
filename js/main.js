function func() {
  let header_height = $('.header__wrapper').innerHeight();

  $('.header').css({
    'height': header_height,
  });

  if ($(window).width() < 1025) {
    $('.header__top-flex').prepend($('.header__search'));
    $('.header__top-flex').append($('.header__basket'));
    $('.footer__bottom-wrap').prepend($('.footer__address'));
    $('.footer__bottom-wrap').prepend($('.footer__phone'));
    $('.catalog__filter ').append($('.catalog__tags-wrap'))


  } else {
    $('.header__search').insertBefore($('.header__phone'));
    $('.header__basket').insertAfter($('.header__phone'));
    $('.footer__phone').insertBefore($('.footer__social'));
    $('.footer__address').insertBefore($('.footer__social'));
    $('.catalog__tags-wrap').insertAfter($('.catalog__products-top'));
  
  }

}

$(window).resize(func);

$(window).init(func)


$(function () {


  $('.intro__slider').slick({
    arrows: true,
    infinite: true,
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#icon-arrow-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#icon-arrow-next"></use></svg></button>',
    responsive: [{
      breakpoint: 651,
      settings: {
        arrows: false,
      }
    }
    ]
  });

  $('.products__slider').slick({
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#icon-arrow-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#icon-arrow-next"></use></svg></button>',
    responsive: [{
        breakpoint: 1251,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: "unslick"
      },
    ]
  });

  $('.product__gallery-for').slick({
    arrows: false,
    speed: 300,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__gallery-nav',
    responsive: [{
      breakpoint: 651,
      settings: {
        dots: true,
      }
    }
    ]
  });

  $('.product__gallery-nav').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    asNavFor: '.product__gallery-for',
  });


})

$(function () {
  func();

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 0) {
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }

  });

  $('.menu__parent').click(function () {
    $(this).toggleClass('active');
    $('.menu__dropdown-lvl-1').toggleClass('open')
  });

  $('.mobile__hamburger').click(function () {
    $('.header__nav').addClass('opened');
    $('body').addClass('oh');
  });

  $('.mobile__menu-close').click(function () {
    $('.header__nav').removeClass('opened');
    $('body').removeClass('oh');
  });
  


  $('.catalog__filter-item__head').click(function () {
    $(this).toggleClass('active').siblings('.catalog__filter-item__content').slideToggle(300);
  });


  if ($(window).width() < 1025) {
    $('.menu__parent').click(function () {
      $(this).siblings('.menu__dropdown-lvl-1').slideToggle(300);
    });

    $('.mob__catalog-filter').click(function () {
      $('.catalog__filter').addClass('open');
      $('.shadow__block').addClass('open')
      $('body').addClass('oh')
    });

    $('.mob__catalog-sort').click(function () {
      $('.catalog__mobile-sort').addClass('open');
      $('.shadow__block').addClass('open')
      $('body').addClass('oh')
    });

    $('.shadow__block').click(function () {
      $('.catalog__filter').removeClass('open');
      $('.catalog__mobile-sort').removeClass('open')
      $(this).removeClass('open')
      $('body').removeClass('oh')
    });

    $('.catalog__filter-header').click(function () {
      $('.catalog__filter').removeClass('open');
      $('.catalog__mobile-sort').removeClass('open');
      $('body').removeClass('oh');
      $('.shadow__block').removeClass('open')
    });

    $('.mobile__search').click(function () {
      $('.header__search').addClass('open');
    });

    $('.mobile__search-close').click(function () {
      $('.header__search').removeClass('open');
    });
  


  }

  if ($(window).width() > 1023) {

	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".menu__dropdown-lvl-1" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.removeClass('open'); // скрываем его
      $('.menu__parent').removeClass('active')
    }
	});
  }

})


