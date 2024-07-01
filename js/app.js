const navSlide = () => {
    //variable for cssSelectors 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //function will happen if bugger nav is click
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //animation of links and delay
        navLinks.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        //animation to from burger to X
        burger.classList.toggle('toggle');
    });
}
navSlide();