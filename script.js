document.addEventListener("DOMContentLoaded", function () {
  const backgroundContainer = document.querySelector(
    ".background-image-container"
  );
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");
  const overlayTexts = {
    "problem-solving":
      "My ability to solve whatever problem gets thrown at me.",
    chatgpt: "Using and utilising the vast hive-mind knowledge of AI",
    css: "I use CSS to apply styling to my projects.",
    react: "Used to streamline the process of creating web-apps.",
    python: "Used for creating ease-of-life scripts.",
    figma:
      "I use Figma to give myself an idea of how my project should look like.",
    html: "I use HTML to give structure to my web-creations.",
    javascript:
      "I am using Javascript to make my websites/projects interactive.",
  };

  // Overlay functionality
  const gridItems = document.querySelectorAll(
    "#grid-container2 > div:not(.overlay)"
  );
  const overlay = document.getElementById("overlay");

  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const itemId = this.id; // Get the id of the hovered item
      const textToShow = overlayTexts[itemId]; // Look up the text for this id
      overlay.innerText = textToShow || "Details not available"; // Set the text or a default message
      overlay.style.display = "block"; // Show the overlay
    });

    item.addEventListener("mouseleave", function () {
      overlay.style.display = "none"; // Hide the overlay
    });
  });

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
