function func() {
  let header_height = $('.header__wrapper').innerHeight();

  $('.header').css({
    'height': header_height,
  });

  if ($(window).width() < 1025) {
    $('.header__top-flex').prepend($('.header__logo'));
    $('.header__nav').append($('.header__phone'));
    $('.header__nav').append($('.header__feedback'));
    


  } else {
    $('.header__logo').insertBefore($('.header__search'));
    $('.header__phone').insertBefore($('.header__basket'));
    $('.header__feedback').insertBefore($('.header__order'));
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
        breakpoint: 411,
        settings: {
          slidesToShow: 1,
        }
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
    $('.header__nav').toggleClass('opened');
    $('body').toggleClass('oh');
    $(this).toggleClass('opened');
  });
  


  $('.catalog__filter-item__head').click(function () {
    $(this).toggleClass('active').siblings('.catalog__filter-item__content').slideToggle(300);
  });


  if ($(window).width() < 1025) {
    $('.menu__parent').click(function () {
      $(this).siblings('.menu__dropdown-lvl-1').slideToggle(300);
    });

    $('.mob__filter').click(function () {
      $('.catalog__filter').toggleClass('open');
      $('body').toggleClass('oh');
      $(this).toggleClass('opened');
    });

    $('.catalog__filter-header').click(function () {
      $('.catalog__filter').removeClass('open');
      $('body').removeClass('oh')
      $('.mob__filter').removeClass('opened')
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


