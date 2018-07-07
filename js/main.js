$(document).ready(function(){
	var closeMenu = function(){
		if($(".nav").hasClass("nav--opened")){
			$(".nav").removeClass("nav--opened");
		}
	}

	// Форма поиска 
	var expandSearchField = function(e){
		e.preventDefault();
		$(this).parent().parent().addClass("search--opened");
		$(this).siblings(".search__input").focus();
	}
	var hideSearchField = function(e){
		e.preventDefault();
		$(this).parent().parent().removeClass("search--opened");
		$(this).siblings(".search__input").val("");
	}
	var openSearchField = function(e) {
		e.preventDefault();
		$(".modal").fadeIn();
		$(".modal__search").css("display", "block");
		$(".mobile-search__field").focus();
	}
	var closeSearchField = function(e){
		e.preventDefault();
		$(".modal__search").css("display", "none");
		$(".mobile-search__field").blur();
		$(".modal").fadeOut();
	}
	if($(window).width() <= 600){
		$(".search__find").click(openSearchField);
		$(".search__close--mobile").click(closeSearchField);
	} else {
		$(".search__find").click(expandSearchField);
		$(".search__close--desktop").click(hideSearchField);
	}

	// Из чего мы строим табы с материалами
	$(".tabs").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: "<button class='tabs__btn btn btn--arrow btn--prev'>Назад</button>",
		nextArrow: "<button class='tabs__btn btn btn--arrow btn--next'>Еще</button>",
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			}

		]
	});

	// Слайдер с проектами
	$(".projects__list").not(".projects__list--top").slick({
		slidesToShow: 4,
		prevArrow: "<button class='projects__arrow btn btn--arrow btn--prev'>Назад</button>",
		nextArrow: "<button class='projects__arrow btn btn--arrow btn--next'>Еще</button>",
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					centerMode: true
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					centerMode: false
				}
			},
			{
				breakpoint: 600,
				settings: "unslick"
			}

		]
	});

	$(".projects__list--top").slick({
		slidesToShow: 4,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					centerMode: true
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					centerMode: false
				}
			},
			{
				breakpoint: 600,
				settings: "unslick"
			}

		]
	});

	$(".projects__arrow.btn--next").click(function(){
		$(".projects__list").slick("slickNext");
	});

	$(".projects__arrow.btn--prev").click(function(){
		$(".projects__list").slick("slickPrev");
	});

	// Фильтрация проектов
	$(".btn--filter").click(function(){
		$(".slider").slick('slickUnfilter');
		if($(this).hasClass("projects__option--current")){
			$(".projects__list").slick("slickUnfilter");
		} else {
			$(".projects__list").slick('slickFilter', function() { return $('.red', this).length === 1; });
		}
		
	});

	// Из чего мы строим
	$(".tabs__item").click(function(){
		var $id = $(this).attr("data-id");
		$(".tabs__item").removeClass("tabs__item--active");
		$(".build__tab-text").removeClass("build__tab-text--current");
		$(this).addClass("tabs__item--active");
		$(".show-tab").removeClass("show-tab--active");
		$(".show-tab[data-id='" + $id + "'").addClass("show-tab--active");
		$(".build__tab-text[data-id='" + $id + "'").addClass("build__tab-text--current");
	});

	// Открытие/Закрытие окна обратного звонка
	$(".btn--callback").click(function(){
		$(".modal").fadeIn(300);
		$(".modal__content--callback").fadeIn(300);
		$("html").addClass("popup-opened");

	});	

	$(".modal__close").not(".modal__close--order").click(function(){
		$(".modal").fadeOut();
		$(".modal__content--callback").fadeOut();
		$(".modal__content--project").fadeOut();
		$(".modal__content--order").fadeOut();
		$("html").removeClass("popup-opened");

	});

	$(".projects__item").click(function(){
		 $(window).trigger('resize');
		$(".modal").fadeIn(500);
		$(".modal__content--project").fadeIn(400);
		$("html").addClass("popup-opened");

	});

	$(".project__pict-slider").slick({
		slidesToShow: 5,
		asNavFor: ".project__main-pict",
		focusOnSelect: true,
		prevArrow: "<button class='project__arrows btn btn--arrow btn--prev'>Назад</button>",
		nextArrow: "<button class='project__arrows btn btn--arrow btn--next'>Еще</button>",
		responsive: [
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 4,
					vertical: true
				}

			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 4,
					vertical: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					vertical: false
				}
			},
			{
				breakpoint: 390,
				settings: {
					slidesToShow: 2,
					vertical: false
				}
			}

		]
	});
	$(".project__main-pict").slick({
		slidesToShow: 1,
		asNavFor: ".project__pict-slider"
	});
	$(".btn--order").click(function(){
		$(".modal__content--order").fadeIn(400);
		$(".modal__overlay").css("display", "block");

	});

	$(".modal__close--order").click(function(){
		$(".modal__content--order").fadeOut(400);
		$(".modal__overlay").css("display", "none");
	});
	// Фильтр проектов
	$(".projects__option").click(function(){
		$(this).toggleClass("projects__option--current");

	});
});
	