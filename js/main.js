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
  //   responsive: [{
  //       breakpoint: 1300,
  //       settings: {
  //         slidesToShow: 4,

  //       }
  //     },
  //     {
  //       breakpoint: 981,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 530,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //   ]
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



  if ($(window).width() < 1025) {
    $('.menu__parent').click(function () {
      $(this).siblings('.menu__dropdown-lvl-1').slideToggle(300);
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


// popup
;
(function () {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function (item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function (item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function () {
    myLib.body.classList.toggle('oh');
  };
})();

;
(function () {
  var showPopup = function (target) {
    target.classList.add('is-active');
  };

  var closePopup = function (target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('popup__close') ||
      target.classList.contains('popup__inner')) {
      var popup = myLib.closestItemByClass(target, 'popup');

      closePopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

// popup