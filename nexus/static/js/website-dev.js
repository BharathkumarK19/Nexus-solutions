document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
      menuToggle.textContent = isExpanded ? "✕" : "☰";
    });
  }

  // Animation control based on scroll past hero
  const heroSection = document.querySelector(".hero");
  const animatableSections = document.querySelectorAll(".business, .services, .why");

  function isHeroInViewport() {
    if (!heroSection) return false;
    const rect = heroSection.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function applyAnimations() {
    if (!isHeroInViewport()) {
      animatableSections.forEach(section => {
        if (section && !section.classList.contains("animate__animated")) {
          if (section.classList.contains("business")) {
            section.classList.add("animate__animated", "animate__slideInFromLeft");
          } else if (section.classList.contains("services")) {
            section.classList.add("animate__animated", "animate__slideInFromRight");
          } else if (section.classList.contains("why")) {
            section.classList.add("animate__animated", "animate__fadeInDown");
          }
        }
      });
    }
  }

  // Initial check and event listener for scroll
  window.addEventListener("scroll", () => {
    applyAnimations();
  });

  // Initial call to apply animations if already scrolled past hero
  applyAnimations();

  // Ensure hero animation only if in viewport on load
  if (heroSection && isHeroInViewport()) {
    heroSection.classList.add("animate__animated", "animate__fadeIn");
  }
});