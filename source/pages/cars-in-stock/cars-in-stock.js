"use strict"
import {popupMenuNav} from '../../common.blocks/nav/nav.js'
import {modalWindow} from '../../common.blocks/modal-order-similar/modal-order-similar.js'
import {openAndClosePopularMenu} from '../../common.blocks/header/header.js'
// import {mainSlider} from '../../common.blocks/main-slider/main-slider.js'
import {resultsSlider} from '../../common.blocks/results-slider/results-slider.js'
import {filter} from '../../common.blocks/popular/popular.js'
popupMenuNav()
modalWindow()
openAndClosePopularMenu()
// mainSlider()
resultsSlider()
filter()