# Sunny's Ordeal 🌍

A travel discovery website where visitors can browse destinations by continent, search and favourite countries, and create an account.

## Features

- **Landing page** with a hero section and five region cards (Asia, Europe, Caribbean, Oceania, Africa)
- **Continent sections** with expandable country details via `<details>`/`<summary>`
- **Live search** that filters country cards by name as you type
- **Favourites** — click the heart icon on any country card to toggle it (session-only, resets on page refresh)
- **Register** and **Login** pages with client-side form validation (required fields, password-match check)
- Fully responsive layout, with breakpoints at 1000px, 700px, and 450px

## Tech stack

Plain HTML, CSS, and JavaScript — no frameworks, build step, or dependencies.

## File structure

```
├── index.html      Homepage: hero, destination cards, continent sections
├── register.html   Account registration form
├── login.html      Login form
├── style1.css      Styles for index.html
├── style.css       Styles for register.html and login.html
├── script.js       Form validation, search/filter, and favourites logic
└── images/         Referenced by index.html but not included in this upload — see below
```

## Setup

This is a static site — no installation required.

1. Clone the repo
2. Add an `images/` folder with the destination photos `index.html` expects (see "Known issues" below)
3. Open `index.html` directly in a browser, or serve the folder with any static server (e.g. VS Code's Live Server extension)

## Known issues / to-do
- Registration and login forms only validate and show an `alert()` — there's no backend, so nothing is actually saved or authenticated yet

## License

No license specified yet — add one (e.g. MIT) if you plan to share this publicly.
