const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');
const LogInformation = document.getElementById('succes_log');


loginBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;
	// Simple validation, replace with your own authentication logic
	if (username === 'admin' && password === '12345') {
		alert('Login successful!');
		LogInformation.innerHTML="ADMIN Log In Succefully"

	} else {
		errorMessage.innerText = 'Invalid username or password';
	}
});