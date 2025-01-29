// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const leftElements = document.querySelectorAll(".left");
  const rightElements = document.querySelectorAll(".right");
  const qualificationButtons = document.querySelectorAll(
    ".qualification-button"
  );
  const qualificationContents = document.querySelectorAll(
    ".qualification-content"
  );

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    leftElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        el.classList.add("animate");
      }
    });

    rightElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        el.classList.add("animate");
      }
    });
  }

  // Function to handle tab switching
  qualificationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");

      // Remove active class from all buttons and hide all contents
      qualificationButtons.forEach((btn) =>
        btn.classList.remove("button-active")
      );
      qualificationContents.forEach((content) => {
        content.classList.remove("qualification-active");
        content.querySelectorAll(".left, .right").forEach((el) => {
          el.classList.remove("animate"); // Remove animation class
        });
      });

      // Add active class to the clicked button and show the target content
      button.classList.add("button-active");
      const activeContent = document.querySelector(target);
      activeContent.classList.add("qualification-active");

      // Re-add animation classes to the elements in the active content
      activeContent.querySelectorAll(".left, .right").forEach((el) => {
        el.classList.add("animate"); // Add animation class
      });
    });
  });

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility(); // Initial check
});

// Form validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Please enter Deepu Kunjumon");
    return;
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Please enter your email");
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email");
    return;
  }

  if (messageInput.value.trim() === "") {
    showError(messageInput, "Please enter your message");
    return;
  }

  // If all validations pass, you can submit the form
  handleFormSubmit(form);
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = document.createElement("div");
  error.className = "error-message";
  error.innerText = message;

  // Remove existing error messages
  const existingError = formGroup.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  formGroup.appendChild(error);
  input.classList.add("error");

  // Remove error after 3 seconds
  setTimeout(() => {
    error.remove();
    input.classList.remove("error");
  }, 3000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark-mode") {
  body.classList.add("dark-mode");
  themeToggle.checked = true;
}

// Theme toggle functionality
themeToggle.addEventListener("change", () => {
  console.log("Theme toggle clicked"); // Add this for debugging
  if (themeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll(".progress");
const skillsSection = document.querySelector(".skills");

const animateProgressBars = () => {
  progressBars.forEach((progress) => {
    const percentage = progress.getAttribute("data-progress");
    progress.style.width = "0";

    // Use setTimeout to ensure the initial width is set
    setTimeout(() => {
      progress.style.width = percentage;
    }, 100);
  });
};

// Intersection Observer for skills section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(skillsSection);

// Revealing animations on scroll
const sections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.add("animate-in");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Qualification Tabs
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove active classes
    tabContents.forEach((content) => {
      content.classList.remove("qualification-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("button-active");
    });

    // Add active class to clicked tab
    tab.classList.add("button-active");

    // Add active class to target content with animation
    requestAnimationFrame(() => {
      target.classList.add("qualification-active");
    });
  });
});

// Add animation when section comes into view
const observeQualifications = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const qualificationData = entry.target.querySelectorAll(
            ".qualification-data"
          );
          qualificationData.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const qualificationSection = document.querySelector(".qualification-active");
  if (qualificationSection) {
    observer.observe(qualificationSection);
  }
};

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  observeQualifications();
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.querySelector(".nav-overlay");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  navOverlay.classList.toggle("active");
  body.classList.toggle("menu-open");
});

// Close menu when clicking overlay
navOverlay.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  navLinks.classList.remove("active");
  navOverlay.classList.remove("active");
  body.classList.remove("menu-open");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    navOverlay.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

// Typing Effect
const typed = new Typed(".typed-text", {
  strings: ["Software Developer", "Web Designer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Form Submission
async function handleFormSubmit(form) {
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    });

    const data = await response.json();

    if (data.success) {
      alert("Thank you! Your message has been sent successfully.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }

  return false; // Prevent default form submission
}
