const eventListener = () => {
	const header = document.querySelector('#header');
	const file = document.querySelector('input[type=file]');
	const effect = document.querySelector('.effect');

	//event listeners
	header.addEventListener('click', toggleFile);
	file.addEventListener('change', loadImage);
	effect.addEventListener('change', sliderEffect);
	effect.addEventListener('change', blendModes);

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
	
	if (target.tagName === 'INPUT') {
		const inputRange = document.querySelectorAll('input[type=range]');

		//loop through all inputs and listen for a click event
		inputRange.forEach((input) => {
			input.addEventListener('click', (event) => {
				
				let dataset = target.dataset.name;
				document.documentElement.style.setProperty(`--${target.id}`, `${target.value+dataset}`);

			});
		})

	}
}

const blendModes = (event) => {
	let target = event.target;
	let img = document.querySelector('img');

	if (target.tagName === 'SELECT') {
		document.documentElement.style.setProperty(`--${'blend'}`, `${target.value}`)
	}
}


//call function
eventListener();
