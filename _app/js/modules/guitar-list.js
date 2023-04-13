import { sanity } from "../sanity.js";

export default async function guitarList() {

	let priceMinCheckbox = [];
	let priceMaxCheckbox = [];
	let brandCheckboxValue = [];
	
	const checkboxPrices = document.querySelectorAll('.section__aside-dropdown-price-items-checkbox input');
	const brandCheckboxes = document.querySelectorAll('.section__aside-dropdown-brand-items-checkbox input');

	//brands
	for (const brandCheckbox of brandCheckboxes) {
		brandCheckbox.addEventListener('click', async () => {
			if (brandCheckbox.checked) {
				brandCheckboxValue.push(brandCheckbox.value);
				//brandCheckboxValue = brandCheckboxValue.replace('*', brandCheckbox.value);
			} else {
				brandCheckboxValue = brandCheckboxValue.filter(element => element !== brandCheckbox.value);
			}	
			console.log(brandCheckboxValue)
		});
	}

	//checkboxes
	for (const priceCheckbox of checkboxPrices) {
		priceCheckbox.addEventListener('click', () => {
			let prices = priceCheckbox.value.split(",");			
			priceMinCheckbox.push(prices[0]);
			priceMaxCheckbox.push(prices[1]);
		});	
	}	

	const query = `*[_type == 'guitar' && price >= $priceMin && price <= $priceMax && brand->name match $brands] {
		_id,
		"image": gallery[0].asset->url,
		"brand": brand->name,
		model,
		price,
		"category": category->{name},
		string_count
	}`;

	const params = {	
		priceMin: 1000,
		priceMax: 10000,
		brands: brandCheckboxValue,
		//strings: 5
	};
	
	const guitars = await sanity.fetch(query, params);
	
	//Filtering
	function createGuitarListContainerDOM() {	
		let guitarListContainer = '';
	
		guitars.filter(guitar => { 
			const filter = guitar.category.name;

			if (filter === 'Electric guitar') {
				guitarListContainer = document.querySelector('.section__main-guitars-electric-guitar');
			} else if (filter === 'Bass guitar') {
				guitarListContainer = document.querySelector('.section__main-guitars-bass-guitar');
			} else if (filter === 'Acoustic guitar') {
				guitarListContainer = document.querySelector('.section__main-guitars-acoustic-guitar');
			}

			const guitarListItem = document.createElement('div');
			const guitarListItemImage = document.createElement('img');
			const guitarListItemSpan = document.createElement('span');
			const guitarListItemTitle = document.createElement('h3');
			const guitarListItemPrice = document.createElement('h4');
			const guitarListItemHover = document.createElement('div');
			
			guitarListItem.className = 'section__main-guitars-electric-guitar-card';
			guitarListItemHover.className = 'section__main-guitars-electric-guitar-card-hover'

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

	function renderHTML() {
		createGuitarListContainerDOM();
	}
	
	renderHTML();
}