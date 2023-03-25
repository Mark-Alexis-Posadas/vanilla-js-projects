// const accordionItems = document.querySelectorAll(".accordion__items");
// accordionItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     const activeItem = document.querySelector(".accordion__items.active");
//     if (activeItem && activeItem !== item) {
//       activeItem.lastElementChild.classList.toggle(
//         "accordion__content--active"
//       );
//     }

//     item.lastElementChild.classList.toggle("accordion__content--active");
//   });
// });

// const accordionItems = document.querySelectorAll(".accordion__items");

// // Add event listener to each accordion item
// accordionItems.forEach((item) => {
//   const header = item.querySelector(".accordion__flex");
//   const content = item.querySelector(".accordion__content");
//   console.log(header, content);

//   // Toggle active class on header click
//   header.addEventListener("click", () => {
//     content.classList.toggle("accordion__content--active");
//     header.querySelector(".fa-caret-down").classList.toggle("fa-rotate-180");
//   });
// });

const accordionItems = document.querySelectorAll(".accordion__items");

// Add event listener to each accordion item
accordionItems.forEach((item, index) => {
  const header = item.querySelector(".accordion__flex");
  const content = item.querySelector(".accordion__content");

  // Toggle active class on header click
  header.addEventListener("click", () => {
    // Hide other accordion contents
    for (let i = 0; i < accordionItems.length; i++) {
      if (i !== index) {
        accordionItems[i]
          .querySelector(".accordion__content")
          .classList.remove("accordion__content--active");
        accordionItems[i]
          .querySelector(".fa-caret-down")
          .classList.remove("fa-rotate-180");
      }
    }

    content.classList.toggle("accordion__content--active");
    header.querySelector(".fa-caret-down").classList.toggle("fa-rotate-180");
  });
});
