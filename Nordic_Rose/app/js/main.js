let navLinks = document.getElementsByClassName('nav-link')
navLinks = Array.prototype.filter.call(navLinks, function(link) {
    return link.nodeName === 'A';
});

let activeLinkUnderline = document.getElementById('activeLinkUnderline')

navLinks.forEach(element => {
    element.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('nav-link_active')
        })
        element.classList.add('nav-link_active')
        activeLinkUnderline.classList.remove('navbar__activ-link-underline_1', 'navbar__activ-link-underline_2', 'navbar__activ-link-underline_3', 'navbar__activ-link-underline_4')
        activeLinkUnderline.classList.add(`navbar__activ-link-underline_${navLinks.indexOf(element) + 1}`)
    })
});