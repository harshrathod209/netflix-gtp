# 🎬 Netflix GPT

A Netflix-style movie browsing app powered by **React**, styled with **Tailwind CSS**, integrated with **Firebase Authentication**, **TMDB movie data**, and **OpenAI GPT-4.o** for enriched, intelligent movie discovery.

Deployed live: _(insert your live URL here)_

---

## ✅ Features

### 1. Authentication & User Management

- **Firebase Authentication** with Email/Password:
  - Sign Up, Sign In, and Sign Out flows.
  - Profile update support (display name, avatar).
  - Form validation using `useRef` and custom validation utilities.
  - Subscriptions cleaned up using `onAuthStateChanged` listener unsubscribe logic.

### 2. Routing & Access Control

- Built with **React Router**:
  - Public and protected routes (redirects in place for `/browse` and `/login`).

### 3. State Management

- **Redux Toolkit** setup with:
  - `userSlice` to store and manage authenticated user data.
  - `movieSlice` and `gptSlice` to manage TMDB and GPT responses respectively.

### 4. Movie Browsing Experience

- Fetches movies from **TMDB** using:
  - Now Playing and Popular endpoints.
  - Custom hooks like `useNowPlayingMovies` and `usePopularMovies`.
- Displays a **Hero Section**:
  - Autoplay, muted YouTube trailer embedded in the background.
- Secondary movie lists shown as cards styled with Tailwind CSS.

### 5. GPT-Powered Movie Search & Suggestions

- GPT Search Bar processes user input.
- Fetches movie suggestions via GPT-3.5 Turbo.
- Matches GPT responses with details from **TMDB API**.
- Rendered dynamically using shared MovieList/MovieCard components.

### 6. Performance, Localization & Build

- **Memoization** techniques applied to optimize renders.
- Site is fully **responsive** and **desktop-first**.
- Multi-language support implemented.
- Deployed via **Firebase Hosting**.

---

## 📁 Project Structure (Simplified)

```
netflix-gtp/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/
│   │   ├── browse/
│   │   │    └── mainContainer
│   │   │    │      └── MainContainer.js
│   │   │    │      └── VideoTitle.js
│   │   │    │      └── VideoBackground.js
│   │   │    └── gptSearch
│   │   │    │      └── gptMovieSuggestion.js
│   │   │    │      └── gptSearch.js
│   │   │    │      └── gptSearchBar.js
│   │   │    └── Browse.js
│   │   │    └── SecondaryContainer.js
│   │   ├── common/
│   │   │    └──  MovieCard.js
│   │   │    └──  MovieList.js
│   │   ├── layout/
│   │        └──  Login.js
│   │        └──  Header.js
│   │        └──  Body.js
│   │
│   ├── hooks/
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   └── useGptMovieSearch.js
│   │
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Browse.js
│   │   └── GptSearch.js
│   │
│   ├── utils/
│   │   ├── assets/
│   │   │     └──  svg/
│   │   │     │     └──  (different svg, etc)
│   │   ├── constants/
│   │   │     └──  constants.js
│   │   │     └──  languageConstants.js
│   │   ├── config/
│   │   │     └──  firebase.js
│   │   │     └──  openai.js
│   │   ├── store/
│   │   │     └──  slices/
│   │   │     │       └── configSlice.js
│   │   │     │       └── userSlice.js
│   │   │     │       └── gptSlice.js
│   │   │     │       └── movieSlice.js
│   │   │     └──  appStore.js
│   │   ├── constants.js
│   │   └── validate.js
│   │
│   ├── App.js
│   ├── index.js
│   └── app.css
│
├── .env
├── .gitignore
├── firebase.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md

```

---

## 🛠️ Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/harshrathod209/netflix-gtp.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` at project root** with the following variables:

   ```bash
   REACT_APP_OPEN_AI_KEY=...
   REACT_APP_TMDB_KEY=...
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Build & deploy**
   Uses `firebase.json` for Firebase Hosting setup. Run:
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🧩 Tech Stack

- **React** (Create React App)
- **Tailwind CSS**
- **Firebase Auth + Hosting**
- **Redux Toolkit**
- **React Router**
- **TMDB API** for movie data
- **OpenAI GPT-4.o** for smart suggestions
- **YouTube embed** for trailers
- **JavaScript (ES6+), Responsive Design**

---

## 🔧 Next Steps (Suggestions)

- Add **pagination/infinite scroll** for lists
- Support **watchlist or favorites** feature
- Add **loading states & error handling** enhancements
- Implement deeper **GPT prompt optimization** for richer suggestions
- Expand **i18n multilingual support**

---
