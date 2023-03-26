import { sanity } from "../sanity.js";

export default async function guitarList() {
	const query = `*[_type == 'guitar'] {
		_id,
		"image": gallery[0].asset->url,
		"brand": brand->name,
		model,
		price,
		"category": category->{name}
	}`;
	// const params = {};

	const guitars = await sanity.fetch(query);
	

	function createGuitarListContainerDOM() {

		let guitarListContainer = '';

		//guitars.filter(event => { 
		//	return event.category.name === type;
		//});
		
		//if (guitars.category === 'Electric guitar') {
		//	guitarListContainer = document.querySelector('.section__main-electric-guitar');
		//}
		//if (guitars.category === 'Bass guitar') {
		//	guitarListContainer = document.querySelector('.section__main-bass-guitar');
		//}
		//if (guitars.category === 'Acoustic guitar') {
		//	guitarListContainer = document.querySelector('.section__main-acoustic-guitar');
		//}


		guitarListContainer = document.querySelector('.section__main-electric-guitar');

		for (const guitar of guitars) {

			//if(guitar.category.name === 'Bass guitar guitar') {
			
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
			//}
		}
		return guitarListContainer;
	}

	function renderHTML() {
		createGuitarListContainerDOM();
		//const guitarListContainer = createGuitarListContainerDOM();
		//guitarListContainer.appendChild(guitarListItem);
	}

	renderHTML();
}