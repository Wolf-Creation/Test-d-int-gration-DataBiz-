//scroll button function
var scrollTop = document.getElementById("scroll-top-btn")
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
});
scrollTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});