
//call function
eventListener();

function eventListener() {
	
	const header = document.querySelector('#header');
	header.addEventListener('click', toggleFile);
	
}

function toggleFile(event) {
	
	let target = event.target;
	
	if (target.classList.contains('file')) {
		let firstElemChild = target.firstElementChild;
		
		//show and hide targeted element
		firstElemChild.classList.toggle('file-upload');
	}
	
}