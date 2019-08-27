$(document).ready(function () {

	$('.subtitle--toggle').on('click', function() {
		$(this).toggleClass('active')
		$(this).siblings('.slide-block').slideToggle()
	})

	$('.nav-menu--item').on('click', function() {
		if ( $(this).children('.nav-submenu').is(':hidden') ) {
			$('.nav-menu--item').children('.nav-submenu').slideUp()
			$(this).children('.nav-submenu').slideDown()
		} else {
			$(this).children('.nav-submenu').slideUp()
		}
		
	})


	var numberSlider = new Swiper ('.number-slider', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		slidesPerView: 4,
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
		},
	})

	var reviewsSlider = new Swiper ('.reviews-slider', {
		autoHeight: true,
		breakpoints: {
			576: {
				navigation: false,
			},
		},
		pagination: {
			el: '.swiper-pagination.reviews-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next.reviews-swiper-next',
			prevEl: '.swiper-button-prev.reviews-swiper-prev',
		},
	})
	var swiperBanner = new Swiper ('.swiper-container.swiper-banner', {
		simulateTouch: false,
		
		pagination: {
			el: '.swiper-pagination.banner-pagination',
			clickable: true,
		},
		slidesPerView: 2,
		breakpoints: {
			992: {
				slidesPerView: 1,
			},
		},
	})
	var calculateSlider = new Swiper ('.calculate-content', {
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.swiper-pagination.calculate-pagination',
			clickable: true,
		},
	})

	AOS.init();
	// var slideHeight = $('.calculate-content').children('.swiper-wrapper').height()
 
	// $(window).resize(function(){
	// 	$('.calculate-content').children('.swiper-wrapper').children('.swiper-slide').height(slideHeight)
	// 	if ($(this).width() < 992) {
	// 		$nav.data('size', 'big').removeClass('fixed')
	// 	}
	// })
	$nav = $('.list-container')

	$nav.data('size', 'big')
	$navMenu = $nav.offset().top
	var marker = true;
	function count() {
			$('#num1').animate({
					num: 7 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num) {
						this.innerHTML = ((num + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});
				$('#num2').animate({
					num2: 4325 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num2) {
						this.innerHTML = ((num2 + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});
				$('#num3').animate({
					num3: 1975 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num3) {
						this.innerHTML = ((num3 + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});
				$('#num4').animate({
					num4: 100 - 0 /* - начало */
				}, {
					duration: 1500,
					step: function (num4) {
						this.innerHTML = ((num4 + 0).toFixed()).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
					}
				});

			marker = false;
	}
	$(window).scroll(function () {
			if ($(this).width() > 992) {
				if ($(document).scrollTop() > $navMenu) {
					if ($nav.data('size') == 'big') {
							$nav.data('size', 'small').addClass('fixed')
					}
			} else {
					if ($nav.data('size') == 'small') {
							$nav.data('size', 'big').removeClass('fixed')
					}
			}
			}
			
		// 	if ($(document).scrollTop() > 300) {
		// 		$('.callback-btn').addClass('active')
		// 	} else {			
		// 			$('.callback-btn').removeClass('active')
		// }
			var offset = $('.call').offset()
			if ($(this).scrollTop() >= offset.top) {
					if ( marker ) {
            count();
        }
			}
			var offsetCalculate = $('.calculate').offset()
			if ($(this).scrollTop() >= offsetCalculate.top-300) {
			calculateSlider.autoplay.start()
			} else {
				calculateSlider.autoplay.stop();	
			}
	});
	svg4everybody({});

	document.onreadystatechange = () => {

		if (document.readyState === 'complete') {


			if (/Edge/.test(navigator.userAgent)) {
			
			} else {
				
				let ellipse = document.querySelector('#Ellipse');
				let myAnimationEllipse = new LazyLinePainter(ellipse, {
					"ease": "easeLinear",
					"strokeWidth": .5,
					"strokeOpacity": 1,
					"strokeColor": "#242424",
					"strokeCap": "square",
					"strokeDash": " 0.2, 4"
				});
				myAnimationEllipse.paint();

				let EllipseReverse = document.querySelector('#EllipseReverse');
				let myAnimationEllipseReverse = new LazyLinePainter(EllipseReverse, {
					"ease": "easeLinear",
					"strokeWidth": .5,
					"strokeOpacity": 1,
					"strokeColor": "#242424",
					"strokeCap": "square",
					"strokeDash": " 0.2, 4",
					"reverse": true
				});
				myAnimationEllipseReverse.paint();

				let ellipse2 = document.querySelector('#Ellipse2');
				let myAnimationEllipse2 = new LazyLinePainter(ellipse2, {
					"ease": "easeLinear",
					"strokeWidth": .5,
					"strokeOpacity": 1,
					"strokeColor": "#242424",
					"strokeCap": "square",
					"strokeDash": " 0.2, 4"
				});
				myAnimationEllipse2.paint();

				let EllipseReverse2 = document.querySelector('#EllipseReverse2');
				let myAnimationEllipseReverse2 = new LazyLinePainter(EllipseReverse2, {
					"ease": "easeLinear",
					"strokeWidth": .5,
					"strokeOpacity": 1,
					"strokeColor": "#242424",
					"strokeCap": "square",
					"strokeDash": " 0.2, 4",
					"reverse": true
				});
				myAnimationEllipseReverse2.paint();

				let el = document.querySelector('#Vector21');
				let myAnimation = new LazyLinePainter(el, {
					"ease": "easeLinear",
					"strokeWidth": 5,
					"strokeOpacity": 1,
					"strokeColor": "#242424",
					"strokeCap": "square",
				});
				myAnimation.paint();

				let el2 = document.querySelector('#Vector22');
				let myAnimation2 = new LazyLinePainter(el2, {
					"ease": "easeLinear",
					"strokeWidth": 5,
					"strokeOpacity": 1,
					"strokeColor": "#242424",
					"strokeCap": "square",
					"reverse": true
				});
				myAnimation2.paint();

				$('.svg-car').addClass('animate')

				function func() {
					$('.svg-step2').addClass('animate')
				}

				function func02() {
					$('.svg-docs').addClass('animate')
				}

				function func2() {
					$('.svg-time').addClass('animate')
				}

				function func03() {
					$('.svg-step3').addClass('animate')
				}

				function func3() {
					$('.svg-ruble').addClass('animate')
				}

				function func4() {
					$('.svg-manager').addClass('animate')
				}

				function func5() {
					$('.svg-service').addClass('animate')
				}

				function func6() {
					$('.svg-ruble2').addClass('animate')
				}
				setTimeout(func, 3500);
				setTimeout(func02, 7500);
				setTimeout(func2, 11500);
				setTimeout(func03, 15500);
				setTimeout(func3, 19500);
				setTimeout(func4, 2700);
				setTimeout(func5, 5700);
				setTimeout(func6, 8700);

			}
		}
	}

 $('.info-list__container').on('click', function(){
	 var formContent = $('.form-block').html()
	$('.md-content').children('.text').html(formContent)
 })




// modal
// $(".modal").each( function(){
// 	$(this).wrap('<div class="overlay"></div>')
// });


// $(".open-modal").on('click', function(e){
// 	e.preventDefault();
// 	e.stopImmediatePropagation;
	
// 	var $this = $(this),
// 			modal = $($this).data("modal");
	
// 	$(modal).parents(".overlay").addClass("open");
// 	setTimeout( function(){
// 		$(modal).addClass("open");
// 	}, 350);
	
// 	$(document).on('click', function(e){
// 		var target = $(e.target);
		
// 		if ($(target).hasClass("overlay")){
// 			$(target).find(".modal").each( function(){
// 				$(this).removeClass("open");
// 			});
// 			setTimeout( function(){
// 				$(target).removeClass("open");
// 			}, 350);
// 		}
		
// 	});
	
// });

// $(".close-modal").on('click', function(e){
// 	e.preventDefault();
// 	e.stopImmediatePropagation;
// 	console.log('close')
// 	var $this = $(this),
// 			modal = $($this).data("modal");
	
// 	$('.modal').removeClass("open");
// 	setTimeout( function(){	
// 		$('.overlay').removeClass("open");
// 	}, 350);
	
// });
// $('.calculate-content').children('.swiper-wrapper').children('.swiper-slide').height(slideHeight)

$(window).on('load', function(){
	$('.preloader').delay(500).fadeOut('slow');
})



});