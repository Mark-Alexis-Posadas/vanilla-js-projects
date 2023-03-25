const tabItems = document.querySelectorAll(".tab__items");
const tabContent = document.querySelectorAll(".tab-content");

tabItems.forEach((tab) => {
  const tabCallBack = () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((content) => {
      content.classList.remove("tab-content--active");
    });

    tabItems.forEach((tabRemove) => {
      tabRemove.classList.remove("tab__items--active");
    });

    tab.classList.add("tab__items--active");

    target.classList.add("tab-content--active");
  };

  tab.addEventListener("click", tabCallBack);
});

//keyboard event
// Set up a keyboard event listener
document.addEventListener("keydown", (event) => {
  // Check if the key pressed is one of the arrow keys
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    // Find the currently active tab item
    const activeTab = document.querySelector(".tab__items--active");
    let index = Array.from(tabItems).indexOf(activeTab);

    // Determine which tab to activate based on the arrow key pressed
    if (event.key === "ArrowLeft") {
      index = (index - 1 + tabItems.length) % tabItems.length;
    } else if (event.key === "ArrowRight") {
      index = (index + 1) % tabItems.length;
    }

    // Simulate a click on the new tab item
    tabItems[index].click();
  }
});
