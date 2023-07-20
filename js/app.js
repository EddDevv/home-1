document.addEventListener("DOMContentLoaded", function () {

	const catalogBtn = document.getElementById('catalog')
	const closeCatalogBtn = document.querySelector('#close-catalog')
	const catalogBtnsvg = catalogBtn.querySelector('svg')
	const catalog = document.querySelector('.catalog')

	closeCatalogBtn.addEventListener('click', () => {
		closeCatalog()
	})

	// Function to toggle the catalog open/close
	function toggleCatalog() {
		catalogBtnsvg.style.transform = catalog.classList.toggle('catalog_active') ? 'rotate(180deg)' : 'rotate(0deg)'
	}

	catalogBtn.addEventListener('click', (e) => {
		e.stopPropagation()
		toggleCatalog()
	})

	// Close the catalog when clicking outside of it
	window.addEventListener('click', (e) => {
		if (!catalog.contains(e.target) && !catalogBtn.contains(e.target)) {
			closeCatalog()
		}
	})

	function closeCatalog() {
		catalogBtnsvg.style.transform = 'rotate(0deg)'
		catalog.classList.remove('catalog_active')
	}

	const burger = document.getElementById('burger')
	const closeMenu = document.getElementById('close-menu')
	const menu = document.querySelector('.header__top-list')

	function addClass(item, className) {
		item.classList.add(className)
		document.body.classList.add('overflow')
	}

	function removeClass(item, className) {
		item.classList.remove(className)
		document.body.classList.remove('overflow')
	}

	burger.addEventListener('click', () => addClass(menu, 'header__top-list_active'))
	closeMenu.addEventListener('click', () => removeClass(menu, 'header__top-list_active'))

	const catalogTitles = document.querySelectorAll("[data-submenu-id]")
	const catalogBreadcrumbs = document.querySelector('.catalog__breadcrumbs-title')
	const catalogBreadcrumbsBtn = document.querySelector('.catalog__breadcrumbs')

	catalogTitles.forEach(function (catalogTitle) {
		catalogTitle.addEventListener("click", function (event) {
			event.stopPropagation()

			const submenuId = catalogTitle.getAttribute("data-submenu-id")
			const submenu = document.getElementById(submenuId)

			if (submenu) {
				const activeSubmenus = document.querySelectorAll(".subcatalog_active")
				activeSubmenus.forEach(function (activeSubmenu) {
					activeSubmenu.classList.remove("subcatalog_active")
				})

				catalogBreadcrumbsBtn.classList.add('show-bread')
				catalogBreadcrumbs.innerHTML = catalogTitle.innerText
				submenu.classList.add("subcatalog_active")
			}
		})
	})

	catalogBreadcrumbsBtn.addEventListener('click', function (event) {
		event.stopPropagation()

		const activeSubmenu = document.querySelector(".subcatalog_active")
		if (activeSubmenu) {
			catalogBreadcrumbsBtn.classList.remove('show-bread')
			activeSubmenu.classList.remove("subcatalog_active")
		}
	})
})

const dropdownBtn = document.getElementById('dropdown')
const dropdownList = document.querySelector('.dropdown__categories')
const dropdownIcon = document.querySelector('#dropdown svg')

// Function to toggle the dropdown list open/close
function toggleDropdown() {
	dropdownIcon.classList.toggle('icon-rotate')
	dropdownList.classList.toggle('show')
}

dropdownBtn.addEventListener('click', () => {
	toggleDropdown()
})

// Close the dropdown list when clicking outside of it
window.addEventListener('click', (e) => {
	if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
		dropdownList.classList.remove('show')
		dropdownIcon.classList.remove('icon-rotate')
	}
})

const dropdownItems = document.querySelectorAll('.dropdown__categories li')
const dropdownBtnTxt = dropdownBtn.querySelector('span')

dropdownItems.forEach((item) => {
	item.addEventListener('click', () => {
		dropdownBtnTxt.innerText = item.innerText
		toggleDropdown()
	})
})