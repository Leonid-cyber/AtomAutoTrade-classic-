function scrollToTopPage() {

    const buttonsForScroll = document.querySelectorAll('.on-screen-navigation')

    buttonsForScroll.forEach(button => {
        button.addEventListener('click', scrollToTop)
    });

    function scrollToTop() {
        window.scrollTo( {
            top: 0,
            left: 0,
            behavior: 'smooth'
        } )
    }
}
scrollToTopPage()