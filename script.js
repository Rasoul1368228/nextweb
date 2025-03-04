document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector("#mobile-menu");
    const overlay = document.querySelector("#overlay");
    const body = document.body;

    function toggleMenu() {
        mobileMenu.classList.toggle("open");
        overlay.classList.toggle("open");
        body.classList.toggle("menu-open"); // جلوگیری از اسکرول
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            overlay.classList.remove("open");
            body.classList.remove("menu-open");
        });
    }
});

<script>
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000); // تغییر اسلاید هر 3 ثانیه
    showSlide(slideIndex);
</script>

