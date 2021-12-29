'use strict';

import Swiper from './libs/swiper.js';
import { Fancybox, Carousel, Panzoom} from '@fancyapps/ui';
import mixitup from 'mixitup';
import MicroModal from 'micromodal';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

document.addEventListener('DOMContentLoaded', () => {

	MicroModal.init();




	/*MouseOut*/
	const locSt = window.localStorage;
	const popupCalcNext = document.querySelector('#popupCalcNext');

	if(popupCalcNext) {
		document.addEventListener('mouseout', mouseout);


		if(locSt.getItem('showed') == true) {
			document.removeEventListener('mouseout', mouseout);
		}
		function mouseout(e) {
			if(!locSt.getItem('showed') == true) {
				if(Math.round(e.x) >= 0 && Math.round(e.y) <= 0) {
					MicroModal.show('popupCalcNext');
					locSt.setItem('showed', true);
				}
			}
			

			
		}
	}

	/*Form range slider*/
	
	let rangeInput = document.querySelector('.range');
	let rangeValueBlock = document.querySelector('.range-block');

	function rangeSlider() {
		let rangeInputVal = document.querySelector('.range').value;
		let rangeInputValforBg = (rangeInputVal * 100) / 250;
		rangeInput.style.cssText = `background:-webkit-linear-gradient(left, #2D4872 0%, #2D4872 ${rangeInputValforBg}%, #f2f2f2 ${rangeInputValforBg}%, #f2f2f2 100%)`;
		rangeInput.setAttribute('value', rangeInputVal);
		rangeInput.setAttribute('step', '1');
		rangeValueBlock.innerText = rangeInputVal;
	}

	if(rangeInput) {
		rangeInput.addEventListener('input', rangeSlider);
	}


	let rangeInputModal = document.querySelector('.calc-next-range');
	let rangeValueBlockModal = document.querySelector('.calc-next-range-block');

	function rangeSliderModal() {
		let rangeInputVal = document.querySelector('.calc-next-range').value;
		let rangeInputValforBg = (rangeInputVal * 100) / 250;
		rangeInputModal.style.cssText = `background:-webkit-linear-gradient(left, #2D4872 0%, #2D4872 ${rangeInputValforBg}%, #f2f2f2 ${rangeInputValforBg}%, #f2f2f2 100%)`;
		rangeInputModal.setAttribute('value', rangeInputVal);
		rangeInputModal.setAttribute('step', '1');
		rangeValueBlockModal.innerText = rangeInputVal;
	}

	if(rangeInputModal) {
		rangeInputModal.addEventListener('input', rangeSliderModal);
	}	



	/*Price slider*/

	const priceSlider = new Swiper('.price__content', {
		slidesPerView: 1,
		spaceBetween: 21,
		width: 285,
		pagination: {
			el: '.pagination',
		    type: 'bullets',
		    bulletActiveClass: 'pagination__item_active',
		    bulletClass: 'pagination__item',
		    currentClass: 'pagination__item_current',
		    clickable: true 
		},
		breakpoints: {
			1200: {
				width: false,
				slidesPerView: 4,
				spaceBetween: 25
			}
		}
	})


	const revVideosSlider = document.querySelector('.rev__content');
	const revVideoSliderWrapper = document.querySelector('.rev__content_wrapper');
	const revVideoSliderItems = document.querySelectorAll('.rev__content_item');
	const revSliderPag = document.querySelector('.rev__slider_pag');

	let revSlider;



	function resizeCatch() {

		if(window.innerWidth <= 1200 && revVideosSlider) {
			revVideosSlider.classList.add('rev__slider', 'swiper');
			revVideoSliderWrapper.classList.add('swiper-wrapper');
			revSliderPag.classList.add('swiper-pagination');
			revVideoSliderItems.forEach(i => {
				i.classList.add('swiper-slide');
			});

			revSlider = new Swiper('.rev__slider', {
				slidesPerView: 1,
				// direction: 'horizontal'
				pagination: {
					el: '.rev__slider_pag',
					bulletActiveClass: 'pag__active',
					currentClass: 'pag__current',
					bulletClass: 'pag',
					clickable: true
				},
				spaceBetween: 20,
				// init: false,
				initialSlide: 0
			});

			


		} else {
			if(revVideosSlider) {
				revVideosSlider.classList.remove('rev__slider', 'swiper', 'swiper-initialized', 'swiper-horizontal', 
				'swiper-pointer-events');
				revVideoSliderWrapper.classList.remove('swiper-wrapper');
				revSliderPag.classList.remove('swiper-pagination');
				revVideoSliderItems.forEach(i => {
					i.classList.remove('swiper-slide', 'swiper-slide-next', 'swiper-slide-prev');
				});

				if(revSlider) {
					revSlider.destroy();
				}
			}
			
		}	
	}
	resizeCatch();


	window.addEventListener('resize', resizeCatch);

	function resizeExamNav() {
		let img2331 = document.querySelector('.inner__slider_slide_img');
		let nav23434 = document.querySelectorAll('.inner__slider__nav');
		if(window.innerWidth < 1200 && window.innerWidth > 767) {
			

			nav23434.forEach(i => {
				i.style.width = img2331.offsetWidth + 'px';
			})
		} else {
			nav23434.forEach(i => {
				i.removeAttribute('style');
			})
		}

		if(window.innerWidth < 767) {
			nav23434.forEach(i => {
				i.style.height = img2331.offsetHeight + 'px';
			})
		}
	}

	resizeExamNav();
	window.addEventListener('resize', resizeExamNav);







	/*Slider for team block*/
	const teamSlider = new Swiper('.team__content', {
		slidesPerView: 1,
		pagination: {
			el: '.team__slider_pag',
			bulletActiveClass: 'pag__active',
			currentClass: 'pag__current',
			bulletClass: 'pag',
			clickable: true
		},
		navigation: {
		    nextEl: '.team__slider_next',
		    prevEl: '.team__slider_prev',
	  	},
	})


	/*Slider for masters block*/
	const mastersSlider = new Swiper('.masters__content', {
		slidesPerView: 1,
		centeredSlides: false,
		initialSlide: 0,
		spaceBetween: 17,
		breakpoints: {
			1200: {
				slidesPerView: 3,
				initialSlide: 1,
				spaceBetween: 12,
				centeredSlides: true,
				width: null
			}
		},
		pagination: {
			el: '.pagination',
		    type: 'bullets',
		    bulletActiveClass: 'pagination__item_active',
		    bulletClass: 'pagination__item',
		    currentClass: 'pagination__item_current',
		    clickable: true 
		},
		navigation: {
			nextEl: '.masters__next',
			prevEl: '.masters__prev'
		},
		
	});




	/*FAQ accordeon*/
	const accordItems = document.querySelectorAll('.faq__item');


	accordItems.forEach(i => {
		i.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const accordBtn = self.querySelector('.faq__item_head');
			const accordBody = self.querySelector('.faq__item_body');

			self.classList.toggle('opened');


			if(self.classList.contains('opened')) {
				accordBody.style.maxHeight = accordBody.scrollHeight + 'px';
			} else {
				accordBody.style.maxHeight = '0';
			}
		})
	})




	/*Prices accordeon*/
	const priceCards = document.querySelectorAll('.price__item_body');

	priceCards.forEach(i => {
		i.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const priceBtn = self.querySelector('.price__item_bottom_drop');
			const priceContent = self.querySelector('.price__item_sheet');


			if(e.target.matches('.price__item_bottom_drop')) {
				self.classList.toggle('dropped')
			}

			if(self.classList.contains('dropped')) {
				priceContent.style.height = priceContent.scrollHeight + 'px';
			} else {
				priceContent.style.height = '125px';
			}
		})
	})



	/*Examples script*/
	const tabsParent = document.querySelector('.exam__main_tabs');
	const tabs = document.querySelectorAll('.exam__main_tab');
	const tabsContent = document.querySelectorAll('.exam__main_tab-content');

	function hideTabs() {
		tabsContent.forEach(i => {
			i.classList.add('hide');
			i.classList.remove('show', 'fade');
		});

		tabs.forEach(i => {
			i.classList.remove('active_tab');
		})
	}


	function showTabs(i = 0) {
		if(tabsContent[i] && tabs) {
			tabsContent[i].classList.add('show', 'fade');
			tabsContent[i].classList.remove('hide');
			tabs[i].classList.add('active_tab');
		}
	}

	if(tabsContent) {
		hideTabs();
		showTabs(0);
	}



	if(tabsParent) {
		tabsParent.addEventListener('click', (e) => {
			let tar = e.target;	

			if(tar && e.target.classList.contains('exam__main_tab')) {
				tabs.forEach((item, i) => {
					if(tar == item) {
						hideTabs()
						showTabs(i)
					}
				})
			}
		})
	}







	/*Examples inner tabs*/
	const innerTabsParent = document.querySelectorAll('.inner__slider_tabs');
	const innerTabs = document.querySelectorAll('.inner__slider_tab');
	const innerTabsContent = document.querySelectorAll('.inner__slider');


	function innerHideTabs() {
		innerTabsContent.forEach(i => {
			i.classList.add('hide');
			i.classList.remove('show-f', 'fade');
		});

		innerTabs.forEach(i => {
			i.classList.remove('active__slider_tab');
		});
	}


	function innerShowTabs(i = 0) {
		if(innerTabsContent[i]) {
			innerTabsContent[i].classList.add('show-f', 'fade');
			innerTabsContent[i].classList.remove('hide');
			innerTabs[i].classList.add('active__slider_tab');
		}
	}

	innerHideTabs();
	innerShowTabs();


	innerTabsParent.forEach(i => {
		i.addEventListener('click', (e) => {
			let tar = e.target;

			if(tar && tar.classList.contains('inner__slider_tab')) {
				innerTabs.forEach((item, i) => {
					if(tar == item) {
						innerHideTabs();
						innerShowTabs(i);
					}
				})
			}
		})
	})

	/*Examples inner slider tabs*/
	const sliderTabsParent = document.querySelectorAll('.inner__slider__nav');
	const sliderTabs = document.querySelectorAll('.inner__slider__nav_item');
	const sliderContent = document.querySelectorAll('.inner__slider_slide');

	function sliderHideTabs() {
		sliderContent.forEach(i => {
			i.classList.add('hide');
			i.classList.remove('show-f', 'fade');
		});

		sliderTabs.forEach(i => {
			i.classList.remove('inner__slider__nav_item_active');
		});
	}

	function sliderShowTabs(i = 0) {
		if(sliderContent[i]) {
			sliderContent[i].classList.add('show-f', 'fade');
			sliderContent[i].classList.remove('hide');
			sliderTabs[i].classList.add('inner__slider__nav_item_active');
		}
	}

	sliderHideTabs();
	sliderShowTabs();

	sliderTabsParent.forEach((i, index) => {

		i.addEventListener('click', (e) => {
			let tar = e.target;

			if(tar && tar.classList.contains('inner__slider__nav_item')) {
				sliderTabs.forEach((item, i) => {
					if(tar == item) {
						sliderHideTabs();
						sliderShowTabs(i);
					}
				})
			}
		})
	})





	/*Slider for mobile blog-page*/
	const blogSlider = document.querySelector('.blog-page__content');
	const blogSliderWrapper = document.querySelector('.bp-wrapper');
	const blogSliderItems = document.querySelectorAll('.blog-page__item');

	let blogSwiper;

	function blogSliderToggler() {
		if(window.innerWidth < 767) {
			blogSlider.classList.add('swiper');
			blogSliderWrapper.classList.add('swiper-wrapper');
			blogSliderWrapper.classList.remove('blog-page__wrapper');
			blogSliderItems.forEach(i => {
				i.classList.add('swiper-slide');
			})
			blogSwiper = new Swiper('.blog-page__content', {
				slidesPerView: 1,
				pagination: {
				    el: '.pagination',
				    type: 'bullets',
				    bulletActiveClass: 'pagination__item_active',
				    bulletClass: 'pagination__item',
				    currentClass: 'pagination__item_current',
				    clickable: true
			  	},
			})

			blogSwiper.init();
		} else {
			blogSlider.classList.remove('swiper');
			blogSliderWrapper.classList.remove('swiper-wrapper');
			if(!blogSliderWrapper.classList.contains('blog-page__wrapper')) {
				blogSliderWrapper.classList.add('blog-page__wrapper');
			}
			blogSliderItems.forEach(i => {
				i.classList.remove('swiper-slide');
			})

			if(blogSwiper) {
				blogSwiper.destroy();
			}

		}
	}

	if(blogSlider) {
		blogSliderToggler();
		window.addEventListener('resize', (e) => {
			blogSliderToggler();
		});
	}



	
	const servItem = document.querySelector('.serv-page__item'); //1 item to calculate his height
	const servItems = document.querySelectorAll('.serv-page__item'); //all items на всякий случай
	const servContent = document.querySelector('.serv-page__content'); //wrapper to change height
	const servToggleBtn = document.querySelector('#servListToggle');//btn for show all



	/*Serv-page all toggler*/
	function servPageListToggler() {
		if (servContent && servContent.classList.contains('closed')) {
			const servItemHeight = servItem.offsetHeight;

			servContent.style.height = '495px';
		} 

		if (servContent && !servContent.classList.contains('closed')) {
			const servItemAllHeight = servContent.scrollHeight;

			servContent.style.height = servItemAllHeight + 'px';
		}
	}

	if(window.innerWidth > 1200) {
		servPageListToggler();
	}

	if(servContent) {
		window.addEventListener('resize', () => {
			if(window.innerWidth > 1200) {
				servPageListToggler();
			} else {
				servContent.style.height = 'auto';
			}
		});
	}

	if(servToggleBtn) {
		servToggleBtn.addEventListener('click', (e) => {
			e.preventDefault();
			servContent.classList.toggle('closed');
			servPageListToggler();		
		});
	}

	

	/*Serv page slider for mobile*/
	const servPageWrapper = document.querySelector('.wrapper-for-swiper');

	let servMobSwiper;


	function servPageListSlider() {
		if(window.innerWidth < 1200) {
			servContent.classList.add('swiper');
			servPageWrapper.classList.add('swiper-wrapper');
			servPageWrapper.classList.remove('serv-page__wrapper');
			servItems.forEach(i => {
				i.classList.add('swiper-slide');
			});
			servMobSwiper = new Swiper('.serv-page__content', {
				slidesPerView: 1,
				pagination: {
					el: '.pagination',
				    type: 'bullets',
				    bulletActiveClass: 'pagination__item_active',
				    bulletClass: 'pagination__item',
				    currentClass: 'pagination__item_current',
				    clickable: true 
				},
				breakpoints: {
					767: {
						slidesPerView: 2,
						spaceBetween: 21,
					}
				}
			})

			servMobSwiper.init();

		} else {
			servContent.classList.remove('swiper');
			servPageWrapper.classList.remove('swiper-wrapper');
			servPageWrapper.classList.add('serv-page__wrapper');
			servItems.forEach(i => {
				i.classList.remove('swiper-slide');
			})

			if(servMobSwiper) {
				servMobSwiper.destroy();
			}
		}
	}

	if(servContent) {
		servPageListSlider();
	}

	if(servContent) {
		window.addEventListener('resize', servPageListSlider);
	}



	

	/*Prod item page dropdowns*/
	const prodItems = document.querySelectorAll('.content__info_item');


	// function prodItemDropdown() {
	// 	prodItems.forEach(i => {
	// 		let head = i.querySelector('.content__info_item_head');
	// 		if(i.classList.contains('opened-item')) {
	// 			i.style.height = i.offsetHeight + 'px';
	// 		} else {
	// 			i.style.height = 53 + 'px';
	// 		}
	// 	});
	// }

	function test(item) {
		let head = item.querySelector('.content__info_item_head');
		let body = item.querySelector('.content__info_item_body');
		if(item.classList.contains('opened-item') && !item.classList.contains('closed-item')) {
			item.style.cssText = `height: ${item.scrollHeight}px`;
			item.classList.remove('closed-item');
		} 
		if(item.classList.contains('closed-item') && !item.classList.contains('opened-item')) {
			item.style.cssText = `height: 53px`;
		}
	}


	prodItems.forEach(i => {
		test(i);
	});

	prodItems.forEach(i => {
		i.addEventListener('resize', (e) => {
			test(i);
		})
	});

	prodItems.forEach(i => {
		i.addEventListener('click', (e) => {
			i.classList.toggle('opened-item');
			i.classList.toggle('closed-item');
			test(i);
		});


	});

	



	/*Prod item page services slider*/
	const prodItemContainer = document.querySelector('.prod-item__serv_swiper');
	const prodItemWrapper = document.querySelector('.prod-item-swiper-wrapper');
	const prodItemSlides = document.querySelectorAll('.prod-item__serv_item');

	let prodItemSwiper;


	function prodItemSwiperToggle() {
		if(window.innerWidth < 1200 && prodItemContainer) {
			prodItemContainer.classList.add('swiper');
			prodItemWrapper.classList.add('swiper-wrapper');
			prodItemWrapper.classList.remove('prod-item__serv_list');
			prodItemSlides.forEach(i => {
				i.classList.add('swiper-slide');
			})

			prodItemSwiper = new Swiper(prodItemContainer, {
				slidesPerView: 1,
				pagination: {
					el: '.pagination',
				    type: 'bullets',
				    bulletActiveClass: 'pagination__item_active',
				    bulletClass: 'pagination__item',
				    currentClass: 'pagination__item_current',
				    clickable: true 
				},
				breakpoints: {
					767: {
						slidesPerView: 2,
						spaceBetween: 18

					}
				}
			})

			prodItemSwiper.init();
		} else {
			prodItemContainer.classList.remove('swiper');
			prodItemWrapper.classList.remove('swiper-wrapper');
			if(!prodItemWrapper.classList.contains('prod-item__serv_list')) {
				prodItemWrapper.classList.add('prod-item__serv_list');
			}
			prodItemSlides.forEach(i => {
				i.classList.remove('swiper-slide');
			})
		}
	}

	if(prodItemContainer) {
		prodItemSwiperToggle();
	}


	if(prodItemContainer) {
		window.addEventListener('resize', prodItemSwiperToggle);
	}



	/*Prod item bottom dropdown*/
	const dopItem = document.querySelector('.prod-item__dop_item');
	const dopItemHead = document.querySelector('.prod-item__dop_item_head');

	function dopItemToggle() {
		if(!dopItem.classList.contains('opened')) {
			dopItem.style.height = dopItemHead.offsetHeight + 'px';

		}
		if(dopItem.classList.contains('opened')) {
			dopItem.style.height = dopItem.scrollHeight + 'px';

		}

	}
	if(dopItem) {
		dopItemToggle();

		dopItem.addEventListener('click', ()=> {
			dopItem.classList.toggle('opened');
			dopItemToggle();
		});
	}
	


	/*Video slidebox*/
	const yotubeContent = document.querySelector('.youtube__content-forslider');
	const youtubeThummbs = document.querySelector('.youtube__thumbs');
	const yotubeContentItem = document.querySelectorAll('.youtube__content_item-forslider');

	//Init carousel
	let mainCarousel;

	//Thumbnails
	let thumbCarousel;


	//Video slide toggler
	function youtubeCarouselToggler() {

		if(window.innerWidth <= 767) {
			yotubeContent.classList.add('carousel');
			yotubeContent.classList.remove('youtube__content');
			yotubeContent.setAttribute('id', 'mainCarousel');
			yotubeContentItem.forEach(i => {
				i.classList.add('carousel__slide');
				i.classList.remove('youtube__content_item');
			});
			youtubeThummbs.setAttribute('id', 'thumbCarousel');

			mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
			  Dots: false,
			});

			thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
			  Sync: {
			    target: mainCarousel,
			    friction: 0,
			  },
			  Dots: true,
			  Navigation: false,
			  center: false,
			  slidesPerPage: 1,
			  infinite: false,
			});
		} else {
			yotubeContent.classList.remove('carousel');
			yotubeContent.classList.add('youtube__content');
			yotubeContent.removeAttribute('id', 'mainCarousel');
			yotubeContentItem.forEach(i => {
				i.classList.remove('carousel__slide');
				i.classList.add('youtube__content_item');
			})
			youtubeThummbs.removeAttribute('id', 'thumbCarousel');


			if(mainCarousel && thumbCarousel) {
				mainCarousel.destroy();
				thumbCarousel.destroy();
			}

		}
	}

	if(yotubeContent) {
		youtubeCarouselToggler();
	}

	if(yotubeContent) {
		window.addEventListener('resize', youtubeCarouselToggler);
	}
	



	const burgerOpenBtn = document.querySelector('.header__burger');
	const burgerCloseBtn = document.querySelector('.header__burger_close');
	const burgerMenu = document.querySelector('.header__burger_menu');
	const burgerMenuIn = document.querySelector('.header__burger_in');


	if(burgerMenu) {
		burgerOpenBtn.addEventListener('click', (e) => {
			e.preventDefault();
			burgerMenu.classList.add('header__burger_menu_opened');
			document.body.classList.add('no-scroll');
		})
		burgerCloseBtn.addEventListener('click', (e) => {
			burgerMenu.classList.remove('header__burger_menu_opened');
			document.body.classList.remove('no-scroll');
		})
	}




	/*Portfolio main page*/
	const portTabs = document.querySelectorAll('.port__content_tab');
	const portTabsBody = document.querySelectorAll('.port__content_tabbody');
	const portTabsParent = document.querySelector('.port__content_tabs');

	function hidePortTabBody() {
		portTabsBody.forEach(item => {
			item.style.display = 'none';
		});

		portTabs.forEach(item => {
			item.classList.remove('tab_active');
		});
	}


	function showPortTabBody(index = 0) {
		portTabsBody[index].style.display = 'block';
		portTabs[index].classList.add('tab_active');
	}
	if(portTabsParent && portTabsBody) {
		hidePortTabBody();
		showPortTabBody();	
	}
	


	if(portTabsParent) {
		portTabsParent.addEventListener('click', (event) => {
			let target = event.target;

			if(target && target.classList.contains('port__content_tab')) {
				portTabs.forEach((item, index) => {
					if (target == item) {
						hidePortTabBody();
						showPortTabBody(index);
					}
				})
			}
		})
	}


	/*Portfolio inner mixitup*/
	const mixPort = document.querySelector('#Capital');
	const capitalCarTop = document.querySelector('#capitalCar1');

	if(mixPort) {
		/*PortMixerSlider =================================================================================================*/
	const portMixerCapital = new mixitup('#Capital', {
		selectors: {
			control: '.capital',
		},
		load: {
	        filter: '.capital-1'
	    }
	});

	if(capitalCarTop) {
		/*1 Carousel*/
	const capitalCar1 = new Carousel(document.querySelector('#capitalCar1'), {
		Dots: false,
	});

	const capitalThumbs1 = new Carousel(document.querySelector('#capitalThumbs1'), {
		Sync: {
		    target: capitalCar1,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})

	/*2 Carousel*/
	const capitalCar2 = new Carousel(document.querySelector('#capitalCar2'), {
		Dots: false,
	});

	const capitalThumbs2 = new Carousel(document.querySelector('#capitalThumbs2'), {
		Sync: {
		    target: capitalCar2,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})

	/*3 Carousel*/
	const capitalCar3 = new Carousel(document.querySelector('#capitalCar3'), {
		Dots: false
	})

	const capitalThumbs3 = new Carousel(document.querySelector('#capitalThumbs3'), {
		Sync: {
		    target: capitalCar3,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})
	}
	


	/*PortMixerSLider =================================================================================================*/
	const portMixerCosmetic = new mixitup('#Cosmetic', {
		selectors: {
			control: '.cosmetic',
		},
		load: {
	        filter: '.cosmetic-1'
	    }
	});

	if(capitalCarTop) {
		/*1 Carousel*/
	const cosmeticCar1 = new Carousel(document.querySelector('#cosmeticCar1'), {
		Dots: false
	})

	const cosmeticThumbs1 = new Carousel(document.querySelector('#cosmeticThumbs1'), {
		Sync: {
		    target: cosmeticCar1,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})

	/*2 Carousel*/
	const cosmeticCar2 = new Carousel(document.querySelector('#cosmeticCar2'), {
		Dots: false
	})

	const cosmeticThumbs2 = new Carousel(document.querySelector('#cosmeticThumbs2'), {
		Sync: {
		    target: cosmeticCar2,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	}) 


	/*3 Carousel*/
	const cosmeticCar3 = new Carousel(document.querySelector('#cosmeticCar3'), {
		Dots: false
	})

	const cosmeticThumbs3 = new Carousel(document.querySelector('#cosmeticThumbs3'), {
		Sync: {
		    target: cosmeticCar3,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})
	}


	/*PortMixerSLider =================================================================================================*/
	const portMixerFull = new mixitup('#Full', {
		selectors: {
			control: '.full',
		},
		load: {
			filter: '.full-1'
		}
	});


	if(capitalCarTop) {
		/*1 Carousel*/
	const fullCar1 = new Carousel(document.querySelector('#fullCar1'), {
		Dots: false
	})

	const fullThumbs1 = new Carousel(document.querySelector('#fullThumbs1'), {
		Sync: {
		    target: fullCar1,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})


	/*2 Carousel*/
	const fullCar2 = new Carousel(document.querySelector('#fullCar2'), {
		Dots: false
	})

	const fullThumbs2 = new Carousel(document.querySelector('#fullThumbs2'), {
		Sync: {
		    target: fullCar2,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})


	/*3 Carousel*/
	const fullCar3 = new Carousel(document.querySelector('#fullCar3'), {
		Dots: false
	})

	const fullThumbs3 = new Carousel(document.querySelector('#fullThumbs3'), {
		Sync: {
		    target: fullCar3,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})
	}
	

	/*PortMixerSLider =================================================================================================*/
	const portMixerStudio = new mixitup('#Studio', {
		selectors: {
			control: '.studio'
		},
		load: {
			filter: '.studio-1'
		}
	})

	if(capitalCarTop) {
		const studioCar1 = new Carousel(document.querySelector('#studioCar1'), {
		Dots:false
	})

	const studioThumbs1 = new Carousel(document.querySelector('#studioThumbs1'), {
		Sync: {
		    target: studioCar1,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})


	/*2 Carosule*/
	const studioCar2 = new Carousel(document.querySelector('#studioCar2'), {
		Dots:false
	})

	const studioThumbs2 = new Carousel(document.querySelector('#studioThumbs2'), {
		Sync: {
		    target: studioCar2,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})


	/*3 Carousel*/
	const studioCar3 = new Carousel(document.querySelector('#studioCar3'), {
		Dots:false
	})

	const studioThumbs3 = new Carousel(document.querySelector('#studioThumbs3'), {
		Sync: {
		    target: studioCar3,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})
	}
	/*1 Carousel*/
	


	/*PortMixerSLider =================================================================================================*/
	const portMixerBlack = new mixitup('#Black', {
		selectors: {
			control: '.black'
		},
		load: {
			filter: '.black-1'
		}
	})


	if(capitalCarTop) {
		/*1 Carousel*/
	const blackCar1 = new Carousel(document.querySelector('#blackCar1'), {
		Dots:false
	})

	const blackThumbs1 = new Carousel(document.querySelector('#blackThumbs1'), {
		Sync: {
		    target: blackCar1,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})


	/*2 Carousel*/
	const blackCar2 = new Carousel(document.querySelector('#blackCar2'), {
		Dots:false
	})

	const blackThumbs2 = new Carousel(document.querySelector('#blackThumbs2'), {
		Sync: {
		    target: blackCar2,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})

	/*3 Carosuel*/
	const blackCar3 = new Carousel(document.querySelector('#blackCar3'), {
		Dots:false
	})

	const blackThumbs3 = new Carousel(document.querySelector('#blackThumbs3'), {
		Sync: {
		    target: blackCar3,
		    friction: 0,
		  },
		  Dots: false,
		  Navigation: false,
		  center: true,
		  slidesPerPage: 1,
		  infinite: false,
	})
	}
	
	}


	/*Burger Submenu logic*/
	const burgerSubmenuHeaders = document.querySelectorAll('.main__menu_item_ar_link');
	const burgrerMenuItems = document.querySelectorAll('.main__menu_item_ar');
	const burgerSubmenus = document.querySelectorAll('.main__submenu');
	const secMenu = document.querySelector('.menu__list');

	burgerSubmenuHeaders.forEach(i => {
		i.addEventListener('click', (e) => {
			e.preventDefault();
		})
	})


	burgrerMenuItems.forEach(i => {
		i.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const subBtn = self.querySelector('.main__menu_item_ar_link');
			const subMenu = self.querySelector('.main__submenu');

			// if(i.classList.contains('opened')){
			// 	i.classList.remove('opened');
				burgerSubmenus.forEach(i => {
					i.style.height = '0'; 
				})
			// }
			// if(!i.classList.contains('opened')) {
			// 	burgerSubmenus.forEach(i => {
			// 		i.style.height = '0'; 
			// 	})
			// }



			self.classList.toggle('opened');

			if(self.classList.contains('opened')) {
				i.classList.remove('opened');
				burgrerMenuItems.forEach(i => {
					i.classList.remove('opened');
				})
				burgerSubmenus.forEach(i => {
					i.style.height = '0'; 
				})
				self.classList.add('opened');
			}
			

			if(self.classList.contains('opened')) {
				subMenu.style.height = subMenu.scrollHeight + 'px';

			} 
			if (!self.classList.contains('opened')) {
				subMenu.style.height = '0';
			}


			/*For second menu*/
			if(i.classList.contains('opened')) {
				secMenu.style.height = '0';
			} else {
				secMenu.style.height = secMenu.scrollHeight + 'px';
			}

		})
	})




	/*Portfolio one item*/
	
	const portItem = document.querySelector('.port-item__gallery_content');
	const portItemDescr = document.querySelector('.port-item__gallery_info');

	if(portItem) {
		portItemDescr.style.width = `${portItem.offsetWidth}px`;
	}
	
	window.addEventListener('resize', () => {
		if(portItem) {
			portItemDescr.style.width = `${portItem.offsetWidth}px`;
		}
	})

	const portItemTabs = document.querySelectorAll('.port-item__gallery_tab');
	const portItemContent = document.querySelectorAll('.port-item__gallery_content_item');
	const portItemTabsParent = document.querySelector('.port-item__gallery_tabs');

	function hidePortItemTabContet() {
		portItemContent.forEach(i => {
			i.style.display = 'none';
		});

		portItemTabs. forEach(i => {
			i.classList.remove('port-item__gallery_tab_active');
		});
	}


	function showPortItemTabContent(i = 0) {
		portItemContent[i].style.display = 'flex';
		portItemTabs[i].classList.add('port-item__gallery_tab_active');
	}


	if(portItemTabsParent) {
		hidePortItemTabContet();
		showPortItemTabContent(0);
	}

	


	if(portItemTabsParent) {
		portItemTabsParent.addEventListener('click', (e) => {
		const tar = e.target;
		const tab = tar.parentNode;
		if(tab && tab.classList.contains('port-item__gallery_tab')) {
			portItemTabs.forEach((i, index) => {
				if(tab == i) {
					hidePortItemTabContet();
					showPortItemTabContent(index);
				}
			})
		}
	})
	}	

	const quizRange1 = document.querySelector('#rangeSlider1');
	const quizRange1Value = document.querySelector('#rangeSlider1Value');

	if(quizRange1) {
		noUiSlider.create(quizRange1, {
			start: [0],
			step: 1,
			connect: [true, false],
			range: {
				'min': [1],
				'max': [250]
			},
			tooltips: true,
			format: wNumb({
		        decimals: 0,
		        suffix: 'м2'
		    }),


		})

		quizRange1.noUiSlider.on('update', function(values, handle) {
			quizRange1Value.innerHTML = values[handle].substring(0, values[handle].length - 2);
		});
	
	}




});




