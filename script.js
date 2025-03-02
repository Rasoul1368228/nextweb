document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector("#mobile-menu");
    const overlay = document.querySelector("#overlay");

    // تابع برای باز و بسته کردن منو
    function toggleMenu() {
        mobileMenu.classList.toggle("open");
        overlay.classList.toggle("open");
    }

    // اضافه کردن رویداد کلیک به دکمه همبرگری
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    // بستن منو با کلیک روی پس‌زمینه (Overlay)
    if (overlay) {
        overlay.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
            overlay.classList.remove("open");
        });
    }
});
