function modalWindow() {
  document.body.addEventListener("mouseup", manageModalWindow);

  const nameAttributeForOpening = "data-open-modal-window";
  const modalWindowAttribute = "data-modal-window";
  const selectorInnerWrapModal = ".modal-order-similar__inner";
  const selectorBlockWithInfo = "[data-card-with-info]";
  const prefixForDataAttribute = "modal";

  function manageModalWindow(event) {
    const targetBlock = checkTargetBlock(event);

    if (!targetBlock) {
      return;
    } else if (targetBlock.closest(`${selectorInnerWrapModal}`)) {
      return;
    } else if (targetBlock.closest(`[${nameAttributeForOpening}]`)) {
      const modalBlock = getBlockWithModal(event);
      if (!modalBlock) {
        console.log(`There is no modal window with that name:`);
        console.log(
          event.target
            .closest(`[${nameAttributeForOpening}]`)
            .getAttribute(`${nameAttributeForOpening}`)
        );
        return;
      }
      transferDataFromTargetBlock(targetBlock, modalBlock);
      openModal(modalBlock);
    } else if (targetBlock.closest(`[${modalWindowAttribute}]`)) {
      const modalBlock = event.target;
      closeModal(modalBlock);
    } else {
      console.log("an unhandled event from the block:");
      console.log(targetBlock);
    }
  }

  function checkTargetBlock(event) {
    return event.target.closest(`[${nameAttributeForOpening}]`)
      ? event.target
      : event.target.closest(`[${modalWindowAttribute}]`)
      ? event.target
      : event.target.closest(`${selectorInnerWrapModal}`)
      ? event.target
      : false;

    // switch (true) {
    //   case !!event.target.closest(`[${nameAttributeForOpening}]`):
    //     return event.target;
    //   case !!event.target.closest(`[${modalWindowAttribute}]`):
    //     return event.target;
    //   case !!event.target.closest(`${selectorInnerWrapModal}`):
    //     return event.target;
    //   default:
    //     return false;
    // }
  }

  function openModal(modalBlock) {
    document.body.classList.add("scroll-lock");
    modalBlock.addEventListener("close", (event) =>
      document.body.classList.remove("scroll-lock")
    );
    modalBlock.showModal();
  }

  function closeModal(modalBlock) {
    document.body.classList.remove("scroll-lock");
    modalBlock.close();
  }

  function getBlockWithModal(event) {
    const blockWithNameModalWindow = event.target.closest(
      `[${nameAttributeForOpening}]`
    );
    const nameModalWindow = blockWithNameModalWindow.getAttribute(
      nameAttributeForOpening
    );
    const modalWindow = document.querySelector(
      `[${modalWindowAttribute}='${nameModalWindow}']`
    );

    return modalWindow;
  }

  function transferDataFromTargetBlock(targetBlock, modalBlock) {
    const cardWithInfo = targetBlock.closest(`${selectorBlockWithInfo}`);

    if (!cardWithInfo) {
      return;
    }

    const allBlocksInModalBlock = modalBlock.querySelectorAll("*");
    // allBlocksForInsertingData.
    const allBlocksForInsertingData = searchBlocksWithInfo(
      allBlocksInModalBlock
    );

    insertingDataIntoModalBlock(allBlocksForInsertingData, cardWithInfo);

    function insertingDataIntoModalBlock(
      allBlocksForInsertingData,
      cardWithInfo
    ) {
      allBlocksForInsertingData.forEach((blockForInsertingData) => {
        const allAttributesInBlock = blockForInsertingData.attributes;

        for (const attribute of allAttributesInBlock) {
          if (attribute.name.startsWith(`data-${prefixForDataAttribute}`)) {
            const blockWithDataSource = cardWithInfo.querySelector(
              `[${attribute.name}]`
            );

            if (!blockWithDataSource) {
              setTheBlockVisibilityTag(blockForInsertingData, false);
              continue;
            }

            setTheBlockVisibilityTag(blockForInsertingData, true);

            const dataSource = blockWithDataSource.innerHTML;

            if (dataSource == "") {
              const sourceSrcTagImage = blockWithDataSource.getAttribute("src");
              blockForInsertingData.setAttribute("src", `${sourceSrcTagImage}`);
            }

            blockForInsertingData.innerHTML = dataSource;

            function setTheBlockVisibilityTag(block, state) {
              block.setAttribute("data-show-block", `${state}`);
            }
          }
        }
      });
    }

    return;

    function searchBlocksWithInfo(allBlocksInCard) {
      const resultArray = [];

      for (const block of allBlocksInCard) {
        const attributes = block.dataset;
        if (checkAttributes(attributes)) {
          resultArray.push(block);
        }
      }
      function checkAttributes(attributes) {
        for (const attribute in attributes) {
          if (attribute.startsWith(prefixForDataAttribute)) {
            return true;
          }
          return false;
        }
      }
      return resultArray;
    }
  }
}
modalWindow();
// export {modalWindow}
