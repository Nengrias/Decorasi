// Mengubah background navigasi saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 10%';
        nav.style.background = '#fff';
    } else {
        nav.style.padding = '20px 10%';
    }
});
