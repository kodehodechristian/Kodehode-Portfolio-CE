document.addEventListener("DOMContentLoaded", () => {
  const backgroundContainer = document.querySelector(
      ".background-image-container"
    ),
    navLinks = document.querySelectorAll(".nav-links a"),
    sections = document.querySelectorAll("section"),
    overlay = document.getElementById("overlay");
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

  // Overlay handling
  document
    .querySelectorAll("#grid-container2 > div:not(.overlay)")
    .forEach((item) => {
      item.addEventListener("mouseenter", () => {
        overlay.innerText = overlayTexts[item.id] || "Details not available";
        overlay.style.display = "block";
      });
      item.addEventListener(
        "mouseleave",
        () => (overlay.style.display = "none")
      );
    });

  // Handle click and hover effects for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default navigation
      // Logic for darkening and blurring background
      const targetSection = link.getAttribute("href").substring(1);
      const isSection1 = targetSection === "section1";
      backgroundContainer.classList.toggle("darkened", !isSection1);
      backgroundContainer.style.filter = isSection1 ? "none" : "blur(10px)";

      // Update active class for clicked item only
      updateActiveNavLink(link);

      // Smooth scroll to section
      const section = document.getElementById(targetSection);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Update active link based on scroll position
  const updateActiveNavLinkOnScroll = () => {
    let currentSectionId = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href").substring(1) === currentSectionId
      );
    });
  };

  // Add scroll event listener
  window.addEventListener("scroll", updateActiveNavLinkOnScroll);

  // Function to update the active navigation link
  function updateActiveNavLink(activeLink = null) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Other click events
  [
    "git-logo",
    "cv-pdf-logo",
    "project1",
    "project2",
    "project3",
    "project4",
  ].forEach((id) => {
    document.getElementById(id).addEventListener("click", () => {
      window.open(document.getElementById(id).dataset.url, "_blank");
    });
  });
});
