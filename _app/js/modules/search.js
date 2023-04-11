import { sanity } from "../sanity.js";

export default async function Search() {

	let guitarSearchText = '';
	let foundGuitar = [];

	const searchListInput = document.querySelector('.section__aside-search');
	const searchInput = document.querySelector('.section__aside-search-input-text');
	const foundGuitarListResult = document.querySelector('.section__main-result');
	const foundGuitarListResultTitle = document.querySelector('.section__main-result h2');
	const foundGuitarListContainer = document.querySelector('.section__main-result-container');
	const searchCloseButton = document.querySelector('.section__main-result-header button');
	const guitarTypes = document.querySelectorAll('.section__main-guitars');
	
	searchListInput.addEventListener('submit', handleSearchInput);
	searchCloseButton.addEventListener('click', handleCloseButton);

	async function handleSearchInput(event) {
		event.preventDefault();
		guitarSearchText = searchInput.value;
		await fetchGuitars();
		inputRenderHTML();
		renderHTML();
	}

	function handleCloseButton() {
		closeButtonRenderHTML();
	}
	
	async function fetchGuitars() {
		const query = `*[_type == 'guitar' && [brand->name, model] match [$brandName + '*', $modelName + '*']] {
			_id,
			"image": gallery[0].asset->url,
			"brand": brand->name,
			model,
			price,
			"category": category->{name},
			string_count
		}`;

		const params = {
				brandName: guitarSearchText,
				modelName: guitarSearchText
			};
		foundGuitar = await sanity.fetch(query, params);
	}
	
	




	//function createGuitarListContainerSearchDOM() {
	//	const guitarListResult = document.querySelector('.section__main-result');

	//	guitarResult.forEach(guitar => { 

	//		const guitarListItem = document.createElement('div');
	//		const guitarListItemImage = document.createElement('img');
	//		const guitarListItemSpan = document.createElement('span');
	//		const guitarListItemTitle = document.createElement('h3');
	//		const guitarListItemPrice = document.createElement('h4');
	//		const guitarListItemHover = document.createElement('div');
			
	//		guitarListItem.className = 'section__main-guitars-electric-guitar-card';
	//		guitarListItemHover.className = 'section__main-guitars-electric-guitar-card-hover'

	//		guitarListItemImage.src = guitar.image;
	//		guitarListItemTitle.innerText = `${guitar.brand} ${guitar.model}`;
	//		guitarListItemPrice.innerText = `$ ${guitar.price}`;
			
	//		guitarListResult.appendChild(guitarListItem);
	//		guitarListItem.append(
	//			guitarListItemImage,
	//			guitarListItemSpan
	//		);
	//		guitarListItemSpan.append(
	//			guitarListItemTitle,
	//			guitarListItemPrice
	//		);
	//		guitarListItem.appendChild(guitarListItemHover);
	//	});
	//	return guitarListResult;
	//}

	
	
 
 
	 
	
	 
	 
	function inputRenderHTML() {
		foundGuitarListResult.classList.add('section__main-result--visible');
		for(const type of guitarTypes) {
			type.classList.add('section__main-guitars--invisible');
		};
		searchInput.value = '';
	}

	//Filtering
	function createFoundGuitarListContainerDOM() {
	
		if(foundGuitar.length > 0) {
			foundGuitarListResultTitle.innerText = `Search results for: ${guitarSearchText}`; 
			foundGuitar.filter(guitar => { 

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
				
				
				guitarListItem.append(
					guitarListItemImage,
					guitarListItemSpan
				);
				guitarListItemSpan.append(
					guitarListItemTitle,
					guitarListItemPrice
				);
				guitarListItem.appendChild(guitarListItemHover);
				foundGuitarListContainer.appendChild(guitarListItem);
			});
		} else {
			foundGuitarListResultTitle.innerText = `Sorry, but nothing matched your search terms. Please try again with some different keywords.`; 
		}
		//return foundGuitarListContainer;
	}

	function closeButtonRenderHTML() {
		foundGuitarListResult.classList.remove('section__main-result--visible');
		for(const type of guitarTypes) {
			type.classList.remove('section__main-guitars--invisible');
		};
	}













	
	//Dropdown filter
	//function createDropdownBrandDOM() {

	//	foundGuitarguitars.forEach(guitar => {
	//		const brand = guitar.brand;
	//		const dropDownBrand = document.querySelector('.section__aside-dropdown-brand-items');
	//		const dropDownBrandDiv = document.createElement('div');
	//		const dropDownBrandInput = document.createElement('input');
	//		const dropDownBrandH3 = document.createElement('H4');

	//		dropDownBrandDiv.className = 'section__aside-dropdown-brand-items-checkbox';
	//		dropDownBrandInput.type = 'checkbox';
	//		dropDownBrandInput.value = brand;

	//		dropDownBrandDiv.append(
	//			dropDownBrandInput,
	//			dropDownBrandH3
	//		)
	//		dropDownBrandH3.innerText = brand;

	//		dropDownBrand.appendChild(dropDownBrandDiv)
	//	});
	//}	

	//Dropdown filter
	//function createDropdownStringCountDOM() {

	//	guitars.forEach(guitar => {
	//		const stringCount = guitar.string_count;
	//		const dropDownStringCount = document.querySelector('.section__aside-dropdown-string-count-items');
	//		const dropDownStringCountDiv = document.createElement('div');
	//		const dropDownStringCountInput = document.createElement('input');
	//		const dropDownStringCountH3 = document.createElement('H4');

	//		dropDownStringCountDiv.className = 'section__aside-dropdown-price-items-checkbox';
	//		dropDownStringCountInput.type = 'checkbox';
	//		dropDownStringCountInput.value = stringCount;

	//		dropDownStringCountDiv.append(
	//			dropDownStringCountInput,
	//			dropDownStringCountH3
	//		)
	//		dropDownStringCountH3.innerText = stringCount;

	//		dropDownStringCount.appendChild(dropDownStringCountDiv);
	//	});
	//}	

	//function createDropdownPriceDOM() {

	//	guitars.forEach(guitar => {
	//		const price = guitar.price;
	//		const dropDownPrice = document.querySelector('.section__aside-dropdown-price-items');
	//		const dropDownPriceDiv = document.createElement('div');
	//		const dropDownPriceInput = document.createElement('input');
	//		const dropDownPriceH3 = document.createElement('H4');

	//		dropDownPriceDiv.className = 'section__aside-dropdown-brand-items-checkbox';
	//		dropDownPriceInput.type = 'checkbox';
	//		dropDownPriceInput.value = price;
			

	//		dropDownPriceDiv.append(
	//			dropDownPriceInput,
	//			dropDownPriceH3
	//		)
	//		dropDownPriceH3.innerText = `$ ${price}`;
	//		dropDownPrice.appendChild(dropDownPriceDiv);
	//	});
	//}	


	function renderHTML() {
		
		//createDropdownBrandDOM();
		//createDropdownStringCountDOM();
		//createDropdownPriceDOM();
		
		foundGuitarListContainer.innerHTML = '';
		createFoundGuitarListContainerDOM();
		//foundGuitarListContainer.appendChild(guitarListItem);
		
		//foundGuitarListContainer.appendChild(guitarListItem);
	}

	renderHTML();
}
