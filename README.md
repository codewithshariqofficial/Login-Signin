# Login & Signup UI

Premium authentication interface built with pure HTML, CSS, and JavaScript.

## Features

- Glassmorphism card design with animated gradient background
- Light / dark theme toggle (saved in `localStorage`)
- Smooth transition between Login and Signup forms
- Client-side validation (email format, required fields, password length, confirm match)
- Real-time error clearing while typing
- Show / hide password toggle
- One-click demo autofill (`demo@example.com` / `demo1234`)
- Inline success / error messages
- Responsive layout

## Project Structure

```
index.html   # Markup for both forms
style.css    # Styling, themes, animations, responsive rules
script.js    # Theme, validation, form switching, autofill, password toggle
```

## Getting Started

No build step required.

1. Clone the repo:
   ```bash
   git clone https://github.com/codewithshariqofficial/Login-Signin.git
   ```
2. Open `index.html` in any browser, or serve locally:
   ```bash
   npx serve .
   ```

## Demo Credentials

- Email: `demo@example.com`
- Password: `demo1234`

Click **Auto Fill** to populate them instantly.

## Customization

- Colors/themes: edit CSS variables in `:root` and `[data-theme="dark"]` in `style.css`
- Credentials: update `VALID_EMAIL` and `VALID_PASSWORD` in `script.js`
- Validation rules: adjust the submit handlers in `script.js`
- Post-login redirect: uncomment the `window.location.href` line in `script.js`

## Tech Stack

HTML5, CSS3 (custom properties, glassmorphism, keyframes, media queries), Vanilla JavaScript (ES6+).

## License

MIT