import { sanity } from "../sanity.js";

export default async function guitarList() {
	const query = `*[_type == 'guitar'] {
		_id,
		"image": gallery[0].asset->url,
		"brand": brand->name,
		model,
		price,
		"category": category->{name},
		string_count
	}`;
	// const params = {};

	const guitars = await sanity.fetch(query);

	function createGuitarListContainerDOM() {

		let guitarListContainer = '';

		guitars.filter(guitar => { 

			const filter = guitar.category.name;

			if (filter === 'Electric guitar') {
				guitarListContainer = document.querySelector('.section__main-electric-guitar');
			}
			else if (filter === 'Bass guitar') {
				guitarListContainer = document.querySelector('.section__main-bass-guitar');
			}
			else if (filter === 'Acoustic guitar') {
				guitarListContainer = document.querySelector('.section__main-acoustic-guitar');
			}

			const guitarListItem = document.createElement('div');
			const guitarListItemImage = document.createElement('img');
			const guitarListItemSpan = document.createElement('span');
			const guitarListItemTitle = document.createElement('h3');
			const guitarListItemPrice = document.createElement('h4');
			const guitarListItemHover = document.createElement('div');
			
			guitarListItem.className = 'section__main-electric-guitar-card';
			guitarListItemHover.className = 'section__main-electric-guitar-card-hover'

			guitarListItemImage.src = guitar.image;
			guitarListItemTitle.innerText = `${guitar.brand} ${guitar.model}`;
			guitarListItemPrice.innerText = `$ ${guitar.price}`;
			
			guitarListContainer.appendChild(guitarListItem);
			guitarListItem.append(
				guitarListItemImage,
				guitarListItemSpan
			);
			guitarListItemSpan.append(
				guitarListItemTitle,
				guitarListItemPrice
			);
			guitarListItem.appendChild(guitarListItemHover);
		});
		return guitarListContainer;
	}


	

	function createDropdownBrandDOM() {

		guitars.forEach(guitar => {
			const brand = guitar.brand;
			const dropDownBrand = document.querySelector('.section__aside-dropdown-brand-items');
			const dropDownBrandDiv = document.createElement('div');
			const dropDownBrandInput = document.createElement('input');
			const dropDownBrandH3 = document.createElement('H4');

			dropDownBrandDiv.className = 'section__aside-dropdown-brand-items-checkbox';
			dropDownBrandInput.type = 'checkbox';
			dropDownBrandInput.value = brand;

			dropDownBrandDiv.append(
				dropDownBrandInput,
				dropDownBrandH3
			)
			dropDownBrandH3.innerText = brand;

			dropDownBrand.appendChild(dropDownBrandDiv)
		});
	}	

	function createDropdownStringCountDOM() {

		guitars.forEach(guitar => {
			const stringCount = guitar.string_count;
			const dropDownStringCount = document.querySelector('.section__aside-dropdown-string-count-items');
			const dropDownStringCountDiv = document.createElement('div');
			const dropDownStringCountInput = document.createElement('input');
			const dropDownStringCountH3 = document.createElement('H4');

			dropDownStringCountDiv.className = 'section__aside-dropdown-price-items-checkbox';
			dropDownStringCountInput.type = 'checkbox';
			dropDownStringCountInput.value = stringCount;

			dropDownStringCountDiv.append(
				dropDownStringCountInput,
				dropDownStringCountH3
			)
			dropDownStringCountH3.innerText = stringCount;

			dropDownStringCount.appendChild(dropDownStringCountDiv);
		});
	}	

	function createDropdownPriceDOM() {

		guitars.forEach(guitar => {
			const price = guitar.price;
			const dropDownPrice = document.querySelector('.section__aside-dropdown-price-items');
			const dropDownPriceDiv = document.createElement('div');
			const dropDownPriceInput = document.createElement('input');
			const dropDownPriceH3 = document.createElement('H4');

			dropDownPriceDiv.className = 'section__aside-dropdown-brand-items-checkbox';
			dropDownPriceInput.type = 'checkbox';
			dropDownPriceInput.value = price;
			

			dropDownPriceDiv.append(
				dropDownPriceInput,
				dropDownPriceH3
			)
			dropDownPriceH3.innerText = `$ ${price}`;
			dropDownPrice.appendChild(dropDownPriceDiv);
		});
	}	


	function renderHTML() {
		createGuitarListContainerDOM();
		createDropdownBrandDOM();
		createDropdownStringCountDOM();
		createDropdownPriceDOM();
		//const guitarListContainer = createGuitarListContainerDOM();
		//guitarListContainer.appendChild(guitarListItem);
	}

	renderHTML();
}