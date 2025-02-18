// function flippingPagesOnContols() {
//     const blockWrapperControls = document.querySelector('.flipping-pages__wrapper-controls')
//     const collectionItemsControl = blockWrapperControls.querySelectorAll('.flipping-pages__control-input')
//     const blockFlippingPages = document.querySelector('.flipping-pages__wrapper-items')

//     let observerForWrapperBlockPages = new MutationObserver(setDefaultParam)
//     observerForWrapperBlockPages.observe(blockFlippingPages, {childList: true, subtree: true})

//     window.addEventListener('load', setDefaultParam)
//     blockWrapperControls.addEventListener('input', manage)

//     function setDefaultParam() {
//         console.log('default set!');
//         // setTopScrollOnZero()
//         deletingAttributesCheckedOnAllInputs()
//         setAttributeCheckedOnFirstElement()
//         hideAllBlocksControlsWithSerialNumber()
//         let arrayOfPagesStartYCoordinates = getArrayOfPagesStartYCoordinates()
//         console.log(arrayOfPagesStartYCoordinates);
//         // let countFlippingPages = calcCountFlippingPages()
//         // console.log(countFlippingPages);
//         // showBlocksControlsWithSerialNumber()
//     }

//     function manage() {
//         return
//         console.log(event.target);
//         return
        
//         let countFlippingPages = calcCountFlippingPages()
//         let arrayOfPagesStartXCoordinates = getArrayOfPagesStartXCoordinates()
        
        
//         let pageSerialNumber = getCurrentNumberPage()
        
//         scrollToCurrentPage(event, pageSerialNumber)
//     }



//     function deletingAttributesCheckedOnAllInputs() {
//         collectionItemsControl.forEach(blockInput => {
//             blockInput.removeAttribute('checked')
//         });
//     }

//     function setAttributeCheckedOnFirstElement() {
//         let firstSerialNumber = blockWrapperControls.querySelector('#flipping-pages__page-1')
//         // let firstSerialNumber = blockWrapperControls.querySelector('[value="1"]')
//         firstSerialNumber.setAttribute('checked', '')
//     }

//     function hideAllBlocksControlsWithSerialNumber() {
//         // for (let index = 2; index < 100; index++) {
            
//         //     let selector = `[value="${index}"]`
//         //     let blockWithSerialNumber = blockWrapperControls.querySelector(selector)
            
//         //     if (blockWithSerialNumber) {
//         //         let secetor2 = blockWithSerialNumber.getAttribute('id')
//         //         let label = blockWrapperControls.querySelector(`label[for = "${secetor2}"]`)
//         //         label.classList.add('flipping-pages__control-item--hidden')
//         //     }
            
//         // }

//         collectionItemsControl.forEach(iterableBlock => {
//             let attribute = iterableBlock.getAttribute('value')
//             let checkAttributeOnNumber = attribute * 2
            
//             if (checkAttributeOnNumber && attribute !== '1') {
                
//                 let blockInput = blockWrapperControls.querySelector(`[value="${attribute}"`)
//                 let selectorBlockForHidden = blockInput.getAttribute('id')
//                 let blockForHidden = blockWrapperControls.querySelector(`[for = "${selectorBlockForHidden}"]`)
                
//                 blockForHidden.classList.add('flipping-pages__control-item--hidden')
//             }

//         });
//     }

//     function getArrayOfPagesStartYCoordinates() { 
//         const parentBlock = blockWrapperControls.closest('.flipping-pages')
//         const wrapperContent = parentBlock.querySelector('.flipping-pages__wrapper-items')
//         const fullHeightContent = wrapperContent.scrollHeight
//         const heightVisibleContent = wrapperContent.getBoundingClientRect().height
//         let arrayCoordinatesY = []

//         let currentCoordinate = 0
//         do {
//             arrayCoordinatesY.push(currentCoordinate)
//             currentCoordinate += heightVisibleContent

//         } while (currentCoordinate < fullHeightContent);


//         // for (let index = 0; index < fullHeightContent; index + heightVisibleContent) {
//         //     console.log(index);
//         //     // arrayCoordinatesY.unshift(index)
//         // }

//         return arrayCoordinatesY
//     }
// }
// flippingPagesOnContols()