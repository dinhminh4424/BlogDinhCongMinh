document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".profile-section")) {
    if (typeof particlesJS !== "undefined") {
      particlesJS("profile-section", {
        particles: {
          number: { value: 60 },
          color: { value: "#3b82f6" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          move: { speed: 4 },
        },
        interactivity: {
          events: { onhover: { enable: true, mode: "repulse" } },
        },
      });
    }
  }
});
