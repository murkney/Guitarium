export default function scrollIntoSection() {
	
	const buttonsScroll = document.querySelectorAll('.header__navigation-scroll');
	const sectionElectricGuitars = document.querySelector('.section__main-guitars-title-electric-guitar')
	const sectionBassGuitars = document.querySelector('.section__main-guitars-title-bass-guitar');
	const sectionAcousticGuitars = document.querySelector('.section__main-guitars-title-acoustic-guitar')

	for (const button of buttonsScroll) {
		button.addEventListener('click', () => {

			if (button.dataset.type === 'electric') {
				sectionElectricGuitars.scrollIntoView ({
					behavior: "smooth",
				});
			} else if (button.dataset.type === 'bass') {
				sectionBassGuitars.scrollIntoView ({
					behavior: "smooth",
				});
			} else if (button.dataset.type === 'acoustic') {
				sectionAcousticGuitars.scrollIntoView ({
					behavior: "smooth",
				});
			}
		});
	}	
}