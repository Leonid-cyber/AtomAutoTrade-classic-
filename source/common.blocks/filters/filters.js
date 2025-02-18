function blockFiltering() {
  // hatchbacks;sedan;suv;minivans;hybrids;electric;
  // japan;china;korea;
  const cards = [
    // JAPAN
    {
      country: "japan",
      type: "hatchback",
      model: "Toyota Passo",
      characteristics: "Бензин | 1.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "1 040 000 руб",
      photo: "../../images/cards/__item/Toyota Passo.jpg",
      advantage: "Привезем в обход санкций!",
    },
    {
      country: "japan",
      type: "hatchback hybrids",
      model: "Honda Fit",
      characteristics: "Гибрид | 1.5л | передний",
      tag1: "2023",
      tag2: "6AA-GR3",
      price: "1 700 000 руб",
      photo: "../../images/cards/__item/fit.jpg",
    },
    {
      country: "japan",
      type: "hatchback",
      model: "Toyota Roomy",
      characteristics: "Бензин | 1.0л | передний",
      tag1: "2021",
      tag2: "M900A",
      price: "980 000 руб",
      photo: "../../images/cards/__item/roomy.jpg",
    },
    {
      country: "japan",
      type: "hatchback",
      model: "Toyota Sienta",
      characteristics: "Гибрид | 1.5л | передний",
      tag1: "2023",
      tag2: "MXPL10G",
      price: "1 920 000 руб",
      photo: "../../images/cards/__item/sienta.jpg",
    },
    {
      country: "japan",
      type: "hatchback hybrids",
      model: "Toyota Aqua",
      characteristics: "Гибрид | 1.5л | передний",
      tag1: "2022",
      tag2: "6AA-MXPK",
      price: "1 590 000 руб",
      photo: "../../images/cards/__item/aqua.jpg",
    },
    // CHINA
    {
      country: "china",
      type: "electric hatchback",
      model: "ORA Good Cat",
      characteristics: "Электро | 141 л.с. | передний",
      tag1: "2022",
      price: "2 400 000 руб",
      photo: "../../images/cards/__item/oragc.jpg",
    },
    {
      country: "china",
      type: "electric hatchback",
      model: "BYD Seagull",
      characteristics: "Электро | 74 л.с. | передний",
      tag1: "2022",
      price: "2 300 000 руб",
      photo: "../../images/cards/__item/byd-seagull.jpg",
    },
    {
      country: "china",
      type: "electric minivans",
      model: "Zeekr 009",
      characteristics: "Электро | 544 л.с. | полный",
      tag1: "2023",
      price: "9 500 000 руб",
      photo: "../../images/cards/__item/zeekr-009.jpg",
    },
    {
      country: "china",
      type: "sedan",
      model: "Hongqi H5",
      characteristics: "Бензин | 1.5л | передний",
      tag1: "2023",
      price: "3 100 000 руб",
      photo: "../../images/cards/__item/hongqi-h5.jpg",
    },
    // KOREA
    {
      country: "korea",
      type: "hatchback",
      model: "Chevrolet Spark",
      characteristics: "Бензин | 1.0л | передний",
      tag1: "2022",
      tag2: "M400",
      price: "1 200 000 руб",
      photo: "../../images/cards/__item/Chevrolet Spark.jpg",
    },
    {
      country: "korea",
      type: "sedan",
      model: "Kia K5",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "DL3",
      price: "1 950 000 руб",
      photo: "../../images/cards/__item/kia-k5-2021.jpg",
    },
    {
      country: "korea",
      type: "suv",
      model: "Lexus RX500h",
      characteristics: "Гибрид | 2.5л | полный",
      tag1: "2022",
      tag2: "M400",
      price: "1 200 000 руб",
      photo: "../../images/cards/__item/lexus-rx500h.jpg",
    },
    // REWIEWS
    {
      country: "all",
      type: "rewiews",
      model: "Subaru Forester",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2019",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/SubaruForester.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Honda Vezel",
      characteristics: "Бензин | 1.5л | передний",
      tag1: "2019",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/HondaVezel.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Toyota Voxy",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/ToyotaVoxy.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Toyota Voxy",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/ToyotaVoxy.jpg",
    },
    {
      country: "all",
      type: "rewiews",
      model: "Toyota Voxy",
      characteristics: "Бензин | 2.0л | передний",
      tag1: "2021",
      tag2: "NHP10",
      price: "2 500 000 руб",
      photo: "../../images/cards/__item/ToyotaVoxy.jpg",
    },
    // RU
    {
      country: "china ru",
      type: "electric hatchback",
      model: "ORA Good Cat",
      characteristics: "Электро | 141 л.с. | передний",
      tag1: "2022",
      price: "2 400 000 руб",
      photo: "../../images/cards/__item/oragc.jpg",
    },
    {
      country: "ru",
      type: "electric hatchback",
      model: "BYD Seagull",
      characteristics: "Электро | 74 л.с. | передний",
      tag1: "2022",
      price: "2 300 000 руб",
      photo: "../../images/cards/__item/byd-seagull.jpg",
    },
  ];
  const cardsInJson = JSON.stringify(cards);
  // console.log(cardsInJson);
  const cardsFromJson = JSON.parse(cardsInJson);

  let allWrapperBlocksFilters = document.querySelectorAll(
    ".filters[data-filters-for-slider]"
  );

  allWrapperBlocksFilters.forEach((blockWithFilters) => {
    initializationFilter(blockWithFilters);
    blockWithFilters.addEventListener("change", () =>
      initializationFilter(blockWithFilters)
    );
  });

  function initializationFilter(blockWithFilters) {
    const correspondingSliderName = blockWithFilters.dataset.filtersForSlider;
    const correspondingSlider = document.querySelector(
      `[data-slider-name="${correspondingSliderName}"]`
    );
    if (!correspondingSlider) {
      return console.log(
        "Please add attribute [data-slider-name] for .slider-cards__wrapper-items"
      );
    }
    clearSlider(correspondingSlider);

    const cardTemplate = correspondingSlider.querySelector(
      "#template-for-car-card"
    );
    const valueCurrentFilters =
      getValuesCurrentlySelectedFilters(blockWithFilters);
    const cardDataFitsTheFilter = searchData(
      valueCurrentFilters,
      cardsFromJson
    );

    insertCards(cardDataFitsTheFilter, cardTemplate, correspondingSlider);

    function clearSlider(slider) {
      slider.querySelectorAll(".car-card").forEach((block) => {
        block.remove();
      });
    }

    function getValuesCurrentlySelectedFilters(blockWithFilters) {
      let blocksInput = blockWithFilters.querySelectorAll(
        'input[type="radio"]'
      );

      const selectedFilters = [];
      blocksInput.forEach((block) => {
        if (block.checked) {
          const key = block.getAttribute("name");
          const value = block.getAttribute("value");
          selectedFilters.push({ [key]: value });
        }
      });
      return selectedFilters;
    }

    function searchData(valueFilters, source) {
      const cardsFits = source.filter((card) => {
        let countFits = 0;

        valueFilters.forEach((filter) => {
          for (const key in filter) {
            // filter[key] == card[key] ? (countFits += 1) : (countFits -= 1);
            card[key].includes(filter[key])
              ? (countFits += 1)
              : (countFits -= 1);
          }
        });

        return valueFilters.length <= countFits;
      });
      return cardsFits;
    }

    function insertCards(cardsData, tepmlate, correspondingSlider) {
      cardsData.forEach((dataForOneCard) => {
        const blockCard = tepmlate.content.firstElementChild.cloneNode(true);
        const allBlocksInCard = blockCard.querySelectorAll("*");
        const postfixDataTag = "modalAuto";

        allBlocksInCard.forEach((block) => {
          let manageAttribute;
          for (const nameAttribute in block.dataset) {
            if (nameAttribute.startsWith(postfixDataTag)) {
              manageAttribute = nameAttribute
                .slice(postfixDataTag.length)
                .toLowerCase();
            }
          }
          if (!manageAttribute) {
            return;
          }
          if (dataForOneCard[manageAttribute]) {
            block.innerHTML = dataForOneCard[manageAttribute];
          } else {
            block.remove();
          }

          if (manageAttribute == "photo") {
            block.setAttribute("src", dataForOneCard[manageAttribute]);
          }
        });

        blockCard.classList.add("car-card--add");
        correspondingSlider.append(blockCard);
      });
    }

    return;
  }
}
blockFiltering();
