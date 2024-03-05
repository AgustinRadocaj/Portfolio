function redireccion (section) {
    var section = document.getElementById(section)
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
    }
}