function flippingSlider() {
  const allBlocksControl = document.querySelectorAll(
    ".slider-cards__wrapper-for-controls"
  );

  allBlocksControl.forEach((blockWrapper, index) => {
    initializationFlippingSlider(blockWrapper);
  });

  function initializationFlippingSlider(blockWrapper) {
    const wrapperControls = blockWrapper;
    const controlPrevious = wrapperControls.querySelector(
      ".slider-cards__control-previous"
    );
    const controlNext = wrapperControls.querySelector(
      ".slider-cards__control-next"
    );

    let correspondingSlider = getCorrespondingSlider();
    let currentCorrespondingSliderItems = getSliderItems();
    let currentOrdinalNumber;

    let observerForSlider = new MutationObserver(updateSlider);
    observerForSlider.observe(correspondingSlider, {
      childList: true,
      subtree: true,
    });

    controlPrevious.addEventListener("mouseup", manage);
    controlNext.addEventListener("mouseup", manage);
    window.addEventListener("load", updateSlider);

    function getCorrespondingSlider() {
      let wrapperSlider = wrapperControls.closest(".slider-cards");
      let sliderBlock = wrapperSlider.querySelector("[data-slider-name]");
      if (!sliderBlock) {
        console.log(
          "Please add attribute [data-slider-name] for cards wrapper"
        );
      }
      return sliderBlock;
    }

    function getSliderItems() {
      return correspondingSlider.querySelectorAll("[data-card-with-info]");
    }

    function updateSlider() {
      currentCorrespondingSliderItems = getSliderItems();
      currentOrdinalNumber = 0;
      setSerialNumberAttribute(currentCorrespondingSliderItems);
    }

    function manage() {
      if (event.target == controlPrevious) {
        setNewCurrentOrdinalNumber("previous");
      }
      if (event.target == controlNext) {
        setNewCurrentOrdinalNumber("next");
      }

      movingSlider(currentCorrespondingSliderItems[currentOrdinalNumber]);

      function setNewCurrentOrdinalNumber(directionOfMovement) {
        if (directionOfMovement == "previous") {
          currentOrdinalNumber--;
        }

        if (currentOrdinalNumber < 0) {
          return (currentOrdinalNumber = 0);
        }

        if (getTheRestOfTheScroll(correspondingSlider) == 0) {
          return currentOrdinalNumber;
        }

        if (directionOfMovement == "next") {
          return currentOrdinalNumber++;
        }

        function getTheRestOfTheScroll(correspondingSlider) {
          const sliderWidthWithScroll = correspondingSlider.scrollWidth;
          const sliderWidthWithoutScroll =
            correspondingSlider.getBoundingClientRect().width;

          const theRestOfTheScroll =
            sliderWidthWithScroll -
            (sliderWidthWithoutScroll + correspondingSlider.scrollLeft);

          return theRestOfTheScroll;
        }
      }

      function movingSlider(moveToElement) {
        moveToElement.scrollIntoView({
          // вертикальное расположение
          block: "nearest",
          // горизонтальное расположение
          inline: "start",
          // плавность прокрутки
          behaivor: "smooth",
        });
      }
    }

    function setSerialNumberAttribute(items) {
      items.forEach((currentItem, index) => {
        currentItem.setAttribute("data-serial-number", `${index}`);
      });
    }
  }
}
flippingSlider();
