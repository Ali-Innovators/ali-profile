
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// 1. Mobile navigation menu
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a navigation link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// 2. Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 3. Contact form functionality
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const message = document.getElementById("senderMessage").value.trim();

    // Replace this with your real email address
    const recipient = "your.email@example.com";

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`
    );

    // Open the visitor's default email application
    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
