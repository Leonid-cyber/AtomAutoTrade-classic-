function pagesInPage() {
  const mainBlock = document.querySelector(".flipping-pages");
  if (mainBlock == null) {
    return;
  }
  window.addEventListener("load", initialPageInPage);

  function initialPageInPage() {
    const wrapperBlocks = mainBlock.querySelector(
      ".flipping-pages__wrapper-items"
    );
    const blocks = wrapperBlocks.querySelectorAll("[data-card-with-info]");
    setTheSequenceNumberOnTheBlocks(blocks);
    const theNumberOfBlocksVisibleAtTheSameTime =
      getTheNumberOfVisibleBlocksWithoutScrolling(blocks);
    const countPages = Math.ceil(
      blocks.length / theNumberOfBlocksVisibleAtTheSameTime
    );

    const wrapperBlockControls = mainBlock.querySelector(
      ".flipping-pages__wrapper-controls"
    );
    const nameClassAdd = "flipping-pages__control-item--selected";
    const cloneWrapperBlockControls = wrapperBlockControls.cloneNode(true);

    createBlocksControl(cloneWrapperBlockControls, 1);
    scrollWrapperToSelectedPage(1);

    wrapperBlockControls.addEventListener("mouseup", manage);

    function manage(event) {
      const targetBlock = event.target.closest("[data-page]");
      if (!targetBlock) {
        return;
      }
      const theValueOfThePageForTheTransition = Number(
        targetBlock.dataset.page
      );

      createBlocksControl(
        cloneWrapperBlockControls,
        theValueOfThePageForTheTransition
      );
      scrollWrapperToSelectedPage(theValueOfThePageForTheTransition);
    }
    function setTheSequenceNumberOnTheBlocks(collectionOfNumberingBlocks) {
      collectionOfNumberingBlocks.forEach((block, index) => {
        block.dataset.numberItem = index;
      });
    }
    function getTheNumberOfVisibleBlocksWithoutScrolling(blocksForCounting) {
      const parent = blocksForCounting[0].parentNode;
      const theFirstInvisibleElement = Array.from(blocksForCounting).findIndex(
        (block) => {
          if (
            block.getBoundingClientRect().right >
            parent.getBoundingClientRect().right
          ) {
            return true;
          } else if (
            block.getBoundingClientRect().bottom >
            parent.getBoundingClientRect().bottom
          ) {
            return true;
          }
        }
      );
      if (theFirstInvisibleElement == -1) {
        return blocks.length;
      }
      return theFirstInvisibleElement;
    }
    function createBlocksControl(cloneParentControls, selectedNumberPage) {
      const nameAttribute = "data-page";
      const array = Array.from(
        cloneParentControls
          .cloneNode(true)
          .querySelectorAll(`[${nameAttribute}]`)
      ).map((block, index) => {
        const attributeForThePageNumber = block.getAttribute(nameAttribute);
        switch (attributeForThePageNumber) {
          case "start":
            block.setAttribute(nameAttribute, "1");
            break;

          case "previous":
            if (selectedNumberPage - 1 < 1) {
              block.setAttribute(nameAttribute, "1");
            } else {
              block.setAttribute(nameAttribute, `${selectedNumberPage - 1}`);
            }
            break;

          case "number":
            const pageNumberToGoTo = index - 2 + selectedNumberPage;
            const innerBlockForText = block.querySelector("span");

            block.classList.remove(nameClassAdd);
            block.setAttribute(nameAttribute, pageNumberToGoTo);
            block.setAttribute("title", "Страница " + pageNumberToGoTo);
            innerBlockForText.innerHTML = pageNumberToGoTo;

            if (pageNumberToGoTo > countPages) {
              return null;
            }
            if (pageNumberToGoTo == selectedNumberPage) {
              block.classList.add(nameClassAdd);
            }
            if (index == 6 && pageNumberToGoTo + 2 < countPages) {
              block.setAttribute(nameAttribute, `${pageNumberToGoTo + 6}`);
              innerBlockForText.innerHTML = `${pageNumberToGoTo + 6}`;
            }
            if (index == 6 && pageNumberToGoTo + 6 > countPages) {
              block.setAttribute(nameAttribute, `${pageNumberToGoTo}`);
              innerBlockForText.innerHTML = `${pageNumberToGoTo}`;
            }
            break;

          case "next":
            if (selectedNumberPage + 1 >= countPages) {
              block.setAttribute(nameAttribute, countPages);
            } else {
              block.setAttribute(nameAttribute, `${selectedNumberPage + 1}`);
            }
            break;

          case "end":
            block.setAttribute(nameAttribute, countPages);
            break;

          case "more":
            if (countPages < 5) {
              return null;
            }
            if (selectedNumberPage + 4 > countPages) {
              return null;
            }
            break;

          default:
            console.log("Do not seraching [data-page]!");
            break;
        }
        return block;
      });

      wrapperBlockControls.innerHTML = "";
      array.forEach((block) => {
        if (block) {
          wrapperBlockControls.append(block);
        }
      });
      return;
    }
    function scrollWrapperToSelectedPage(seletedNumberPage) {
      const attributeNameForDisplayingTheLastPage = "data-styles-for-last-page";
      const numberFirstBlocksForShowing =
        (seletedNumberPage - 1) * theNumberOfBlocksVisibleAtTheSameTime;
      const numberLastPage = countPages;

      showAllBlocks(blocks);
      scrollToSelectedPage(blocks);
      hideBlocksOnLastPage(blocks);

      function showAllBlocks(blocks) {
        blocks.forEach((block) => (block.style.display = null));
        wrapperBlocks.removeAttribute(attributeNameForDisplayingTheLastPage);
      }
      function scrollToSelectedPage(blocks) {
        if (seletedNumberPage == 1) {
          document.body.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
          return;
        }
        blocks[numberFirstBlocksForShowing].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
      function hideBlocksOnLastPage(blocks) {
        if (numberLastPage == seletedNumberPage) {
          wrapperBlocks.setAttribute(attributeNameForDisplayingTheLastPage, "");
          blocks.forEach((block, index) => {
            if (index < numberFirstBlocksForShowing) {
              block.style.display = "none";
            }
          });
        }
      }
    }

    return;
  }
  return;
}
pagesInPage();
