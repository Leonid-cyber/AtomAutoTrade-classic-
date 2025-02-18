// function mainSlider() {
//     let mainBlockSlider = document.querySelector('.main-slider')
//     if (!mainBlockSlider) {
//         return
//     }
//     const blockFrameForItems = mainBlockSlider.querySelector('.main-slider__items')
//     const sliderItems = blockFrameForItems.querySelectorAll('.main-slider__item')
//     const sliderBlockWrapperControls = mainBlockSlider.querySelectorAll('.main-slider__controls')[0]
//     let sliderControls = sliderBlockWrapperControls.querySelectorAll('.main-slider__control-item')

//     createControlsForSlider()

//     mainBlockSlider.addEventListener('change', initializationControl)

//     function createControlsForSlider() {

//         let templateControl = copyBlockWithSliderControl()
//         templateControl.removeAttribute('checked');
        
//         clearBlocksControl()
//         addTemplatesInSlider()
//         firstControlsElementCheked()
        
//         function copyBlockWithSliderControl() {
//             return sliderControls[0].cloneNode(true)
//         }
//         function clearBlocksControl() {
//             sliderBlockWrapperControls.innerHTML= ''
//         }
//         function addTemplatesInSlider() {
            
//             sliderItems.forEach(() => {
//                 let variableForUseInHTML = templateControl.cloneNode()
//                 sliderBlockWrapperControls.append(variableForUseInHTML)
//             });
//         }
//         function firstControlsElementCheked() {
//             let controlBlock = sliderBlockWrapperControls.querySelector('.main-slider__control-item')
//             controlBlock.setAttribute('checked','')
//         }
        
//     }

//     function initializationControl() {

//         updateHavingControls()

//         let eventControl = event.target
//         sliderControls.forEach((controlElement, controlIndex) => {
            
//             if (eventControl == controlElement) {
//                 sliderItems.forEach((item, itemIndex)=> {
//                     if (controlIndex == itemIndex) {
//                         movingItem(item)
//                     }
//                 });
//             }
            
//         });
        
//         function updateHavingControls() {
//             sliderControls = sliderBlockWrapperControls.querySelectorAll('.main-slider__control-item')
//         }

//         function movingItem(item) {
//             item.scrollIntoView({
//                 block: 'nearest',
//                 inline: 'nearest',
//                 behaivor: 'smooth'
//             });
//         }
        
//     }
// }
// mainSlider()
// export {mainSlider}

function mainSlider() {
  // return
    let mainBlockSlider = document.querySelector('.main-slider')
    if (!mainBlockSlider) {
        return
    }
    const blockWrapperForItems = mainBlockSlider.querySelector('.main-slider__items')
    const sliderItems = blockWrapperForItems.querySelectorAll('.main-slider__item')
    const blockWrapperControls = mainBlockSlider.querySelector('.main-slider__controls')

    createControls()

    blockWrapperControls.addEventListener('change', rewindSlide)

    function rewindSlide(event) {

        const blockTarget = event.target
        const orderNumberItemInSlider = blockTarget.getAttribute('for-item-number')

        movingItem(orderNumberItemInSlider)

        function movingItem(orderNumber) {
            sliderItems[orderNumber].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
                behaivor: 'smooth'
            });
        }
    }

    function createControls() {
        const cloneBlock = getCloneControls(blockWrapperControls)
        
        clearOldControls(blockWrapperControls)
        addTheRequiredNumberOfBlocks(cloneBlock)

        function getCloneControls(wrapperControl) {
            const blockControl = wrapperControl.querySelector('.main-slider__controls-item')
            return blockControl.cloneNode(true) 
        }

        function clearOldControls(wrapperControls) {
            wrapperControls.innerHTML = ''
        }

        function addTheRequiredNumberOfBlocks(templateBlock) {
            sliderItems.forEach((sliderItem, index) => {
                const cloneTemplateBlock = templateBlock.cloneNode(true)
                setBlockAttributes(cloneTemplateBlock, index)
                blockWrapperControls.append(cloneTemplateBlock);
            })
        }

        function setBlockAttributes(block, orderNumber) {
            block.removeAttribute('checked')
            if (orderNumber == 0) {
                block.checked = true
                // block.setAttribute('checked', '')
            }
            block.setAttribute('for-item-number', `${orderNumber}`)
        }
    }
}
mainSlider()