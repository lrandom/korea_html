//get page indicator node
const slidePageIndicators = document.querySelectorAll(
  ".slide_page_indicator_item",
);

function _resetIndicatorsState() {
  slidePageIndicators.forEach((pageIndicator) => {
    pageIndicator.classList.remove("slide_page_indicator_item--active");
  });
}

function _resetSlideItemsState() {
  const slideItems = document.querySelectorAll(".slide_item");
  slideItems.forEach((slideItem) => {
    slideItem.classList.remove("slide_item--active");
  });
}

slidePageIndicators.forEach((pageIndicator) => {
  pageIndicator.addEventListener("click", (evt) => {
    //reset các indicators về màu trắng
    _resetIndicatorsState();
    //xử lí ân hiện slide item ở đây
    const targetPageIndicator = evt.target;
    targetPageIndicator.classList.add("slide_page_indicator_item--active");
    const dataIndex = parseInt(targetPageIndicator.getAttribute("data-index"));
    console.log(dataIndex);

    //attribute selector
    const slideItemNode = document.querySelector(
      `.slide_item[data-index="${dataIndex}"]`,
    );

    _resetSlideItemsState();
    slideItemNode.classList.add("slide_item--active");
  });
});
