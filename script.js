document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeBtn = document.getElementById('theme-btn');
    const htmlElement = document.documentElement;
    const themeIcon = themeBtn.querySelector('i');

    const loginBox = document.getElementById('login-box');
    const signupBox = document.getElementById('signup-box');
    const toSignup = document.getElementById('to-signup');
    const toLogin = document.getElementById('to-login');

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // --- Theme Management ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // --- Form Switching ---
    toSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.classList.remove('active');
        signupBox.classList.add('active');
    });

    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupBox.classList.remove('active');
        loginBox.classList.add('active');
    });

    // --- Validation Logic ---
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const showError = (input, message) => {
        const group = input.parentElement;
        const errorMsg = group.querySelector('.error-msg');
        group.classList.add('error');
        if (message) errorMsg.textContent = message;
        errorMsg.style.display = 'block';
        input.style.borderColor = '#ef4444';
    };

    const hideError = (input) => {
        const group = input.parentElement;
        const errorMsg = group.querySelector('.error-msg');
        group.classList.remove('error');
        errorMsg.style.display = 'none';
        input.style.borderColor = 'var(--glass-border)';
    };

    // Login Validation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const email = document.getElementById('login-email');
        const pass = document.getElementById('login-password');

        if (!validateEmail(email.value)) {
            showError(email);
            isValid = false;
        } else {
            hideError(email);
        }

        if (pass.value.length < 1) {
            showError(pass);
            isValid = false;
        } else {
            hideError(pass);
        }

        if (isValid) {
            console.log('Login successful');
            // Add success animation/redirect here
            alert('Login Successful!');
        }
    });

    // Signup Validation
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('signup-name');
        const email = document.getElementById('signup-email');
        const pass = document.getElementById('signup-password');
        const confirmPass = document.getElementById('signup-confirm-password');

        if (name.value.trim().length < 2) {
            showError(name);
            isValid = false;
        } else {
            hideError(name);
        }

        if (!validateEmail(email.value)) {
            showError(email);
            isValid = false;
        } else {
            hideError(email);
        }

        if (pass.value.length < 8) {
            showError(pass);
            isValid = false;
        } else {
            hideError(pass);
        }

        if (confirmPass.value !== pass.value || confirmPass.value === '') {
            showError(confirmPass);
            isValid = false;
        } else {
            hideError(confirmPass);
        }

        if (isValid) {
            console.log('Signup successful');
            alert('Account Created Successfully!');
        }
    });

    // Real-time validation cleanup
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error')) {
                hideError(input);
            }
        });
    });
});
