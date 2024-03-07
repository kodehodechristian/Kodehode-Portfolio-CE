document.addEventListener("DOMContentLoaded", function () {
  // Select the background container
  const backgroundContainer = document.querySelector(
    "#background-image-container"
  );

  // Select all links in the navigation
  const navLinks = document.querySelectorAll(".nav-links a");

  // Add click event listeners to all navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Check if the clicked link's href attribute is '#section1'
      if (event.currentTarget.getAttribute("href") === "#section1") {
        // If yes, set the background opacity to 1
        backgroundContainer.style.opacity = "1";
        backgroundContainer.style.filter = "blur(0px)"; // Remove blur
      } else {
        // For all other links, change the background opacity and add blur
        backgroundContainer.style.opacity = "0.5";
        backgroundContainer.style.filter = "blur(5px)";
      }
    });
  });
});
