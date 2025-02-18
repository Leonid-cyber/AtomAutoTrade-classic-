function openAndClosePopularMenu() {
    const popularMenuBlock = document.querySelector('.menu-popular')
    
    if (!checkingBlockAvailability()) {
        return
    }
    const popularMenuButtonOpen = document.querySelector('.header__button-menu')
    const popularMenuButtonClose = document.querySelector('.menu-popular__close-menu')

    setDefaultPosition()

    popularMenuButtonOpen.addEventListener('mousedown', showBlock)
    popularMenuButtonClose.addEventListener('mousedown', hideBlock)

    function checkingBlockAvailability() {
        if (popularMenuBlock) {
            return true
        }
        console.log('No block "menu-popular"!');
        return false
    }
    
    function setDefaultPosition() {
        popularMenuBlock.classList.remove('menu-popular--show')
    }

    function showBlock() {
        popularMenuBlock.classList.add('menu-popular--show')
        lockAndUnlockScrollBody(true)
    }

    function hideBlock() {
        setDefaultPosition()
        lockAndUnlockScrollBody(false)
    }

    function lockAndUnlockScrollBody(state) {
        if (state == true) {
            document.body.style.overflow = 'hidden';
        }
        if (state == false) {
            document.body.style.overflow = 'visible';
        }
    }

}
openAndClosePopularMenu()
// export {openAndClosePopularMenu}
// export default {openAndClosePopularMenu}
