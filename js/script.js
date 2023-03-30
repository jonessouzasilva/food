const header = document.querySelector("header");

window.addEventListener("scroll", fuction() {
    header.classList.toggle("sticky", window.scrolly > 0);
});
