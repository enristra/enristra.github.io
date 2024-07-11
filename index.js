document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon')
    const navMenu = document.querySelector('.nav-menu')


    if (!menuIcon || !navMenu) {
        console.error('Menu icon or nav menu not found')
        return
    }

    console.log('Menu elements found:', { menuIcon, navMenu })
    menuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.toggle('active')
        console.log('Menu icon clicked, nav menu classes:', navMenu.classList)
    });

    //close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            navMenu.classList.remove('active')
            console.log('Clicked outside, closing menu');
        }
    })
})