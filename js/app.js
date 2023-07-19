document.addEventListener("DOMContentLoaded", function () {

	const catalogBtn = document.getElementById('catalog')
	const catalogBtnsvg = catalogBtn.querySelector('svg')
	const catalog = document.querySelector('.catalog')

	catalogBtn.addEventListener('mouseenter', openCatalog)
	catalog.addEventListener('mouseenter', openCatalog)
	catalogBtn.addEventListener('mouseleave', closeCatalog)
	catalog.addEventListener('mouseleave', closeCatalog)

	function openCatalog() {
		catalogBtnsvg.style.transform = 'rotate(180deg)'
		catalog.classList.add('catalog_active')
	}

	function closeCatalog() {
		catalogBtnsvg.style.transform = 'rotate(0deg)'
		catalog.classList.remove('catalog_active')
	}


	if (window.innerWidth <= 991) {
		const burger = document.getElementById('burger')
		const closeMenu = document.getElementById('close-menu')
		const menu = document.querySelector('.header__top-list')
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

					catalogBreadcrumbsBtn.style.display = 'inline-flex'
					catalogBreadcrumbs.innerHTML = catalogTitle.innerText
					submenu.classList.add("subcatalog_active")
				}
			})
		})

		catalogBreadcrumbsBtn.addEventListener('click', function (event) {
			event.stopPropagation()

			const activeSubmenu = document.querySelector(".subcatalog_active")
			if (activeSubmenu) {
				catalogBreadcrumbsBtn.style.display = 'none'
				activeSubmenu.classList.remove("subcatalog_active")
			}
		})
	}
})

