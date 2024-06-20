document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPass = document.getElementById('toggleConfirmPassword')
    const password = document.getElementById('password');
    const re_password = document.getElementById('confirmPassword');
    const username = document.getElementById('username');
    const email = document.getElementById('email');

    togglePassword.addEventListener('click', () => {
        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;
        togglePassword.classList.toggle('ri-eye-line');
        togglePassword.classList.toggle('ri-eye-off-line');
    });

    toggleConfirmPass.addEventListener('click', () => {
        const type = confirmPassword.type === 'password' ? 'text' : 'password';
        confirmPassword.type = type;
        toggleConfirmPass.classList.toggle('ri-eye-line');
        toggleConfirmPass.classList.toggle('ri-eye-off-line');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert(`Registration successful!\n\nUsername: ${username.value}\nEmail: ${email.value}`);
        }
    });

    function validateForm() {
        let isValid = true;

        if (username.value.trim() === '') {
            setError(username, 'Username is required');
            isValid = false;
        } else {
            clearError(username);
        }

        if (email.value.trim() === '') {
            setError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            setError(email, 'Enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }

        if (password.value.trim() === '') {
            setError(password, 'Password is required');
            isValid = false;
        } else if (password.value.length < 6) {
            setError(password, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            clearError(password);
        }

        if(re_password.value.trim()===''){
            setError(re_password, 'Please confirm your password');
            isValid = false;
        }else if(re_password === password){
            setError(re_password, 'Passwords do not match');
            isValid = false;
        }
        else{
            clearError(re_password);
        }

        return isValid;
    }

    function setError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorDisplay = formGroup.querySelector('.error-message');
        if (errorDisplay) {
            errorDisplay.textContent = message;
            errorDisplay.style.display = 'block';
        }
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorDisplay = formGroup.querySelector('.error-message');
        if (errorDisplay) {
            errorDisplay.textContent = '';
            errorDisplay.style.display = 'none';
        }
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});