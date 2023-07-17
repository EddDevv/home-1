document.addEventListener("DOMContentLoaded", function () {
	// Функция для создания экземпляров Swiper с общими опциями
	function createSwiper(selector, options) {
		return new Swiper(selector, options)
	}

	// Инициализация слайдера для .collection__slider
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

	const burger = document.getElementById('burger')
	const closeMenu = document.getElementById('close-menu')
	const catalogBtn = document.getElementById('catalog')
	const menu = document.querySelector('.header__top-list')
	const catalog = document.querySelector('.catalog')
	const closeCatalog = document.querySelector('.catalog')

	function addClassess(item, addClass) {
		item.classList.add(addClass)
		document.body.classList.add('overflow')
	}
	function removeClassess(item, addClass) {
		item.classList.remove(addClass)
		document.body.classList.remove('overflow')
	}

	burger.addEventListener('click', () => addClassess(menu, 'header__top-list_active'))
	closeMenu.addEventListener('click', () => removeClassess(menu, 'header__top-list_active'))
	catalogBtn.addEventListener('click', () => addClassess(catalog, 'catalog_active'))
	closeCatalog.addEventListener('click', () => removeClassess(catalog, 'catalog_active'))

})


const catalogTitles = document.querySelectorAll("[data-submenu-id]")
const catalogBreadcrumbs = document.querySelector('.catalog__breadcrumbs-title')
const catalogBreadcrumbsBtn = document.querySelector('.catalog__breadcrumbs')

catalogTitles.forEach(function (catalogTitle) {
	catalogTitle.addEventListener("click", function (event) {
		// Предотвращаем распространение события на родительские элементы
		event.stopPropagation()

		const submenuId = catalogTitle.getAttribute("data-submenu-id")
		const submenu = document.getElementById(submenuId)

		if (submenu) {
			// Удаляем класс активности у всех вложенных меню
			const activeSubmenus = document.querySelectorAll(".subcatalog_active")
			activeSubmenus.forEach(function (activeSubmenu) {
				activeSubmenu.classList.remove("subcatalog_active")
			})

			// Добавляем класс активности только для выбранного вложенного меню
			catalogBreadcrumbsBtn.style.display = 'inline-flex'
			catalogBreadcrumbs.innerHTML = catalogTitle.innerText
			submenu.classList.add("subcatalog_active")
		}
	})
})

// Обработчик для закрытия вложенного меню при клике на "breadcrumb"
catalogBreadcrumbsBtn.addEventListener('click', function (event) {
	event.stopPropagation() // Предотвращаем распространение события на родительские элементы

	const activeSubmenu = document.querySelector(".subcatalog_active")
	if (activeSubmenu) {
		catalogBreadcrumbsBtn.style.display = 'none'
		activeSubmenu.classList.remove("subcatalog_active")
	}
})
