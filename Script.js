// HEADER
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
	event.target.classList.add('active');
});

//HEADER SCROLL

document.addEventListener('scroll', event => {
	const cursorPos = window.scrollY;
	const divs = document.querySelectorAll('.scroll');
	const links = document.querySelectorAll('#menu a');

	divs.forEach(elem => {
		if (elem.offsetTop - 50 <= cursorPos) {
			links.forEach(a => {
				a.classList.remove('active');
				if (elem.getAttribute('id') === a.getAttribute('href').substring(1)) {
					a.classList.add('active');
				}
			});
		}
	});
});


//SCREEN OFF/ON
const layer_h = document.getElementById('layer-h')
const layer_v = document.getElementById('layer-v')
const square_h = document.getElementById('square-h')
const square_v = document.getElementById('square-v')
const circle_v = document.getElementById('circle-v')
const circle_h = document.getElementById('circle-h')

square_h.addEventListener('click', (event) => {
	if (layer_h.classList.contains('none')) {
		layer_h.classList.remove('none');
	}
	else {
		layer_h.classList.add('none');
	}
});

square_v.addEventListener('click', (event) => {
	if (layer_v.classList.contains('none')) {
		layer_v.classList.remove('none');
	}
	else {
		layer_v.classList.add('none');
	}
});

circle_v.addEventListener('click', (event) => {
	if (layer_v.classList.contains('none')) {
		layer_v.classList.remove('none');
	}
	else {
		layer_v.classList.add('none');
	}
});

circle_h.addEventListener('click', (event) => {
	if (layer_h.classList.contains('none')) {
		layer_h.classList.remove('none');
	}
	else {
		layer_h.classList.add('none');
	}
});

//PORTFOLIO BORDER
const portf = document.getElementById('gallery')

portf.addEventListener('click', (event) => {
	portf.querySelectorAll('img').forEach(element => {
		element.classList.remove('border');
		if (event.target === element) {
			event.target.classList.add('border');
		}
	})
});

//FORM
const BUTTON = document.getElementById('submit');
const closeFORM = document.getElementById('close-message');

BUTTON.addEventListener('click', (event) => {
	const SUBJ = document.getElementById('subject').value.toString();
	const DESCRIBE = document.getElementById('describe').value.toString();
	const NAME = document.getElementById('name').value.toString();
	const EMAIL = document.getElementById('email').value.toString();

	if (NAME !== '' && EMAIL.includes('@')) {
		if (SUBJ === '') {
			document.getElementById('result-subject').innerText = 'Without subject';
		}
		else document.getElementById('result-subject').innerText = 'Subject: ' + SUBJ;

		if (DESCRIBE === '') {
			document.getElementById('result-describe').innerText = 'Without description';
		}
		else document.getElementById('result-describe').innerText = 'Description: ' + DESCRIBE;

		document.getElementById('message-block').classList.remove('hidden');
		event.preventDefault();
	}
});

closeFORM.addEventListener('click', (event) => {
	document.getElementById('result-subject').innerText = '';
	document.getElementById('result-describe').innerText = '';

	document.getElementById('message-block').classList.add('hidden');
	document.querySelector('form').reset();
});

//SLIDER

let slider = document.querySelectorAll('.slider');
let currentSlider = 0;
let isEnabled = true;
const BACKGR = document.getElementById('slide-backColor');

function changeCurrentSlider(n) {
	currentSlider = (n + slider.length) % slider.length;
}

function hideSlider(direction) {
	isEnabled = false;
	slider[currentSlider].classList.add(direction);
	slider[currentSlider].addEventListener('animationend', function () {
		this.classList.remove('active-slider', direction);
	});
}

function showSlider(direction) {
	slider[currentSlider].classList.add('next', direction);
	slider[currentSlider].addEventListener('animationend', function () {
		this.classList.remove('next', direction);
		this.classList.add('active-slider');
		isEnabled = true;
	});
}

function previousSlider(n) {
	hideSlider('to-left');
	changeCurrentSlider(n - 1);
	showSlider('from-right');
}

function nextSlider(n) {
	hideSlider('to-right');
	changeCurrentSlider(n + 1);
	showSlider('from-left');
}

document.querySelector('.arrow.left').addEventListener('click', function () {
	if (isEnabled) {
		previousSlider(currentSlider);

		if (slider[currentSlider].classList.contains('slider-blue')) {
			BACKGR.style.backgroundColor = '#648bf0';
			BACKGR.style.borderBottomColor = '#395fc0';
		}
		else {
			BACKGR.style.backgroundColor = '#f06c64';
			BACKGR.style.borderBottomColor = '#ea676b';
		}
	}
});

document.querySelector('.arrow.right').addEventListener('click', function () {
	if (isEnabled) {
		nextSlider(currentSlider);
		if (slider[currentSlider].classList.contains('slider-blue')) {
			BACKGR.style.backgroundColor = '#648bf0';
			BACKGR.style.borderBottomColor = '#395fc0';
		}
		else {
			BACKGR.style.backgroundColor = '#f06c64';
			BACKGR.style.borderBottomColor = '#ea676b';
		}
	}
});