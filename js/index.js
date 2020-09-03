// Selectors //
const header = document.querySelector('.main-navigation');
const logo = header.children[0].children[0];
const nav = header.children[0].children[1];

// Content //
const home = document.querySelector('.home');
const intro = home.children[0];
const introhead = intro.children[1];
const introtext = intro.children[2];
const introimg = intro.children[0];
const content = home.children[1];
const contenttext = content.children[0];
const contenttexthead = contenttext.children[0];
const contenttextp1 = contenttext.children[1];
const contenttextp2 = contenttext.children[2];
const contentimg = content.children[1].children[0];
const inversecontent = home.children[2];
const inversecontenthead = inversecontent.children[1].children[0];
const inversecontentp1 = inversecontent.children[1].children[1];
const inversecontentp2 = inversecontent.children[1].children[2];
const inversecontentimg = inversecontent.children[0].children[0];
const destination = home.children[3];
const destinationimg = destination.children[2];
const pick = home.children[4];

// Footer //
const footer = document.querySelector('footer');
const copy = footer.children[0];

nav.addEventListener('click', (event) => {
	event.target.preventDefault();
});

introimg.addEventListener('click', (event) => {
	if (event.target.style.filter != 'blur(5px)') {
		event.target.style.filter = 'blur(5px)';
	}
	else {
		event.target.style.filter = 'none';
	}
});

contentimg.addEventListener('mouseover', (event) => {
	event.target.style.opacity = '0.5';
});

contentimg.addEventListener('mouseout', (event) => {
	event.target.style.opacity = '1';
});

inversecontentimg.addEventListener('dblclick', (event) => {
	if (event.target.style.opacity != '0.5') {
		event.target.style.opacity = '0.5';
	}
	else {
		event.target.style.opacity = '1';
	}
});

destinationimg.addEventListener('mousedown', (event) => {
	event.target.style.transform = 'rotate(180deg)';
});

destinationimg.addEventListener('mouseup', (event) => {
	event.target.style.transform = 'rotate(0deg)';
});

introhead.addEventListener('auxclick', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
		event.target.style.textAlign = 'center';
		event.target.style.width = '500px';
		event.target.style.margin = '0 auto';
	}
	else {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
		event.target.style.textAlign = '';
		event.target.style.width = '';
		event.target.style.margin = '';
	}
});

introtext.addEventListener('contextmenu', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
	}
	else {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
	}
});

contenttexthead.addEventListener('mouseenter', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
		event.target.style.textAlign = 'center';
	}
});

contenttexthead.addEventListener('mouseleave', (event) => {
	event.target.style.backgroundColor = 'white';
	event.target.style.borderRadius = '';
	event.target.style.textAlign = '';
	event.target.style.width = '';
	event.target.style.margin = '';
});

contenttextp1.addEventListener('wheel', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
	}
	else {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
	}
});

contenttextp2.addEventListener('drag', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
	}
	else {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
	}

});

contenttextp2.addEventListener('pointerover', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
	}
});

contenttextp2.addEventListener('pointerleave', (event) => {
	if (event.target.style.backgroundColor != 'white') {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
	}
});

inversecontenthead.addEventListener('pointerenter', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
	}
});

inversecontenthead.addEventListener('pointerout', (event) => {
	if (event.target.style.backgroundColor != 'white') {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
	}
});

inversecontentp1.addEventListener('pointerdown', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
	}
});

inversecontentp1.addEventListener('pointerup', (event) => {
	if (event.target.style.backgroundColor != 'white') {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
	}
});

inversecontentp2.addEventListener('click', (event) => {
	if (event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = '#17A2B8';
		event.target.style.borderRadius = '15px';
	}
	else {
		event.target.style.backgroundColor = 'white';
		event.target.style.borderRadius = '';
	}
});