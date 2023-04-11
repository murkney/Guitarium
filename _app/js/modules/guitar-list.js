import { sanity } from "../sanity.js";

export default async function guitarList() {

	let firstPrice = [];
	let secondPrice = [];
	let guitarListContainer = '';
	const checkboxPrices = document.querySelectorAll('.section__aside-dropdown-price-items-checkbox input');

	for(const priceCheckbox of checkboxPrices) {
		priceCheckbox.addEventListener('click', () => {
			let prices = priceCheckbox.value.split(",");			
			firstPrice.push(prices[0]);
			secondPrice.push(prices[1]);
			//console.log(firstPrice, secondPrice)
		});	
	}	
	
	const query = `*[_type == 'guitar' || price >= $priceOne && price <= $priceTwo] {
		_id,
		"image": gallery[0].asset->url,
		"brand": brand->name,
		model,
		price,
		"category": category->{name},
		string_count
	}`;

	const params = {
		priceOne: firstPrice,
		priceTwo: secondPrice,
	};

	console.log(params)

	const guitars = await sanity.fetch(query, params);
	
	//Filtering
	function createGuitarListContainerDOM() {
		
		guitars.filter(guitar => { 
			const filter = guitar.category.name;

			if (filter === 'Electric guitar') {
				guitarListContainer = document.querySelector('.section__main-guitars-electric-guitar');
			}
			else if (filter === 'Bass guitar') {
				guitarListContainer = document.querySelector('.section__main-guitars-bass-guitar');
			}
			else if (filter === 'Acoustic guitar') {
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