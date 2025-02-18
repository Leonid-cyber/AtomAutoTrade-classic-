function sliderWithOpenSlides() {
  const blockSlider = document.querySelector(
    ".car-sales-and-card__wrapper-pictures"
  );
  if (!blockSlider) {
    return;
  }
  const mainImageBlock = blockSlider.querySelector(
    ".car-sales-and-card__main-image"
  );
  const additionalImagesWrapperBlock = blockSlider.querySelector(
    ".car-sales-and-card__additional-images-wrapper"
  );

  blockSlider.addEventListener("mouseup", manage);

  createAttributesWithSerialNumbers(additionalImagesWrapperBlock);
  setMainImage(0);
  setAttributeSerialNumberOnArrow(0);

  function manage(event) {
    const manageAttribute = getManageAttribute(event);

    setMainImage(manageAttribute);
    setAttributeSerialNumberOnArrow(manageAttribute);
  }

  function createAttributesWithSerialNumbers(parentBlock) {
    const allAdditionalImages = parentBlock.querySelectorAll(
      ".car-sales-and-card__additional-image"
    );

    allAdditionalImages.forEach((blockImage, index) => {
      blockImage.setAttribute("data-serial-number", `${index}`);
    });
  }

  function setMainImage(serialNumber) {
    const blockImage = additionalImagesWrapperBlock.querySelector(
      `[data-serial-number="${serialNumber}"]`
    );

    if (!blockImage) {
      return console.log("no having this image!");
    }

    const sourceImage = blockImage.getAttribute("src");
    const altImage = blockImage.getAttribute("alt");

    mainImageBlock.setAttribute("src", sourceImage);
    mainImageBlock.setAttribute("alt", altImage);
  }

  function setAttributeSerialNumberOnArrow(serialNumber) {
    const arrowLeft = blockSlider.querySelector(
      ".car-sales-and-card__arrow-left"
    );
    const arrowRight = blockSlider.querySelector(
      ".car-sales-and-card__arrow-right"
    );
    const additionalImages = additionalImagesWrapperBlock.querySelectorAll(
      ".car-sales-and-card__additional-image"
    );
    const additionalImagesEndSerialNumber = additionalImages.length - 1;

    arrowLeft.setAttribute("data-serial-number", `${serialNumber - 1}`);
    arrowRight.setAttribute("data-serial-number", `${serialNumber + 1}`);

    if (serialNumber - 1 < 0) {
      arrowLeft.setAttribute(
        "data-serial-number",
        `${additionalImagesEndSerialNumber}`
      );
    }
    if (serialNumber + 1 > additionalImagesEndSerialNumber) {
      arrowRight.setAttribute("data-serial-number", `${0}`);
    }
  }

  function getManageAttribute(event) {
    const blockTargetArrowLeft = event.target.closest(
      ".car-sales-and-card__arrow-left"
    );
    if (blockTargetArrowLeft) {
      const serialNumberImage =
        blockTargetArrowLeft.getAttribute("data-serial-number");
      return Number(serialNumberImage);
    }

    const blockTargetArrowRight = event.target.closest(
      ".car-sales-and-card__arrow-right"
    );
    if (blockTargetArrowRight) {
      const serialNumberImage =
        blockTargetArrowRight.getAttribute("data-serial-number");
      return Number(serialNumberImage);
    }

    const blockTargetSerialNumber = event.target.closest(
      ".car-sales-and-card__additional-image"
    );
    if (blockTargetSerialNumber) {
      const serialNumberImage =
        blockTargetSerialNumber.getAttribute("data-serial-number");
      return Number(serialNumberImage);
    }
    return false;
  }
}
sliderWithOpenSlides();
