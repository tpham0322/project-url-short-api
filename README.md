# Shortly - URL Shortening API

A responsive URL shortening web application built with React as a solution to the [Frontend Mentor Shortly URL shortening API challenge](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Live Demo

**Live Website:**  
https://tpham0322.github.io/project-url-short-api/

Users can enter a valid URL, shorten it using the Bitly API, copy the shortened URL, and access previously shortened links after refreshing the page.

<img width="1919" height="976" alt="Shortly URL Shortener" src="https://github.com/user-attachments/assets/4019f75c-de50-421a-a1d1-212f56f058e0" />

## Features

- Responsive design for desktop and mobile devices
- Built with React
- Shorten valid URLs using the Bitly API
- Display shortened URLs dynamically
- Copy shortened URLs to the clipboard
- Save shortened links using browser `localStorage`
- Restore saved links after refreshing the page
- Delete saved shortened links
- Form validation for empty and invalid URLs
- Mobile navigation menu
- Accessible form labels and ARIA attributes
- Loading state while shortening URLs
- Error handling for failed API requests

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- React DOM
- Tailwind CSS v4
- Vite
- Bitly API
- Local Storage API
- Clipboard API
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Project Structure

```text
project-url-short-api/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── design/
├── public/
│   └── images/
│       ├── bg-boost-desktop.svg
│       ├── bg-boost-mobile.svg
│       ├── bg-shorten-desktop.svg
│       ├── bg-shorten-mobile.svg
│       ├── favicon-32x32.png
│       ├── icon-brand-recognition.svg
│       ├── icon-detailed-records.svg
│       ├── icon-facebook.svg
│       ├── icon-fully-customizable.svg
│       ├── icon-instagram.svg
│       ├── icon-pinterest.svg
│       ├── icon-twitter.svg
│       └── illustration-working.svg
├── src/
│   ├── components/
│   │   ├── Boost.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ResultCard.jsx
│   │   ├── Shortener.jsx
│   │   └── Statistics.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── services/
│   │   └── bitlyApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/tpham0322/project-url-short-api.git
```

Navigate into the project:

```bash
cd project-url-short-api
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

The application uses a Bitly API access token.

Create a `.env` file in the project root:

```env
VITE_BITLY_TOKEN=YOUR_BITLY_TOKEN
```

Do not commit your `.env` file to GitHub.

The `.gitignore` file includes:

```text
node_modules/
dist/
.env
.env.local
```

### Run the Development Server

Start Vite:

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser.

## Bitly API

This project uses the Bitly API to create shortened URLs.

When a user submits a URL, the React application sends the URL directly to the Bitly API and receives a shortened Bitly link.

The API integration is located in:

```text
src/services/bitlyApi.js
```

The application uses the Bitly `/v4/shorten` endpoint.

### API Authentication

The Bitly API requires an access token.

The token is provided through the Vite environment variable:

```env
VITE_BITLY_TOKEN=YOUR_BITLY_TOKEN
```

### Security Note

Because this project is a frontend application deployed to GitHub Pages, Vite environment variables beginning with `VITE_` are included in the production JavaScript bundle.

For this educational project, a dedicated Bitly token can be used for the demonstration.

For a production application, the Bitly API request should be moved to a backend or serverless function so the API token remains private.

## Deployment

This project is deployed using **GitHub Pages**.

GitHub Actions automatically builds and deploys the React application whenever changes are pushed to the `reactUpdate` branch.

### GitHub Pages Configuration

The Vite configuration uses the repository name as the base path:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/project-url-short-api/",
  plugins: [
    react(),
    tailwindcss()
  ]
});
```

The deployment workflow is located at:

```text
.github/workflows/deploy.yml
```

The workflow:

1. Checks out the `reactUpdate` branch
2. Sets up Node.js
3. Installs dependencies
4. Provides the Bitly token through a GitHub Actions secret
5. Builds the React application
6. Configures GitHub Pages
7. Uploads the production build
8. Deploys the application to GitHub Pages

The live site is available at:

https://tpham0322.github.io/project-url-short-api/

## How It Works

1. The user enters a URL.
2. React validates the URL.
3. The application sends the URL directly to the Bitly API.
4. Bitly returns a shortened URL.
5. The shortened URL is displayed on the page.
6. The user can copy the shortened URL using the **Copy** button.
7. The shortened link is saved to `localStorage`.
8. Saved links are restored when the page is refreshed.
9. Users can delete saved shortened links.

## React Architecture

The application is divided into reusable React components.

### Components

- `Header.jsx` - Navigation and mobile menu
- `Hero.jsx` - Main hero section
- `Shortener.jsx` - URL input, validation, and API interaction
- `ResultCard.jsx` - Displays shortened URLs and copy functionality
- `Statistics.jsx` - Statistics section
- `Boost.jsx` - Call-to-action section
- `Footer.jsx` - Footer content

### Custom Hook

The application uses a custom `useLocalStorage` hook:

```text
src/hooks/useLocalStorage.js
```

This hook handles reading and writing shortened links to browser `localStorage`.

### API Service

Bitly API communication is separated into:

```text
src/services/bitlyApi.js
```

This keeps API-related logic separate from the React components.

## Local Storage

Shortened links are stored in the browser using `localStorage`.

The application uses the following storage key:

```text
shortly-links
```

Example stored data:

```json
[
  {
    "id": "example-id",
    "original": "https://example.com",
    "short": "https://bit.ly/example"
  }
]
```

This allows previously shortened links to remain visible after refreshing the page.

## Responsive Design

The application was designed to support:

- Mobile: 375px
- Desktop: 1440px

Tailwind CSS responsive utilities are used to adapt the layout to different screen sizes.

The application includes:

- Responsive navigation
- Mobile navigation menu
- Responsive URL shortening form
- Responsive result cards
- Responsive statistics cards
- Mobile and desktop background images

## Accessibility

Accessibility considerations include:

- Semantic HTML
- Form labels
- Screen-reader-only labels
- ARIA attributes
- `aria-expanded` for the mobile navigation
- `aria-controls` for navigation relationships
- `aria-invalid` for form validation errors
- Keyboard-accessible buttons and links
- Accessible button labels

## What I Learned

Through this project, I practiced:

- Building applications with React
- Creating reusable React components
- Managing state with `useState`
- Creating custom React hooks
- Working with REST APIs
- Using asynchronous JavaScript with `async`/`await`
- Handling API responses and errors
- Form validation
- Browser `localStorage`
- Clipboard API
- Responsive design with Tailwind CSS
- Accessibility with ARIA attributes
- Building and running projects with Vite
- Using environment variables with Vite
- Git and GitHub version control
- GitHub Actions
- Deploying a Vite React application with GitHub Pages
- Debugging production deployments
- Using React Developer Tools

## Credits

This project was created as a solution to the **Frontend Mentor Shortly URL shortening API challenge**.

Challenge provided by [Frontend Mentor](https://www.frontendmentor.io/).

## Author

**Truong Pham**

GitHub: https://github.com/tpham0322