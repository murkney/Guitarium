import { sanity } from "../sanity.js";

export default async function guitarList() {
	const query = `*[_type == 'guitar'] [0...20] {
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
	const checkboxPrice = document.querySelectorAll('.section__aside-dropdown-price-items-checkbox input');
	let guitarListContainer = '';

	function createGuitarListContainerDOM() {
		
		guitars.filter(guitar => { 

			const filtering = guitar.category.name;

			if (filtering === 'Electric guitar') {
				guitarListContainer = document.querySelector('.section__main-electric-guitar');
			} else if (filtering === 'Bass guitar') {
				guitarListContainer = document.querySelector('.section__main-bass-guitar');
			} else if (filtering === 'Acoustic guitar') {
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






	let checkboxPriceChecked = false;
	let filteringResult = [];
	function checkboxPriceStatus() {
		checkboxPriceChecked = !checkboxPriceChecked;
	}

	function filterGuitarsByPrice() {
		//checkboxPriceStatus();
		createDropdownPriceDOM();
	}

	function createDropdownPriceDOM() {

		guitars.filter(guitar => {
		
			for(const price of checkboxPrice) {
				
				price.addEventListener('click', () => {
					checkboxPriceStatus();
					const prices = price.value.split(",");
					let firstPrice = prices[0];
					let secondPrice = prices[1];
					
					if(checkboxPriceChecked === true && guitar.price >= firstPrice && guitar.price <= secondPrice) {
						filteringResult.push(guitar._id)
						//console.log(guitar)
	
					} else {
						
					}
				});
			}
		});
	}

	console.log(filteringResult)

	function renderHTML() {
		createGuitarListContainerDOM();
		createDropdownBrandDOM();
		createDropdownStringCountDOM();
		filterGuitarsByPrice();
		//createDropdownPriceDOM();
		//const guitarListContainer = createGuitarListContainerDOM();
		//guitarListContainer.appendChild(guitarListItem);
	}

	renderHTML();
}