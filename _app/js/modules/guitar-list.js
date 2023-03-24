import { sanity } from "../sanity.js";

export default async function guitarList() {
	const query = `*[_type == 'guitar'] {
		_id,
		"image": gallery[0].asset->url,
		"brand": brand->name,
		model,
		price
	}`;
	// const params = {};

	const guitars = await sanity.fetch(query);

	function createGuitarListContainerDOM() {
		const guitarListContainer = document.createElement('div');
		guitarListContainer.className = 'guitar-list';

		for (const guitar of guitars) {
			const guitarListItem = document.createElement('div');
			const guitarListItemImage = document.createElement('img');
			const guitarListItemTitle = document.createElement('h2');
			const guitarListItemModel = document.createElement('h3');
			const guitarListItemPrice = document.createElement('h3');
			
			guitarListItem.className = 'guitar-list__item';
			guitarListItemImage.className = 'guitar-list__image';
			guitarListItemTitle.className = 'guitar-list__title';
			guitarListItemModel.className = 'guitar-list__model';
			guitarListItemPrice.className = 'guitar-list__price';

			guitarListItemImage.src = guitar.image;
			guitarListItemTitle.innerText = guitar.brand;
			guitarListItemModel.innerText = guitar.model;
			guitarListItemPrice.innerText = guitar.price;
			
			guitarListContainer.appendChild(guitarListItem);
			
			guitarListItem.appendChild(guitarListItemImage);
			guitarListItem.appendChild(guitarListItemTitle);
			guitarListItem.appendChild(guitarListItemModel);
			guitarListItem.appendChild(guitarListItemPrice);
			
		}

		return guitarListContainer;
	}

	function renderHTML() {
		const guitarListContainer = createGuitarListContainerDOM();
		document.body.appendChild(guitarListContainer);
	}

	renderHTML();
}