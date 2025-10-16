// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
      menuToggle.textContent = isExpanded ? "✕" : "☰"; // Toggle icon
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__bounceIn");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, observerOptions);

 
  document.querySelectorAll(".container, .location").forEach(element => {
    observer.observe(element);
  });
});