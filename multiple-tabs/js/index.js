// Select all elements with the "nav" tag
const navbars = document.querySelectorAll("nav");
const contents = document.querySelectorAll(".content");

// Loop through each set of "nav" and "content" elements
for (let i = 0; i < navbars.length; i++) {
  // Find all "li" elements within the current "nav" element
  const navLinks = navbars[i].querySelectorAll("li");

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

      // Find the content element that corresponds to the clicked "li" element
      const target = link.dataset.target;
      const content = contents[i].querySelector(target);

      // Hide all content elements within the current "content" element
      contents[i].querySelectorAll(".content-items").forEach((item) => {
        item.classList.remove("content-active");
      });

      // Show the content element that corresponds to the clicked "li" element
      content.classList.add("content-active");
    };

    // Add a click event listener to the "li" element
    link.addEventListener("click", handleClick);
  });
}
