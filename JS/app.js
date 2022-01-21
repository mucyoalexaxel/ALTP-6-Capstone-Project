// Header
// HAMBURGER MENU & Navigation Links

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
}
function close(){
    mainMenu.style.right = '-100%';
}


// Contact & Hire Me Page Validation 

const form1 = document.getElementById('form1');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form1.addEventListener('submit', e => {
	e.preventDefault();
	checkInput()
	setTimeout(displayMessage, 1000);
});

function checkInput() {
	// trim to remove the whitespaces
	const nameVal = name.value.trim();
	const emailVal = email.value.trim();
	const messageVal = message.value.trim();
	
	if(nameVal === '') {
		setErrorFor(name, 'Username cannot be blank');
	} else {
		setSuccessFor(name);
	}
	
	if(emailVal === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailVal)) {
		setErrorFor(email, 'Please Provide A Valid Email');
	} else {
		setSuccessFor(email);
	}
	
	if(messageVal === '') {
		setErrorFor(message, 'Please Provide A Feedback');
	} else {
		setSuccessFor(message);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const displayMessage = () =>{
	alert("Your Message Has Been Submitted Succefully")
}