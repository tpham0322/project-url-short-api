# Shortly - URL Shortening API

A responsive URL shortening web application built as a solution to the [Frontend Mentor Shortly URL shortening API challenge](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

Users can enter a valid URL, shorten it using the Bitly API, copy the shortened URL, and access previously shortened links after refreshing the page.

## Features

- Responsive design for desktop and mobile devices
- Shorten valid URLs using the Bitly API
- Display shortened URLs dynamically
- Copy shortened URLs to the clipboard
- Save shortened links using browser `localStorage`
- Restore saved links after refreshing the page
- Form validation for empty and invalid URLs
- Mobile navigation menu
- Accessible form labels and ARIA attributes
- Loading state while shortening URLs
- Error handling for failed API requests

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Vite
- Bitly API
- Local Storage API

## Project Structure

```text
URL-SHORTENING-API/
├── design/
├── images/
├── public/
├── src/
│   ├── assets/
│   ├── main.js
│   └── style.css
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
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate into the project:

```bash
cd URL-SHORTENING-API
```

Install the dependencies:

```bash
npm install
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

The Bitly API requires an access token to authenticate requests.


## How It Works

1. The user enters a URL.
2. JavaScript validates the URL.
3. The application sends the URL to the Bitly API.
4. Bitly returns a shortened URL.
5. The shortened URL is displayed on the page.
6. The user can copy the shortened URL with the **Copy** button.
7. The link is stored in `localStorage`.
8. Saved links are restored when the page is refreshed.

## Local Storage

Shortened links are stored in the browser using `localStorage`.

Example stored data:

```json
[
  {
    "original": "https://example.com",
    "shortened": "https://bit.ly/example"
  }
]
```

This allows previously shortened links to remain visible after refreshing the page.

## Responsive Design

The application was designed to support:

- Mobile: 375px
- Desktop: 1440px

The layout is responsive and adapts to different screen sizes.

## Accessibility

Accessibility considerations include:

- Semantic HTML
- Form labels
- ARIA attributes
- `aria-expanded` for the mobile navigation
- `aria-controls` for navigation relationships
- `aria-invalid` for form errors
- `aria-live` for dynamically generated results
- Keyboard-accessible buttons and links

## What I Learned

Through this project, I practiced:

- Working with REST APIs
- Using asynchronous JavaScript with `async`/`await`
- Handling API responses and errors
- DOM manipulation
- Browser `localStorage`
- Clipboard API
- Responsive design with Tailwind CSS
- Form validation
- Accessibility with ARIA attributes
- Building and running a project with Vite

## Credits

This project was created as a solution to the **Frontend Mentor Shortly URL shortening API challenge**.

Challenge provided by [Frontend Mentor](https://www.frontendmentor.io/).

## Author

**Truong Pham**
