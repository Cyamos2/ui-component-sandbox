# UI Component Sandbox
Accessible, mobile-first HTML/CSS/JS components you can review quickly: **form validation**, **modal dialog**, **card grid**, **accordion**, **image gallery**, and a **dark-mode toggle**. No build step required.

> **Timeline:** Work performed across **May 2022 – Apr 2024** while maintaining my portfolio and prototyping UI pieces; **consolidated publicly in Aug 2025** for easier review.

---

## 🎯 Why this exists
This repo consolidates small UI experiments I built while maintaining my portfolio and exploring good front-end practices (responsive layout, accessibility, progressive enhancement). It provides concrete artifacts for recruiters and collaborators to review in minutes.

- **Focus areas:** semantics, keyboard support, a11y, clean CSS layout (flex/grid), and uncomplicated JavaScript.
- **Job relevance:** mirrors full-stack roles that value **solid front-end fundamentals** and **accessible UX** before adding frameworks.

---

## 🔗 Live Demo
- (Add after enabling GitHub Pages)  
  `https://<your-username>.github.io/ui-component-sandbox/`

---

## 🧩 Components
- **Accessible Form** — Labels, help/error messages with `aria-describedby`, simple client-side validation, `aria-live` feedback.
- **Modal Dialog** — `role="dialog"`, `aria-modal`, ESC-to-close, returns focus to opener.
- **Card Grid** — CSS Grid with responsive columns.
- **Accordion** — Native `<details>/<summary>` for built-in accessibility.
- **Image Gallery** — Keyboard-friendly prev/next controls; progressive enhancement over basic markup.
- **Dark Mode Toggle** — Persists user preference via `localStorage`.

---

## ♿ Accessibility (a11y) checklist
- Semantic HTML for inputs, buttons, and navigation
- Proper relationships: `for`/`id`, `aria-describedby`, `aria-modal` where appropriate
- Visible focus styles and **skip link** to jump to main content
- Keyboard support: tab navigation, ESC-to-close modal, focus return
- Color contrast targets for both light and dark themes
- Quick audits with **Lighthouse** (Chrome DevTools → Lighthouse → Accessibility)

---

## 🛠 Tech stack
- **HTML5**, **CSS3** (flexbox, grid, custom properties), **Vanilla JS**
- No framework, no bundler — everything runs from `index.html`
- Optional dev convenience: VS Code **Live Server** extension

---

## 🚀 Getting started
1. Clone or download this repo.
2. Open `index.html` directly in a browser **or** use VS Code → **Live Server** (right-click `index.html` → *Open with Live Server*).
3. Explore components via the header links (Form, Modal, Cards, Accordion, Gallery).

---

## 📁 Structure