import "./style.css";

// ================================
// DOM Elements
// ================================

const form = document.querySelector("#shortener-form");
const input = document.querySelector("#url-input");
const errorMessage = document.querySelector("#url-error");
const resultsContainer = document.querySelector("#results");

// Your HTML doesn't have an ID on the menu button.
// We find it using aria-controls instead.
const menuButton = document.querySelector(
  'button[aria-controls="nav-menu"]'
);

const navMenu = document.querySelector("#nav-menu");

// ================================
// Constants
// ================================

const STORAGE_KEY = "shortly-links";

// ================================
// Mobile Navigation
// ================================

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    navMenu.classList.toggle("hidden", isOpen);
  });

  // Close menu when clicking a navigation link
  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navMenu.classList.add("hidden");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    });
  });
}

// ================================
// Form Submission
// ================================

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const url = input.value.trim();

    clearError();

    // ----------------------------
    // Empty input
    // ----------------------------

    if (!url) {
      showError("Please add a link");
      return;
    }

    // ----------------------------
    // Invalid URL
    // ----------------------------

    if (!isValidURL(url)) {
      showError("Please enter a valid URL");
      return;
    }

    // ----------------------------
    // Submit button
    // ----------------------------

    const submitButton =
      form.querySelector("button[type='submit']");

    const originalText =
      submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Shortening...";

    try {
      // ----------------------------
      // Call Bitly
      // ----------------------------

      const shortenedUrl = await shortenURL(url);

      const link = {
        original: url,
        shortened: shortenedUrl
      };

      // Add to page
      addResult(link);

      // Save to localStorage
      saveLink(link);

      // Clear input
      input.value = "";

    } catch (error) {
      console.error(error);

      showError(
        "Unable to shorten this link. Please try again."
      );

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}

// ================================
// URL Validation
// ================================

function isValidURL(value) {
  try {
    const url = new URL(value);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );

  } catch {
    return false;
  }
}

// ================================
// Bitly API
// ================================


async function shortenURL(url) {
  const response = await fetch(
    "https://api-ssl.bitly.com/v4/shorten",
    {
      method: "POST",

      headers: {
        "Authorization": "43d8ec70521ea73a3c753b192cd2b1a87d925be4",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        long_url: url,
        domain: "bit.ly"
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Bitly error:", data);

    throw new Error(
      data.message || "Bitly request failed."
    );
  }

  return data.link;
}

// ================================
// Create Result Card
// ================================

function addResult(link) {
  if (!resultsContainer) {
    return;
  }

  const card =
    document.createElement("article");

  card.className = `
    flex
    flex-col
    gap-3
    rounded-md
    bg-white
    p-5

    md:flex-row
    md:items-center
    md:gap-5
    md:px-6
    md:py-[18px]
  `;

  // ==============================
  // Original URL
  // ==============================

  const original =
    document.createElement("p");

  original.className = `
    min-w-0
    overflow-hidden
    text-ellipsis
    whitespace-nowrap
    text-[#232127]
  `;

  original.textContent = link.original;
  original.title = link.original;

  // ==============================
  // Shortened URL
  // ==============================

  const shortened =
    document.createElement("a");

  shortened.className = `
    min-w-0
    overflow-hidden
    text-ellipsis
    whitespace-nowrap
    text-[#2acfcf]

    md:ml-auto
  `;

  shortened.href = link.shortened;
  shortened.target = "_blank";
  shortened.rel = "noopener noreferrer";
  shortened.textContent = link.shortened;

  // ==============================
  // Copy Button
  // ==============================

  const copyButton =
    document.createElement("button");

  copyButton.type = "button";

  copyButton.className = `
    w-full
    rounded-md
    bg-[#2acfcf]
    px-4
    py-2
    text-[15px]
    font-bold
    text-white
    transition-opacity
    hover:opacity-70

    md:w-[105px]
  `;

  copyButton.textContent = "Copy";

  copyButton.addEventListener("click", () => {
    copyLink(
      link.shortened,
      copyButton
    );
  });

  // ==============================
  // Add elements to card
  // ==============================

  card.append(
    original,
    shortened,
    copyButton
  );

  // Add newest result to top
  resultsContainer.prepend(card);
}

// ================================
// Copy Link
// ================================

async function copyLink(url, button) {
  try {
    await navigator.clipboard.writeText(url);

    button.textContent = "Copied!";

    button.classList.remove(
      "bg-[#2acfcf]"
    );

    button.classList.add(
      "bg-[#3b3054]"
    );

    setTimeout(() => {
      button.textContent = "Copy";

      button.classList.remove(
        "bg-[#3b3054]"
      );

      button.classList.add(
        "bg-[#2acfcf]"
      );
    }, 2000);

  } catch (error) {
    console.error(error);

    button.textContent = "Failed";

    setTimeout(() => {
      button.textContent = "Copy";
    }, 2000);
  }
}

// ================================
// Local Storage
// ================================

function saveLink(link) {
  const links = getSavedLinks();

  links.unshift(link);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(links)
  );
}

// ================================
// Get Saved Links
// ================================

function getSavedLinks() {
  try {
    return (
      JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      ) || []
    );

  } catch {
    return [];
  }
}

// ================================
// Load Saved Links
// ================================

function loadSavedLinks() {
  const links = getSavedLinks();

  links.forEach((link) => {
    addResult(link);
  });
}

// ================================
// Error Handling
// ================================

function showError(message) {
  if (!input || !errorMessage) {
    return;
  }

  input.classList.remove(
    "border-transparent"
  );

  input.classList.add(
    "border-[#f46262]"
  );

  input.setAttribute(
    "aria-invalid",
    "true"
  );

  errorMessage.textContent = message;
}

// ================================
// Clear Error
// ================================

function clearError() {
  if (!input || !errorMessage) {
    return;
  }

  input.classList.remove(
    "border-[#f46262]"
  );

  input.classList.add(
    "border-transparent"
  );

  input.removeAttribute(
    "aria-invalid"
  );

  errorMessage.textContent = "";
}

// ================================
// Remove Error While Typing
// ================================

if (input) {
  input.addEventListener(
    "input",
    clearError
  );
}

// ================================
// Load Existing Links
// ================================

loadSavedLinks();