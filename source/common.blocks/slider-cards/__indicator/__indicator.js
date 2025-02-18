function sliderIndicator() {
    const allBlocksControl = document.querySelectorAll('.slider-cards__indicator')
    allBlocksControl.forEach((blockWrapper, index) => {
        initializationSliderIndicator(blockWrapper)
        // if (index == 0) {
        //     initializationSliderIndicator(blockWrapper)
        // }
        
    });

    function initializationSliderIndicator(blockWrapper) {

        const wrapperIndicator = blockWrapper
        const indicatorFilling = wrapperIndicator.querySelector('.slider-cards__indicator-filling')
        let correspondingSlider = getCorrespondingSlider()
        let correspondingSliderItems = getSliderItems()
        let initialFillInPercentage = getInitialFillPercentage()

        let observerForSlider = new MutationObserver(manage)
        observerForSlider.observe(correspondingSlider, {childList: true, subtree: true})
        
        correspondingSlider.addEventListener('scroll', fillIndicator)

        manage()

        function getCorrespondingSlider() {
            let wrapperSlider = wrapperIndicator.closest('.slider-cards')
            let sliderBlock = wrapperSlider.querySelector('[data-slider-name]')
            if (!sliderBlock) {
                console.log('Please add attribute [data-slider-name] for cards wrapper');
            }
            return sliderBlock
        }

        function getSliderItems() {
            return correspondingSlider.querySelectorAll('[data-card-with-info]')
        }

        function manage() {

            correspondingSlider = getCorrespondingSlider()
            correspondingSliderItems = getSliderItems()

            if (!needForScrolling()) {
                showScroll(false)
                return
            }
            showScroll(true)

            initialFillInPercentage = getInitialFillPercentage()
            showFilling(initialFillInPercentage, '%')

            return
        }
        
        function fillIndicator() {
            
            let currentSliderScrollAsAPercentage = getScrollMovementPercentage()
            // showFilling(currentSliderScrollAsAPercentage, '%')
            // return
            let finalWidthForFillingInPixel = getTheFinalFillWidthInPixel()
            // console.log(finalWidthForFillingInPixel);

            showFilling(finalWidthForFillingInPixel, 'px')

            function getScrollMovementPercentage() {
                let sliderWidthWithScroll = correspondingSlider.scrollWidth
                let sliderWrapperWidth = correspondingSlider.clientWidth
                let scrollWidth = sliderWidthWithScroll - sliderWrapperWidth
                let currentScrollOfTheSliderWrapper = correspondingSlider.scrollLeft
                let scrollMovementPercentage = currentScrollOfTheSliderWrapper / scrollWidth * 100
                return scrollMovementPercentage
                // return Math.ceil(scrollMovementPercentage)
            }
            
            function getTheFinalFillWidthInPixel() {
                let fullWidthInPixels = wrapperIndicator.getBoundingClientRect().width
                let widthInPixelsOfOnePercent = fullWidthInPixels / 100
                let calculatedFillInPixels = initialFillInPercentage * widthInPixelsOfOnePercent
                let initialFillInPixel = calculatedFillInPixels
                
                // console.log(initialFillInPercentage);

                let widthFromCurrentSliderScrollInPixel = getWidthFromCurrentSliderScroll()

                function getWidthFromCurrentSliderScroll() {
                    let totalWidthForFilling = wrapperIndicator.getBoundingClientRect().width
                    let remainingWidthForFilling = totalWidthForFilling - initialFillInPixel
                    let onePercentOfTheRemainingWidthInPixels = remainingWidthForFilling / 100
                    let widthFromCurrentSliderScroll = currentSliderScrollAsAPercentage * onePercentOfTheRemainingWidthInPixels
                    return widthFromCurrentSliderScroll
                }
                
                let finalFillWidth = initialFillInPixel + widthFromCurrentSliderScrollInPixel
                
                return finalFillWidth
            }

        }

        function getInitialFillPercentage() {

            let rangeOfMovement = getSerialNumberRange()

            function getSerialNumberRange() {
                let resultArray = []

                resultArray[0] = getTheStartingNumberOfTheItem()
                resultArray[1] = getTheLastItemNumberToScroll()

                if (resultArray[0] == undefined || resultArray[1] == undefined) {
                    resultArray = []
                }
                
                return resultArray
                
                function getTheStartingNumberOfTheItem() {
                    let sliderCoordinateXRightSide = correspondingSlider.getBoundingClientRect().right

                    for (let serialNumberItem = 0; serialNumberItem < correspondingSliderItems.length; serialNumberItem++) {

                        let currentItem = correspondingSliderItems[serialNumberItem]
                        let currentItemCoordinateXRightSide = currentItem.getBoundingClientRect().right
                        // hidden pixel offset
                        let stockOfPixelsInWidth = 10
                        currentItemCoordinateXRightSide -= stockOfPixelsInWidth

                        if (sliderCoordinateXRightSide <= currentItemCoordinateXRightSide) {
                            serialNumberItem--
                            return serialNumberItem
                        }
                    }
                }
                
                function getTheLastItemNumberToScroll() {

                    let fullWidth = correspondingSlider.scrollWidth
                    let wrapperWidth = correspondingSlider.clientWidth
                    
                    let outsideFrameLeftSide = correspondingSlider.getBoundingClientRect().left + fullWidth - wrapperWidth

                    let startSerialNumber = correspondingSliderItems.length - 1
                    let endSerialNumber = resultArray[0]
                    
                    for (let serialNumber = startSerialNumber; serialNumber >= endSerialNumber; serialNumber--) {

                        let currentItem = correspondingSliderItems[serialNumber]
                        let currentItemCoordinateX = currentItem.getBoundingClientRect().x
                        
                        if (outsideFrameLeftSide <= currentItemCoordinateX) {
                            // currentItem.style.boxShadow = '0px 0px 20px red'
                            return serialNumber
                        }
                        
                    }
                }
            }

            if (rangeOfMovement.length == 0) {
                return
            }

            let numberOfPartsToFill = rangeOfMovement[1] - rangeOfMovement[0] + 1
            let initialFillWidthInPercentage = 100 / numberOfPartsToFill

            return initialFillWidthInPercentage

            // showInitialFill()

            // function showInitialFill() {
            //     indicatorFilling.style.width = `${initialFillWidthInPercentage}%`
            // }
        }

        function needForScrolling() {
            let fullWidth = correspondingSlider.scrollWidth
            let wrapperWidth = correspondingSlider.clientWidth

            let availableScrollWidth = fullWidth - wrapperWidth

            if (availableScrollWidth <= 0) {
                return false
            }
            return true
        }

        function showScroll(state) {
            let wrapperControlsAndIndicator = wrapperIndicator.closest('.slider-cards__wrapper-for-controls')

            if (state == true) {
                
                wrapperControlsAndIndicator.classList.remove('slider-cards__wrapper-for-controls--hidden')
                return
            }

            if (state == false) {
                
                wrapperControlsAndIndicator.classList.add('slider-cards__wrapper-for-controls--hidden')
                return
            }
            return console.log('Error in determining whether to show or hide the scroll!');
        }

        function showFilling(value, unit) {
            // indicatorFilling.style.width = `${initialFillWidthInPercentage}%`
            indicatorFilling.style.width = `${value}${unit}`
        }
    }
}
sliderIndicator()