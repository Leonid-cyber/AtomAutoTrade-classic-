function tepmplatesForFlippingPages() {
  const mainBlock = document.querySelector(".flipping-pages");

  if (mainBlock == null) {
    return;
  }

  const wrapperBlockPages = mainBlock.querySelector(
    ".flipping-pages__wrapper-items"
  );
  const sourceBlocks = wrapperBlockPages.querySelectorAll(
    "[data-card-with-info]"
  );
  if (!sourceBlocks) {
    return;
  }
  const clonesSourceBlocks = Array.from(sourceBlocks).map((block) => {
    return block.cloneNode(true);
  });

  const observerForWrapperBlockPages = new MutationObserver(insertCards);
  observerForWrapperBlockPages.observe(wrapperBlockPages, {
    childList: true,
    subtree: true,
  });

  const theNumberOfInserts = 40;

  insertCards(theNumberOfInserts, clonesSourceBlocks);

  function insertCards(theNumberOfInserts, blockForInsert) {
    if (!wrapperBlockPages.querySelectorAll("[data-card-with-info]")) {
      return;
    }

    for (let index = 0; index < theNumberOfInserts; index++) {
      blockForInsert.forEach((block) => {
        wrapperBlockPages.append(block.cloneNode(true));
      });
    }
  }
}
tepmplatesForFlippingPages();
