// Select all elements with the "nav" tag
const navbars = document.querySelectorAll("nav");

// Loop through each "nav" element
navbars.forEach((navbar) => {
  // Find all "li" elements within the current "nav" element
  const navLinks = navbar.querySelectorAll("li");

  // Log the "li" elements to the console
  console.log(navLinks);

  // Loop through each "li" element
  navLinks.forEach((link) => {
    // Define a function that will be called when the "li" element is clicked
    const handleClick = () => {
      // Remove the "active" class from all "li" elements within the current "nav" element
      navLinks.forEach((removeLink) => {
        removeLink.classList.remove("active");
      });

      // Add the "active" class to the clicked "li" element
      link.classList.add("active");
    };

    // Add a click event listener to the "li" element
    link.addEventListener("click", handleClick);
  });
});
