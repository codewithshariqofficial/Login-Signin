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

    // --- Hardcoded credentials (yahan apne email/password daalo) ---
    const VALID_EMAIL = 'demo@example.com';
    const VALID_PASSWORD = 'demo1234';

    // --- Safe Storage (localStorage fail hone par crash na ho) ---
    const safeGet = (key) => {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    };
    const safeSet = (key, value) => {
        try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
    };

    // --- Theme Management ---
    const savedTheme = safeGet('theme') || 'light';
    setTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        safeSet('theme', theme);
        
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

    // --- Auto Fill Demo Credentials ---
    document.getElementById('btn-autofill').addEventListener('click', () => {
        document.getElementById('login-email').value = VALID_EMAIL;
        document.getElementById('login-password').value = VALID_PASSWORD;
        hideError(document.getElementById('login-email'));
        hideError(document.getElementById('login-password'));
    });

    // --- Password Show/Hide Toggle ---
    document.querySelectorAll('.toggle-password').forEach((btn) => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('input');
            const icon = btn.querySelector('i');
            const isHidden = input.type === 'password';
            input.type = isHidden ? 'text' : 'password';
            icon.classList.toggle('fa-eye', !isHidden);
            icon.classList.toggle('fa-eye-slash', isHidden);
            btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
        });
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

    const showMessage = (id, text, type) => {
        const msg = document.getElementById(id);
        msg.textContent = text;
        msg.className = 'form-message ' + type;
        setTimeout(() => {
            msg.className = 'form-message';
            msg.textContent = '';
        }, 4000);
    };

    // Login Validation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const loginMsg = document.getElementById('login-message');
        loginMsg.className = 'form-message';

        const email = document.getElementById('login-email');
        const pass = document.getElementById('login-password');

        if (!validateEmail(email.value.trim())) {
            showError(email);
            isValid = false;
        } else {
            hideError(email);
        }

        if (pass.value.trim().length < 1) {
            showError(pass);
            isValid = false;
        } else {
            hideError(pass);
        }

        if (isValid) {
            const emailOk = email.value.trim().toLowerCase() === VALID_EMAIL;
            const passOk = pass.value.trim() === VALID_PASSWORD;

            if (emailOk && passOk) {
                console.log('Login successful');
                showMessage('login-message', 'Login Successful! Welcome back.', 'success');
                // Redirect yahan karo, e.g. window.location.href = 'dashboard.html';
            } else {
                showMessage('login-message', 'Invalid email or password', 'error');
                showError(email);
                showError(pass);
            }
        }
    });

    // Signup Validation
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const signupMsg = document.getElementById('signup-message');
        signupMsg.className = 'form-message';

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
            showMessage('signup-message', 'Account Created Successfully!', 'success');
            // Redirect yahan karo, e.g. window.location.href = 'dashboard.html';
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
