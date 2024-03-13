document.addEventListener("DOMContentLoaded", () => {
  const backgroundContainer = document.querySelector(
      ".background-image-container"
    ),
    navLinks = document.querySelectorAll(".nav-links a"),
    sections = document.querySelectorAll("section"),
    overlay = document.getElementById("overlay"),
    overlayTexts = {
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
  // Overlay
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
  // Add blur and darkening (perceived depth)
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const isSection1 =
        event.currentTarget.getAttribute("href") === "#section1";
      backgroundContainer.classList.toggle("darkened", !isSection1);
      backgroundContainer.style.filter = isSection1 ? "none" : "blur(10px)";
    });
  });
  // Update navLinks on scroll
  const updateActiveNavLinkOnScroll = () => {
    let currentSectionId = "";
    sections.forEach((section) => {
      if (scrollY >= section.offsetTop - section.clientHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.href.includes(currentSectionId));
    });
  };

  window.addEventListener("scroll", updateActiveNavLinkOnScroll);

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
