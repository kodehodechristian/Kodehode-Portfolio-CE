document.addEventListener("DOMContentLoaded", function () {
  const backgroundContainer = document.querySelector(
    ".background-image-container"
  );
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  // Function to handle navigation link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      if (event.currentTarget.getAttribute("href") === "#section1") {
        backgroundContainer.classList.remove("darkened");
        backgroundContainer.style.opacity = "1";
        backgroundContainer.style.filter = "none"; // Clear any filters
      } else {
        backgroundContainer.classList.add("darkened");
        backgroundContainer.style.filter = "blur(10px)";
      }
    });
  });

  // Function to update the active navigation link based on scroll position
  function updateActiveNavLinkOnScroll() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.href.includes(currentSectionId)) {
        a.classList.add("active");
      }
    });
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", updateActiveNavLinkOnScroll);
});
