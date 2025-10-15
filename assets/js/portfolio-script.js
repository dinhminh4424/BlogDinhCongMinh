/**
 * Portfolio Interactive Scripts
 * Author: Đinh Công Minh
 * Description: Modern interactive features for portfolio website
 */

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  initAOS();
  initLoadingScreen();
  initParticles();
  initNavbar();
  initThemeToggle();
  initScrollProgress();
  initBackToTop();
  initSkillBars();
  initSmoothScroll();
  initTypingEffect();
});

// ==================== AOS ANIMATION ====================
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
    });
  }
}

// ==================== LOADING SCREEN ====================
function initLoadingScreen() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingScreen = document.querySelector(".loading-screen");
      if (loadingScreen) {
        loadingScreen.classList.add("hidden");
      }
    }, 500);
  });
}

// ==================== PARTICLES BACKGROUND ====================
function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      const isDarkMode = document.body.classList.contains("dark-mode");
      ctx.fillStyle = isDarkMode
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(102, 126, 234, 0.3)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation loop
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // Resize handler
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ==================== NAVBAR ====================
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link highlighting
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const targetId = href;
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ==================== THEME TOGGLE ====================
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Check for saved theme preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    if (icon) {
      icon.classList.replace("fa-moon", "fa-sun");
    }
  }

  // Toggle event
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      if (icon) {
        icon.classList.replace("fa-moon", "fa-sun");
      }
      localStorage.setItem("theme", "dark");
    } else {
      if (icon) {
        icon.classList.replace("fa-sun", "fa-moon");
      }
      localStorage.setItem("theme", "light");
    }
  });
}

// ==================== SCROLL PROGRESS BAR ====================
function initScrollProgress() {
  const progressBar = document.querySelector(".scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

// ==================== BACK TO TOP BUTTON ====================
function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  // Show/hide button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  // Click handler
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ==================== SKILL BARS ANIMATION ====================
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");
  if (skillBars.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        // Optionally unobserve after animation
        skillObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  skillBars.forEach((bar) => {
    skillObserver.observe(bar);
  });
}

// ==================== TYPING EFFECT ====================
function initTypingEffect() {
  const heroTitle = document.querySelector(".hero-text h1");
  if (!heroTitle) return;

  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing after a delay
  setTimeout(typeWriter, 500);
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Debounce function to limit event firing rate
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Smooth counter animation
 */
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

/**
 * Parallax effect for elements
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  window.addEventListener(
    "scroll",
    debounce(() => {
      parallaxElements.forEach((element) => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }, 10)
  );
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    });
  });
}

// ==================== PERFORMANCE OPTIMIZATION ====================

/**
 * Lazy load images
 */
function initLazyLoad() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

/**
 * Preload critical resources
 */
function preloadResources() {
  const criticalImages = ["/BlogDinhCongMinh/profile/images/MINH-3.jpg"];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}

// ==================== ERROR HANDLING ====================
window.addEventListener("error", (e) => {
  console.error("Error occurred:", e.error);
  // Optionally send to analytics or logging service
});

// ==================== EXPORT FOR TESTING ====================
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    debounce,
    isInViewport,
    animateCounter,
  };
}

