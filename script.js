function mostrarMenu() {
    const menu = document.querySelector('.menu-links');
    const abierto = menu.classList.toggle('activo');
    document.querySelector('.menu-btn').setAttribute('aria-expanded', String(abierto));
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelector('.menu-links').classList.remove('activo');
        document.querySelector('.menu-btn').setAttribute('aria-expanded', 'false');
    }
});
