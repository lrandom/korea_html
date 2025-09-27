function Slider(options) {
  this.options = options;
  containerNode = null;
  /*   const {
    images = [],
    container: string
  } */

  this.init = function () {
    //draw HTML
    let imagesHTML = "";
    let indicatorsHTML = "";
    containerNode = document.querySelector(this.options.container);
    if (containerNode) {
      containerNode.classList.add("slide");
      this.options.images.forEach((image, index) => {
        imagesHTML += `
        <div class="slide_item ${
          index === 0 ? "slide_item--active" : ""
        }" data-index="${index + 1}">
            <img  src="${image}" />
        </div>
      `;
        indicatorsHTML += `
         <li>
                <div role="button" 
                data-index="${index + 1}"
                class="slide_page_indicator_item ${
                  index === 0 ? "slide_page_indicator_item--active" : ""
                }"></div>
          </li>
      `;
      });
      const slideContentHTML = `${imagesHTML}
    <ul class="slide_page_indicators">
        ${indicatorsHTML}
    </ul>
    `;
      containerNode.innerHTML = slideContentHTML;
      _activeFunction();
    } else {
      console.warn("container not found");
    }
  };

  function _resetIndicatorsState() {
    const slidePageIndicators = containerNode.querySelectorAll(
      ".slide_page_indicator_item",
    );
    slidePageIndicators.forEach((pageIndicator) => {
      pageIndicator.classList.remove("slide_page_indicator_item--active");
    });
  }

  function _resetSlideItemsState() {
    const slideItems = containerNode.querySelectorAll(".slide_item");
    slideItems.forEach((slideItem) => {
      slideItem.classList.remove("slide_item--active");
    });
  }

  function _activeFunction() {
    //get page indicator node
    const slidePageIndicators = containerNode.querySelectorAll(
      ".slide_page_indicator_item",
    );

    slidePageIndicators.forEach((pageIndicator) => {
      pageIndicator.addEventListener("click", (evt) => {
        //reset các indicators về màu trắng
        _resetIndicatorsState();
        //xử lí ân hiện slide item ở đây
        const targetPageIndicator = evt.target;
        targetPageIndicator.classList.add("slide_page_indicator_item--active");
        const dataIndex = parseInt(
          targetPageIndicator.getAttribute("data-index"),
        );
        console.log(dataIndex);

        //attribute selector
        const slideItemNode = document.querySelector(
          `.slide_item[data-index="${dataIndex}"]`,
        );

        _resetSlideItemsState();
        slideItemNode.classList.add("slide_item--active");
      });
    });
  }
}
