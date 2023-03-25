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

const accordionItems = document.querySelectorAll(".accordion__items");

// Add event listener to each accordion item
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion__flex");
  const content = item.querySelector(".accordion__content");
  console.log(header, content);

  // Toggle active class on header click
  header.addEventListener("click", () => {
    content.classList.toggle("accordion__content--active");
    header.querySelector(".fa-caret-down").classList.toggle("fa-rotate-180");
  });
});
