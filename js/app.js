const eventListener = () => {
	
	//get element from dom
	const header = document.querySelector('#header');
	const file = document.querySelector('input[type=file]');
	const effect = document.querySelector('.effect');
	const resetButton = document.querySelector('#reset');

	//event listeners
	header.addEventListener('click', toggleFile);
	file.addEventListener('change', loadImage);
	effect.addEventListener('change', sliderEffect);
	effect.addEventListener('change', blendModes);
	resetButton.addEventListener('click', reset);
}

const toggleFile = (event) => {
	let target = event.target;

	if (target.classList.contains('file')) {
		let firstElemChild = target.firstElementChild;

		//show and hide targeted element
		firstElemChild.classList.toggle('file-upload');
	}
}

const loadImage = () => {

	//get elements from dom
	const interface = document.querySelector('.user-interface')
	let img = document.querySelector('img');
	let inputFile = document.querySelector('input[type=file]').files[0];
	let appName = document.querySelector('.app-name');

	var reader = new FileReader();

	//add eventlistener
	reader.addEventListener('load', () => {
		img.src = reader.result;
	}, false);

	if (inputFile) {
		reader.readAsDataURL(inputFile);
	}

	//hide selected element
	appName.style.display = "none";

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

	if (target.tagName === 'SELECT') {
		document.documentElement.style.setProperty(`--${'blend'}`, `${target.value}`)
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