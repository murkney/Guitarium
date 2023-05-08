export default function Aside() {
	const filterButtons = document.querySelectorAll('.section__collapsible-button');

	for (const button of filterButtons) {
		button.addEventListener('click', handleClickFilterButton);
	}

	function handleClickFilterButton(event) {
		renderHTML(event);
	}

	function renderHTML(event) {
		const currentOptions = event.currentTarget.parentNode.childNodes[3];
		const currentButtonArrow = event.currentTarget.childNodes[3];
		
		currentOptions.style.display = currentOptions.style.display === 'block' ? 'none' : 'block';
		currentButtonArrow.style.transform = currentButtonArrow.style.transform === 'rotateX(180deg)' ? 'rotateX(0deg)' : 'rotateX(180deg)';
	}
}