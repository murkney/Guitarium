export default function aside() {

	let brandVisibile = false;
	let stringCountVisibile = false;
	let priceVisibile = false;
	const buttonDropDownBrand = document.querySelector('.section__aside-dropdown-brand');
	const buttonDropDownStringCount = document.querySelector('.section__aside-dropdown-string-count');
	const buttonDropDownPrice = document.querySelector('.section__aside-dropdown-price');
	const sectionBrands = document.querySelector('.section__aside-dropdown-brand-items');
	const sectionStringCounts = document.querySelector('.section__aside-dropdown-string-count-items');
	const sectionPrice = document.querySelector('.section__aside-dropdown-price-items');
	const arrowBrand = document.querySelector('.section__aside-dropdown-brand img');
	const arrowStringCount = document.querySelector('.section__aside-dropdown-string-count img');
	const arrowPrice = document.querySelector('.section__aside-dropdown-price img');

	buttonDropDownBrand.addEventListener('click', handleButtonBrand);
	buttonDropDownStringCount.addEventListener('click', handleButtonStringCount);
	buttonDropDownPrice.addEventListener('click', handleButtonPrice);

	function brandVisibility() {
		brandVisibile = !brandVisibile;
	}
	function stringCountVisibility() {
		stringCountVisibile = !stringCountVisibile;
	}
	function priceVisibility() {
		priceVisibile = !priceVisibile;
	}

	function handleButtonBrand() {
		brandVisibility();
		renderHTMLBrand();
	}

	function handleButtonStringCount() {
		stringCountVisibility();
		renderHTMLCountString();
	}

	function handleButtonPrice() {
		priceVisibility();
		renderHTMLPrice();
	}

	function renderHTMLBrand() {
		if(brandVisibile === true) {
			sectionBrands.classList.add('section__aside-dropdown-brand-items--visible');
			arrowBrand.classList.add('section__aside-dropdown-brand--opened');
		}
		else {
			sectionBrands.classList.remove('section__aside-dropdown-brand-items--visible');
			arrowBrand.classList.remove('section__aside-dropdown-brand--opened');
		}
	}

	function renderHTMLCountString() {
		if(stringCountVisibile === true) {
			sectionStringCounts.classList.add('section__aside-dropdown-string-count-items--visible');
			arrowStringCount.classList.add('section__aside-dropdown-string-count--opened');
		}
		else {
			sectionStringCounts.classList.remove('section__aside-dropdown-string-count-items--visible');
			arrowStringCount.classList.remove('section__aside-dropdown-string-count--opened');
		}
	}

	function renderHTMLPrice() {
		if(priceVisibile === true) {
			sectionPrice.classList.add('section__aside-dropdown-price-items--visible');
			arrowPrice.classList.add('section__aside-dropdown-price--opened');
		}
		else {
			sectionPrice.classList.remove('section__aside-dropdown-price-items--visible');
			arrowPrice.classList.remove('section__aside-dropdown-price--opened');
		}
	}

}