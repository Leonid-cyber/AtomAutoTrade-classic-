function popupMenuNav() {
    
    const navMenuBlock = document.querySelector('.nav')

    document.addEventListener('mouseover', openMenu)
    document.addEventListener('mouseout', closeMenu)

    function openMenu() {

        const blockTarget = event.target.closest('.nav__wrapper-links')
        if (!blockTarget) {
            return
        }

        const navMenu = blockTarget.querySelector('.nav__popup-menu')
        if (!navMenu) {
            return
        }
        
        navMenu.classList.add('nav__popup-menu--open')
    }

    function closeMenu() {

        const blockTarget = event.target.closest('.nav__wrapper-links')
        if (!blockTarget) {
            return
        }

        const blockPopupMenu = event.relatedTarget.closest('.nav__popup-menu')
        if (blockPopupMenu) {
            return
        }

        const currentPopupBlocks = navMenuBlock.querySelectorAll('.nav__popup-menu')

        currentPopupBlocks.forEach(blockMenuPopup => {
            blockMenuPopup.classList.remove('nav__popup-menu--open')
        });
        
    }
    
}
popupMenuNav()