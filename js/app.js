//call function
eventListener();

function eventListener() {
	const header = document.querySelector('#header');
	const file = document.querySelector('input[type=file]');

	//event listeners
	header.addEventListener('click', toggleFile);
	file.addEventListener('change', loadImage);
}

function toggleFile(event) {
	let target = event.target;

	if (target.classList.contains('file')) {
		let firstElemChild = target.firstElementChild;
		
		//show and hide targeted element
		firstElemChild.classList.toggle('file-upload');
	}
}

function loadImage() {

	//get elements from dom
	const interface = document.querySelector('.user-interface')
	let img = document.querySelector('.img');
	let inputFile = document.querySelector('input[type=file]').files[0];
	let appName = document.querySelector('.app-name');

	var reader = new FileReader();

	//add eventlistener
	reader.addEventListener('load', function () {
		img.src = reader.result;
	}, false);

	if (inputFile) {
		reader.readAsDataURL(inputFile);
	}
	
	//hide selected element
	appName.style.display = "none";

}