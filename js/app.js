const eventListener = () => {

	//get element from dom
	const header = document.querySelector('#header');
	const file = document.querySelector('.file');
	const effect = document.querySelector('.effect');
	const resetButton = document.querySelector('#reset');

	//event listeners
	file.addEventListener('click', toggleFile.bind(null, 'file-upload'));
	file.addEventListener('change', loadImage.bind(null, 'file-upload'));
	effect.addEventListener('change', sliderEffect);
	effect.addEventListener('change', blendModes);
	resetButton.addEventListener('click', reset);

	document.addEventListener('DOMContentLoaded', disableSelectAndSlider(true));
}

const disableSelectAndSlider = (value) => {

	//get elements from dom
	const select = document.querySelector('select');
	const inputRange = document.querySelectorAll('input[type=range]');

	//disable select option
	select.disabled = value;

	//loop throup all input[type=range] and disable
	inputRange.forEach((input) => {
		input.disabled = value;
	})

}

const toggleFile = (className) => {
	let file = document.querySelector('.file');

	//get first child element
	let firstElemChild = file.firstElementChild;

	//show and hide targeted element
	firstElemChild.classList.toggle(className);
}
const loadImage = (className) => {

	//get elements from dom
	const interface = document.querySelector('.user-interface')
	let inputFile = document.querySelector('input[type=file]').files[0];
	let appName = document.querySelector('.app-name');
	const spinner = document.querySelector('.lds-spinner');

	var reader = new FileReader();

	//hide selected element
	appName.style.display = "none";

	//show spinner
	spinner.style.display = 'block';

	//add eventlistener
	reader.addEventListener('load', () => {

		//delay image before loading
		setTimeout(function () {
			let img = document.querySelector('img');

			//show image
			img.style.display = 'block';

			//hide spinner
			spinner.style.display = 'none';

			//assign value to img alt attribute
			img.alt = img.localName;

			img.src = reader.result;

		}, 2000);

	}, false);

	if (inputFile) {
		reader.readAsDataURL(inputFile);
	}

	//enable slider and select elements when image is loaded
	disableSelectAndSlider(false);

	//hide element (label)
	toggleFile(className)

}

const sliderEffect = (event) => {
	let target = event.target;
	let img = document.querySelector('img');

	//remove class from img element
	img.classList.remove('img');

	if (target.tagName === 'INPUT') {

		const inputRange = document.querySelectorAll('input[type=range]');

		//loop through all inputs and listen for a click event
		inputRange.forEach((input) => {
				input.addEventListener('click', (event) => {
					let dataset = input.dataset.name;
					document.documentElement.style.setProperty(`--${input.id}`, `${input.value+dataset}`);
				})
			}

		)

	}
}

const blendModes = (event) => {
	let target = event.target;
	let img = document.querySelector('img');

	if (target.tagName === 'SELECT' && img.alt !== '') {
		document.documentElement.style.setProperty(`--${'blend'}`, `${target.value}`);
	}
}

const reset = (event) => {
	let target = event.target;

	//get elements from dom
	const forms = document.querySelectorAll('form');
	const inputRange = document.querySelectorAll('input[type=range]');
	let img = document.querySelector('img');


	//reset sliders and blend mode
	forms.forEach((form) => {
		form.reset();
	})

	document.documentElement.style.setProperty(`--${'blend'}`, `${forms[1].value}`);

	//add class to image element
	img.classList.add('img');

	//loop through input[type=range] and set css variables to default value
	inputRange.forEach((input) => {
		let dataset = input.dataset;

		document.documentElement.style.setProperty(`--${input.id}`, `${dataset.default+dataset.name}`);

	})

}
//call function
eventListener();
