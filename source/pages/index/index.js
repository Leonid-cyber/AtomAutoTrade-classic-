"use strict"
// function openAndClosePopularMenu() {
//     const popularMenuBlock = document.querySelector('.menu-popular')
//     const popularMenuButtonOpen = document.querySelector('.header__button-menu')
//     const popularMenuButtonClose = document.querySelector('.menu-popular__close-menu')
//     const popularMenuBlockHeight = popularMenuBlock.getBoundingClientRect().height

//     setDefaultPosition()

//     popularMenuButtonOpen.addEventListener('click', showBlock)
//     popularMenuButtonClose.addEventListener('click', hideBlock)
    
//     function setDefaultPosition() {
//         popularMenuBlock.style.marginTop = `-${popularMenuBlockHeight}px`
//     }

//     function showBlock() {
//         popularMenuBlock.style.marginTop = '0'
//     }

//     function hideBlock() {
//         setDefaultPosition()
//     }
// }






// function resultsSlider() {
//     const resultsSliderBlocks = document.querySelectorAll('.results-slider')
//     resultsSliderBlocks.forEach(initializationSlider)
//     function initializationSlider(resultsSliderBlock) {
//         let resultsSliderItems = resultsSliderBlock.getElementsByClassName('results-slider__item')
//         let sliderPreviewWindow = resultsSliderBlock.getElementsByClassName('results-slider__items')[0]
//         const resultsSliderIndicator = resultsSliderBlock.querySelector('.results-slider__indicator')
//         const resultsSliderIndicatorFilling = resultsSliderIndicator.querySelector('.results-slider__indicator-filling')
//         const controlPrevious = resultsSliderBlock.querySelector('.results-slider__control-previous')
//         const controlNext = resultsSliderBlock.querySelector('.results-slider__control-next')
//         let currentSerialNumberItem = 0
//         const zeroFilling = parseFloat(window.getComputedStyle(resultsSliderIndicatorFilling).width)
//         let observerOfChangesInItems = new MutationObserver(mutations => {
//             currentSerialNumberItem = 0
//             showProgressIndicator()
//         })
//         let configObserverForEditingItems = { 
//             attributes: false,
//             childList: true,
//             characterData: false,
//             subtree: false
//         };
        
//         controlNext.addEventListener('click', scrollToNext)
//         controlPrevious.addEventListener('click', scrollToPrevious)
//         observerOfChangesInItems.observe(sliderPreviewWindow, configObserverForEditingItems)
        
//         function showProgressIndicator() {
//             let widthVisiblePreviewWindow = sliderPreviewWindow.getBoundingClientRect().width
//             let widthContentInPreviewWindow = sliderPreviewWindow.scrollWidth
//             let widthForScrollCountPreviewWindow = widthContentInPreviewWindow - widthVisiblePreviewWindow
//             let stepScroll = widthForScrollCountPreviewWindow / 100
            
//             if (resultsSliderItems.length == 0) {
//                 return resultsSliderIndicatorFilling.style.width = `0%`
//             }
//             if (stepScroll == 0) {
//                 return resultsSliderIndicatorFilling.style.width = `100%`
//             }
//             let stepFill = (resultsSliderIndicator.getBoundingClientRect().width - zeroFilling) / 100
//             let currentScroll = sliderPreviewWindow.scrollLeft
//             let currentFilling = (currentScroll / stepScroll) * stepFill + zeroFilling
//             resultsSliderIndicatorFilling.style.width = `${currentFilling}px`
//         }

//         function movingItems() {
//             if (!checkCorrectSerialNumber()) {
//                 return
//             }
            
//             function checkCorrectSerialNumber() {
//                 if (resultsSliderItems.length == 0) {
//                     currentSerialNumberItem = 0
//                     return false
//                 }
//                 if (currentSerialNumberItem < 0) {
//                     currentSerialNumberItem = 0
//                     return false
//                 }
//                 if (currentSerialNumberItem >= resultsSliderItems.length) {
//                     currentSerialNumberItem--
//                     return false
//                 }
//                 return true
//             }   
            
//             let coordinatesXBeforeMoving = resultsSliderItems[currentSerialNumberItem].getBoundingClientRect().x

//             resultsSliderItems[currentSerialNumberItem].scrollIntoView({
//                 behaivor: 'smooth',
//                 block: 'nearest',
//                 inline: 'start'
//             })
            
//             let coordinatesXAfterMoving = resultsSliderItems[currentSerialNumberItem].getBoundingClientRect().x

//             if (coordinatesXBeforeMoving == coordinatesXAfterMoving) {
//                 currentSerialNumberItem--
//                 return
//             }

//             showProgressIndicator()
//         }

//         function scrollToNext() {
//             currentSerialNumberItem++
//             movingItems()
//         }

//         function scrollToPrevious() {
//             currentSerialNumberItem--
//             movingItems()
//         }
//     }
// }

// function popupMenuNav() {
//     const navMenuBlock = document.querySelector('.nav')
//     const navPopupMenu = navMenuBlock.querySelectorAll('.nav__popup-menu')

//     function setDefaultPositionPopupMenu() {
//         navPopupMenu.forEach(item => {
//             const heightPopupMenu = item.getBoundingClientRect().height
//             item.style.zIndex = '-1'
//             item.style.marginTop = `-${heightPopupMenu}px`
//         });
//     }
    
//     function showMenu(event) {
//         if (event.target.closest('.nav__wrapper-link') && event.type == 'mouseover') {
//             let currentBlock = event.target.closest('.nav__wrapper-link')
//             let currentPopupBlock = currentBlock.querySelector('.nav__popup-menu')
//             currentPopupBlock.style.marginTop = '0'
//             currentPopupBlock.style.zIndex = '0'
//             return
//         }
//         if (event.target.closest('.nav__wrapper-link') && event.type == 'mouseout') {
//             setDefaultPositionPopupMenu()
//         }
//     }

//     setDefaultPositionPopupMenu()

//     navMenuBlock.addEventListener('mouseover', showMenu)
//     navMenuBlock.addEventListener('mouseout', showMenu)
// }

// function popupMenuNav() {
//     const navMenuBlock = document.querySelector('.nav')
//     let navPopupMenuBlocks = navMenuBlock.querySelectorAll('.nav__popup-menu')

//     setDefaultPositionForBlocks(navPopupMenuBlocks)
//     createEventListeners()

//     function setDefaultPositionForBlocks(navPopupMenuBlocks) {
//         navPopupMenuBlocks.forEach(block => {
//             block.style.zIndex = '-100'
//             let defaultCoordinateX = block.getBoundingClientRect().x
//             block.style.marginTop = `-${defaultCoordinateX}px`
//         });
//     }

//     function createEventListeners() {
//         navMenuBlock.addEventListener('mouseover', showMenu)
//         navMenuBlock.addEventListener('mouseout', hideMenu)
//         navPopupMenuBlocks.forEach(block => {
//             block.addEventListener('mouseover', showMenu)
//         })
//     }
    
//     function showMenu() {
//         if (!event.target.closest('.nav__wrapper-link')) {
//             return
//         }
//         let targetWrapperBlock = event.target.closest('.nav__wrapper-link')
//         let targetPopupMenu = targetWrapperBlock.querySelector('.nav__popup-menu')
        
//         targetPopupMenu.style.marginTop = '0'
//         targetPopupMenu.style.zIndex = '0'
//     }

//     function hideMenu() {
//         if (!event.target.closest('.nav__wrapper-link')) {
//             return
//         }
//         let targetWrapperBlock = event.target.closest('.nav__wrapper-link')
//         let targetPopupMenu = targetWrapperBlock.querySelector('.nav__popup-menu')
//         let heightBlock = targetPopupMenu.getBoundingClientRect().height

//         targetPopupMenu.style.zIndex = '-100'
//         targetPopupMenu.style.marginTop = `-${heightBlock}px`
//     }
    
// }

// function modalWindow() {

//     document.addEventListener('mouseup', manageModalWindow)
    
//     let sourceModalWindow

//     function manageModalWindow(event) {
//         let modalWindowAttributes = event.target.dataset
//         let openingAttribute = modalWindowAttributes.openModalWindow
//         let closingAttributeOnButton = modalWindowAttributes.closeModalWindow
//         let closingAttributeOnWindow = modalWindowAttributes.modalWindow
//         let loadingData = loadingDataFromBlocks()
        
//         function loadingDataFromBlocks() {
//             let cardWithInfo = event.target.closest('[data-card-with-info]')
//             if (cardWithInfo == null) {
//                 return false
//             }
//             if (cardWithInfo) {
//                 return true
//             }
//         }

//         if (openingAttribute) {
//             let modalWindowName = openingAttribute

//             if (!loadingData) {
//                 return showModalWindow(modalWindowName)
//             }
//             sourceModalWindow = getSourceBlockModalWindow(modalWindowName)
//             transferDataToModalWindow(event, 'open', modalWindowName)
//             showModalWindow(modalWindowName)
//             return
//         }
//         if (closingAttributeOnButton) {
//             let modalWindowName = closingAttributeOnButton
//             if (!loadingData) {
//                 return hideModalWindow(modalWindowName)
//             }
//             hideModalWindow(modalWindowName)
//             transferDataToModalWindow(event, 'close', modalWindowName)
//             return
//         }
//         if (closingAttributeOnWindow) {
//             let modalWindowName = closingAttributeOnWindow
//             if (!loadingData) {
//                 return hideModalWindow(modalWindowName)
//             }
//             hideModalWindow(modalWindowName)
//             transferDataToModalWindow(event, 'close', modalWindowName)
//             return
//         }
//     }

//     function getSourceBlockModalWindow(modalWindowName) {
//         let currentBlockModalWindow = getCurrentModalWindow(modalWindowName)
//         let sourceModalWindow = currentBlockModalWindow.cloneNode(true)
//         return sourceModalWindow
//     }

//     function getCurrentModalWindow(modalWindowName) {
//         if (checkingTheUniquenessOfModalWindow(modalWindowName)) return
//         let selectorCurrentModalWindow = `[data-modal-window = '${modalWindowName}']`
//         let currentModalWindow = document.querySelector(selectorCurrentModalWindow)
//         return currentModalWindow
//     }

//     function checkingTheUniquenessOfModalWindow(modalWindowName) {
//         if (document.querySelectorAll(modalWindowName).length > 1) {
//             console.log(`Only one modal window: ${modalWindowName}!`)
//             return true
//         }
//         return false
//     }

//     function showModalWindow(modalWindowName) {
//         let currentModalWindow = getCurrentModalWindow(modalWindowName)
//         currentModalWindow.style.visibility = 'visible'
//         document.body.style.overflow = 'hidden'
//     }

//     function hideModalWindow(modalWindowName) {
//         let currentModalWindow = getCurrentModalWindow(modalWindowName)
//         currentModalWindow.style.visibility = 'hidden'
//         document.body.style.overflow = 'auto'
//     }

//     function transferDataToModalWindow(event, windowAction, modalWindowName) {
        
//         if (windowAction == 'close') {
//             setDefaultState()
//             function setDefaultState() {
//                 let closingModalWindow = getCurrentModalWindow(modalWindowName)
//                 closingModalWindow.after(sourceModalWindow)
//                 closingModalWindow.remove() 
//             }
//         }

//         if (windowAction == 'open') {
//             let currentCard = event.target.closest('[data-card-with-info]')
//             console.log(currentCard);
//             // if (currentCard == null) {
//             //     return
//             // }
//             let currentModalWindow = getCurrentModalWindow(modalWindowName)
//             let modalWindowBlockTemplates = getTemplatesForModalWindow(currentModalWindow)
//             let blocksWithAttributeModalInPage = getBlocksWithAttributeModal(currentCard)

//             blockMatching()
//             cleanModalWindowBlockTemplates()

//             function getBlocksWithAttributeModal(parentBlock) {
//                 let allBlocks = parentBlock.querySelectorAll('*')
//                 let resultArray = []
//                 allBlocks.forEach(block => {
//                     let blockAttributes = block.dataset
//                     for (let attribute in blockAttributes) {
//                         if (checkAttributeNameModal(attribute)) {
//                             resultArray.push(block)
//                             break
//                         }
//                     }
//                 });
//                 if (resultArray.length == 0) {
//                     console.log('No attribute for modal window!')
//                 }
//                 return resultArray
//             }

//             function checkAttributeNameModal(attribute) {
//                 if (attribute.startsWith('modal')) {
//                     return attribute
//                 }
//             }

//             function getTemplatesForModalWindow(currentModalWindow) {
//                 let modalWindowBlocks = getBlocksWithAttributeModal(currentModalWindow)
//                 removeRepeatingBlocks(modalWindowBlocks)
//                 function removeRepeatingBlocks(modalWindowBlocks) {
//                     modalWindowBlocks.forEach((block, index1) => {
//                         let parentBlock = block.parentNode
//                         comparisonOfBlocks()
//                         function comparisonOfBlocks() {
//                             modalWindowBlocks.forEach((comparedBlock, index2) => {
//                                 if (index1 !== index2) {
//                                     let parentComparedBlock = comparedBlock.parentNode
//                                     if (parentBlock == parentComparedBlock) {
//                                         block.innerHTML = 'template'
//                                         comparedBlock.innerHTML = 'template'
//                                         if (block.isEqualNode(comparedBlock)) {
//                                             comparedBlock.remove()
//                                         }
//                                     }
//                                 }
//                             });
//                         }
//                     });
//                 }
//                 modalWindowBlocks = getBlocksWithAttributeModal(currentModalWindow)
//                 return modalWindowBlocks
//             }
            
//             function blockMatching() {
//                 modalWindowBlockTemplates.forEach(blockTemplate => {
//                     let attributeNameBlockTemplate = getAttributeNameBlockTemplate(blockTemplate)

//                     function getAttributeNameBlockTemplate(blockTemplate) {

//                         let allAttributesBlockTemplate = blockTemplate.dataset
//                         let attributeNameBlockTemplate
//                         let numberOfIdenticalAttributes = 0
        
//                         for (let attribute in allAttributesBlockTemplate) {
//                             attributeNameBlockTemplate = checkAttributeNameModal(attribute)
//                             if (attributeNameBlockTemplate) numberOfIdenticalAttributes +=1
//                             if (numberOfIdenticalAttributes > 1) console.log(`Only one modal window attribute ${attributeNameBlockTemplate} on one element ${blockTemplate}`)
//                         }

//                         return attributeNameBlockTemplate
//                     }
    
//                     blocksWithAttributeModalInPage.forEach(blockInPage => {
//                         let attributesBlockInPage = blockInPage.dataset
    
//                         for (let attributeBlockInPage in attributesBlockInPage) {
    
//                             let attributeNameBlockInPage = checkAttributeNameModal(attributeBlockInPage)

//                             if (attributeNameBlockTemplate == attributeNameBlockInPage) {
//                                 transferData()
                                
//                                 function transferData() {
//                                     let blockIsOuterShell = blockInPage.innerHTML
//                                     if (!blockIsOuterShell) {
//                                         let copyBlockInPage = blockInPage.cloneNode(true)
//                                         let blockTemplateClasses = blockTemplate.className
//                                         copyBlockInPage.className = blockTemplateClasses
//                                         blockTemplate.after(copyBlockInPage)
//                                     }
//                                     if (blockIsOuterShell) {
//                                         let dataBlockInPage = blockInPage.innerHTML
//                                         let copyBlockTemplate = blockTemplate.cloneNode(true)
//                                         copyBlockTemplate.innerHTML = dataBlockInPage
//                                         blockTemplate.after(copyBlockTemplate)
//                                     }
//                                 }
//                             }
//                         }
//                     });
                    
//                 });
//             }

//             function cleanModalWindowBlockTemplates() {
//                 modalWindowBlockTemplates.forEach(blockTemplate => {
//                     blockTemplate.remove()
//                 })
//             }
            
//         }
//     }

// }

// function filter() {
//     if (!document.forms.popularFilters) {
//         return
//     }
//     let filtersBlockPopular = document.forms.popularFilters
//     let cloneAllBlocksInSlider
//     let wrapperForSliderBlocks
//     window.addEventListener('load', showDefaultBlocksAfterLoadPage)
    
//     filtersBlockPopular.addEventListener('change', manage)
    
//     function showDefaultBlocksAfterLoadPage() {
//         cloneAllBlocksInSlider = copyAllBlocks()
//         setHeightPrewievWindow()
//         wrapperForSliderBlocks = getWrapperForSliderBlocks()
//         manage()

//         function getWrapperForSliderBlocks() {
//             let blocksInSlider = getAllBlocksForFilter()
//             let parentBlock = blocksInSlider[0].parentNode
//             return parentBlock
//         }
//     }
    
//     function copyAllBlocks() {
//         let allBlocks = getAllBlocksForFilter()
//         let arrayCloneBlocks = []
//         for (let block of allBlocks) {
//             let cloneBlock = block.cloneNode(true)
//             arrayCloneBlocks.push(cloneBlock)
//         }
//         return arrayCloneBlocks
//     }
    
//     function manage() {
//         let valueAttributes = getValueAttributes()
//         let blocksForShowing = getBlocksForShowing(valueAttributes, cloneAllBlocksInSlider)
//         let allBlocksForFilter = getAllBlocksForFilter()
//         addBlocksInSlider(blocksForShowing)
//         removeBlocksInSlider(allBlocksForFilter)
//     }

//     function getValueAttributes() {
//         let blocksInput = filtersBlockPopular.querySelectorAll('input[type="radio"]')
//         let valueNames = []
//         blocksInput.forEach(block => {
//             if (block.checked) {
//                 valueNames.push(block.value)
//             }
//         });
//         return valueNames
//     }

//     function getBlocksForShowing(valueAttributes, cloneAllBlocksInSlider) {
//         let filteredBlock = getFilteredBlocks(cloneAllBlocksInSlider)

//         function getFilteredBlocks(cloneAllBlocksInSlider) {
//             let filteredBlocks = []
//             for (const block of cloneAllBlocksInSlider) {
//                 let valueAttributesBlock = block.dataset.cardWithInfo
//                 let conditionFirst = firstFilter()
//                 let conditionSecond = secondFilter()

//                 function firstFilter() {
//                     return valueAttributesBlock.includes(valueAttributes[0])
//                 }
//                 function secondFilter() {
//                     return valueAttributesBlock.includes(valueAttributes[1])
//                 }
                
//                 if (conditionFirst && conditionSecond) {
//                     filteredBlocks.push(block)
//                 }
//             }
//             if (filteredBlocks.length == 0) {
//                 alert('Not founds!')
//             }
//             return filteredBlocks
//         }

//         return filteredBlock
//     }

//     function getAllBlocksForFilter() {
//         let allCardsWithInfo = document.querySelectorAll('[data-card-with-info]')
//         let cardsForFilter = []
//         for (let block of allCardsWithInfo) {
//             if (block.closest('[data-cards-for-filter]')) {
//                 cardsForFilter.push(block)
//             }
//         }  
//         return cardsForFilter
//     }

//     function addBlocksInSlider(blocksForShowing) {
//         for (let block of blocksForShowing) {
//             wrapperForSliderBlocks.append(block)
//         }
//     }

//     function removeBlocksInSlider(allBlocksForFilter) {
//         for (let block of allBlocksForFilter) {
//             block.remove()
//         }
//     }

//     function setHeightPrewievWindow() {
//         let blocks = getAllBlocksForFilter()
//         let sizePrewievWindow = blocks[0].getBoundingClientRect().height
//         blocks[0].parentNode.style.height = `${sizePrewievWindow}px`
//     }
// }

// openAndClosePopularMenu()
// resultsSlider()
// popupMenuNav()
// modalWindow()
// filter()

import {openAndClosePopularMenu} from '../../common.blocks/header/header.js'
import {popupMenuNav} from '../../common.blocks/nav/nav.js'
import {modalWindow} from '../../common.blocks/modal-order-similar/modal-order-similar.js'
import {filter} from '../../common.blocks/popular/popular.js'
import {resultsSlider} from '../../common.blocks/results-slider/results-slider.js'

openAndClosePopularMenu()
popupMenuNav()
modalWindow()
filter()
resultsSlider()

// console.log('test:')

// let sourceObject = {
//     0: function() {
//         console.log('message!!!')
//     },
// }
// console.log(sourceObject);

// let someObject = {}
// let copy = sourceObject[0]

// for (let i = 0; i < 5; i++) {
//     someObject[i] = copy
// }
// console.log(someObject);

// for (let key in someObject) {
//     someObject[key]()
// }