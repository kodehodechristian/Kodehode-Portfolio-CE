document.addEventListener("DOMContentLoaded", function () {
  const backgroundContainer = document.querySelector(
    ".background-image-container"
  );
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      if (event.currentTarget.getAttribute("href") === "#section1") {
        // Remove the darkened overlay and blur when '#section1' is clicked
        backgroundContainer.classList.remove("darkened");
        backgroundContainer.style.opacity = "1";
        backgroundContainer.style.filter = "none"; // Clear any filters
      } else {
        // Add the darkened overlay and blur for other links
        backgroundContainer.classList.add("darkened");
        backgroundContainer.style.filter = "blur(10px)";
        backgroundContainer.style.background = `black, url("images/used/background-img-FINAL.png") 1%`;
      }
    });
  });
});
