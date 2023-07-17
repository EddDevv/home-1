const headerSocial = document.querySelector('.contacts__social')
const headerLeftCenter = document.querySelector('.header__center-left')

const headerPhones = document.querySelector('.contacts__top')
const headerAddressRight = document.querySelector('.address__time-right')

const contactsBottom = document.querySelector('.contacts__bottom')
const addressLocation = document.querySelector('.address__location')

const searchForm = document.querySelector('.form-search')
const catalog = document.querySelector('#catalog')

const aboutImg = document.querySelector('.about__left-img')
const aboutCenter = document.querySelector('.about__center')

const headerBottomBody = document.querySelector('.header__bottom-body')
const headerTop = document.querySelector('.header__top-list')

if (window.innerWidth <= 991) {
	headerLeftCenter.append(headerSocial)
	headerAddressRight.append(headerPhones)
	addressLocation.after(contactsBottom)
	searchForm.after(catalog)
	aboutCenter.append(aboutImg)
	headerTop.prepend(headerBottomBody)
}