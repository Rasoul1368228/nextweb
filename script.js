// تابع برای باز و بسته کردن منو موبایل
function toggleMenu() {
        document.getElementById('mobile-menu').classList.toggle('open');
        document.getElementById('overlay').classList.toggle('open');
    }
    
    // بستن منو با کلیک روی Overlay
    document.getElementById('overlay').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('open');
        document.getElementById('overlay').classList.remove('open');
    });
    
    // اضافه کردن رویداد به منو همبرگری برای باز و بسته کردن منو
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
    function toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('open');
    }
        