

const eventListener = () => {
	const header = document.querySelector('#header');
	const file = document.querySelector('input[type=file]');

	//event listeners
	header.addEventListener('click', toggleFile);
	file.addEventListener('change', loadImage);
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
	let img = document.querySelector('.img');
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

//call function
eventListener();