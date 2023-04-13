import { sanity } from "../sanity.js";

export default async function InStock() {
	const query = `
		*[_type == 'in_stock'] {
			title,
			available-> {
				_id,
				'brand': brand->name,
				model,
				price,
				'image': gallery[0].asset->url,
				"category": category->{name},
				string_count
			}
		}
	`;

	const inStockedItems = await sanity.fetch(query);

	function createInStockListContainerDOM() {
		for (const inStockedItem of inStockedItems) {
			const inStockContainer = document.getElementById('instock');

			const inStockItem = document.createElement('div');
			const inStockItemImage = document.createElement('img');
			const inStockItemSpan = document.createElement('span');
			const inStockItemTitle = document.createElement('h3');
			const inStockItemPrice = document.createElement('h4');
			const inStockItemLocation = document.createElement('h4');
			const inStockItemHover = document.createElement('div');
			
			inStockItem.className = 'section__main-guitars-electric-guitar-card';
			inStockItemHover.className = 'section__main-guitars-electric-guitar-card-hover';

			inStockItemImage.src = inStockedItem.available.image;
			inStockItemTitle.innerText = `${inStockedItem.available.brand} - ${inStockedItem.available.model}`;
			inStockItemPrice.innerText = `$ ${inStockedItem.available.price}`;
			inStockItemLocation.innerText = `${inStockedItem.title}`;

			inStockContainer.appendChild(inStockItem);
			inStockItem.append(
				inStockItemImage,
				inStockItemSpan
			);
			inStockItemSpan.append(
				inStockItemTitle,
				inStockItemPrice,
				inStockItemLocation
			);
			inStockItem.appendChild(inStockItemHover);
		}
	};

	function renderHTML() {
		createInStockListContainerDOM();
	}

	renderHTML();
};