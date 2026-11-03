# Premium Authentication UI

A modern, responsive **Login & Signup** authentication interface built with pure **HTML, CSS, and JavaScript**. Features a glassmorphism design, animated background, light/dark theme toggle, client-side form validation, and a demo autofill button.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

- **Glassmorphism UI** — Frosted-glass cards with blurred background shapes for a premium look.
- **Light / Dark Theme Toggle** — Switch themes with one click; preference is saved in `localStorage`.
- **Animated Background** — Two blurred gradient shapes that slowly float across the screen.
- **Login & Signup Forms** — Smooth 3D flip-style transition between the two forms.
- **Client-Side Validation**
  - Email format validation (regex)
  - Required field checks
  - Password minimum length (8 characters) on signup
  - Confirm-password match check
  - Real-time error clearing as the user types
- **Demo Autofill** — One-click button fills in the demo credentials (`demo@example.com` / `demo1234`).
- **Inline Feedback Messages** — Success / error banners that auto-dismiss after 4 seconds.
- **Responsive Design** — Adapts gracefully to mobile screens (≤ 480px).
- **No Dependencies** — Only Font Awesome (via CDN) for icons; no build tools required.

---

## 📂 Project Structure

```
Login-&-Signup-UI/
├── index.html      # Main HTML markup (login + signup forms)
├── style.css       # Styling, themes, animations, responsive rules
├── script.js       # Theme, validation, form switching, autofill logic
└── README.md       # Project documentation
```

---

## 🚀 Getting Started

No installation or build step is required.

1. **Clone the repository**
   ```bash
   git clone git@github.com:shariqshahidofficial-coder/Login---Signup-UI.git
   ```
2. **Open the app**
   - Simply open `index.html` in any modern browser, or
   - Serve it locally with a static server, e.g.
     ```bash
     npx serve .
     ```

---

## 🔑 Demo Credentials

Use these to test the login flow:

| Field    | Value              |
|----------|--------------------|
| Email    | `demo@example.com` |
| Password | `demo1234`         |

> 💡 Tip: Click the **"Auto Fill"** button on the login form to populate these automatically.

---

## 🎨 Customization

- **Colors / Theme:** Edit the CSS variables in `:root` and `[data-theme="dark"]` inside `style.css`.
- **Credentials:** Update `VALID_EMAIL` and `VALID_PASSWORD` in `script.js`.
- **Validation rules:** Adjust the checks inside the submit handlers in `script.js`.
- **Redirect after success:** Uncomment / modify the `window.location.href` lines in `script.js`.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, glassmorphism, keyframe animations, media queries
- **Vanilla JavaScript (ES6+)** — DOM manipulation, validation, `localStorage`

---

## 📱 Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). `backdrop-filter` is used for the glass effect; older browsers will gracefully fall back to a solid background.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Author

**Shariq Shahid** — [@shariqshahidofficial-coder](https://github.com/shariqshahidofficial-coder)

If you found this useful, please ⭐ star the repo!