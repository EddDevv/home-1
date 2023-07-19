function createSwiper(selector, options) {
	return new Swiper(selector, options)
}

createSwiper(".collection__slider", {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: ".collection__pagination",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
})

createSwiper(".banner-slider", {
	navigation: {
		nextEl: ".banner-slider-button-next",
		prevEl: ".banner-slider-button-prev",
	},
	pagination: {
		el: ".banner-slider__pagination",
		clickable: true,
	},
})
