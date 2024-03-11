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

  // Overlay functionality section 3
  const gridItems = document.querySelectorAll(
    "#grid-container2 > div:not(.overlay)"
  );
  const overlay = document.getElementById("overlay");

  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const itemId = this.id;
      const textToShow = overlayTexts[itemId];
      overlay.innerText = textToShow || "Details not available";
      overlay.style.display = "block";
    });

    item.addEventListener("mouseleave", function () {
      overlay.style.display = "none";
    });
  });

  // Function to handle navigation link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      if (event.currentTarget.getAttribute("href") === "#section1") {
        backgroundContainer.classList.remove("darkened");
        backgroundContainer.style.opacity = "1";
        backgroundContainer.style.filter = "none";
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

const gitLogo = document.getElementById("git-logo");
const cvPdfLogo = document.getElementById("cv-pdf-logo");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");

// GitHub
gitLogo.addEventListener("click", function () {
  window.open("https://github.com/kodehodechristian", "_blank");
});

// CV PDF on GitHub
cvPdfLogo.addEventListener("click", function () {
  window.open(
    "https://github.com/kodehodechristian/Kodehode-Portfolio-CE/blob/main/CV-Christian.Ernst.pdf",
    "_blank"
  );
});
// Project1
project1.addEventListener("click", function () {
  window.open(
    "https://kodehode-stavanger.github.io/user-data-assignment-kodehodechristian/",
    "_blank"
  );
});
// Project2
project2.addEventListener("click", function () {
  window.open(
    "https://kodehode-stavanger.github.io/javascript-advanced-project-api-kodehodechristian/",
    "_blank"
  );
});
// Project3
project3.addEventListener("click", function () {
  window.open(
    "https://kodehode-stavanger.github.io/javascript-advanced-project-drum-machine-kodehodechristian/",
    "_blank"
  );
});
// Project4
project4.addEventListener("click", function () {
  window.open(
    "https://kodehode-stavanger.github.io/javascript-basic-mini-project-kodehodechristian/",
    "_blank"
  );
});
