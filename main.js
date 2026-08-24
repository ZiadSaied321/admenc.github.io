// 1. Test connection to ensure everything is linked properly
console.log("JavaScript is linked successfully!");

// 2. Optimized Intersection Observer for smooth scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Stop observing once the animation triggers to save performance
      observerInstance.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .scale-in",
  );
  animatedElements.forEach((el) => observer.observe(el));
});

// 4. Debounce utility for heavy event listeners (like window resizing or scrolling)
function debounce(func, wait = 20) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    // Add any custom resize performance logic here if needed
  }, 100),
);

// 5. Mobile Navigation Toggle functionality
const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
  });
}

// 6. WhatsApp Floating Button Click Interaction
const whatsappBtn = document.querySelector(".whatsapp-float");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    console.log("WhatsApp button clicked by user.");
  });
}

