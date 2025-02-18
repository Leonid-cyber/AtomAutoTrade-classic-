function accordeon() {
  const blockParentAccordeon = document.querySelector(".faq__questions");

  if (!blockParentAccordeon) {
    return;
  }

  blockParentAccordeon.addEventListener("click", manageAccordeon);

  function manageAccordeon() {
    const blockWrapper = event.target.closest(".faq__question-wrapper");

    if (!blockWrapper) {
      return;
    }

    blockWrapper.classList.toggle("faq__question-wrapper--open");
    return;
  }
}
accordeon();
// export {accordeon}
