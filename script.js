// Smooth scroll to projects section when button is clicked
const projectBtn = document.getElementById("projectBtn");

if (projectBtn) {
  projectBtn.addEventListener("click", () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

// Optional: Add a fade-in animation for project cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -20px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply animation to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Also add subtle animation to skill items
document.querySelectorAll('.skill').forEach((skill, index) => {
  skill.style.opacity = "0";
  skill.style.transform = "translateY(15px)";
  skill.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
  observer.observe(skill);
});

// Add a simple year update in console (optional)
console.log("🚀 Yuvraj Pun Portfolio — Ready to build something great!");