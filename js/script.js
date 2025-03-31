document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
};

const savedMode = localStorage.getItem("darkMode");
if (savedMode === "true") {
  document.body.classList.add("dark-mode");
}

// اسکریپت شمارنده انیمیشنی
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    startVal: 0,
    duration: 2,
    separator: ",",
    decimal: ".",
  };

  var counter1 = new CountUp("counter1", 0, 120, 0, 2, options);
  if (!counter1.error) {
    counter1.start();
  } else {
    console.error(counter1.error);
  }

  var counter2 = new CountUp("counter2", 0, 55, 0, 2, options);
  if (!counter2.error) {
    counter2.start();
  } else {
    console.error(counter2.error);
  }

  var counter3 = new CountUp("counter3", 0, 65, 0, 2, options);
  if (!counter3.error) {
    counter3.start();
  } else {
    console.error(counter3.error);
  }
});
const menuToggle = document.querySelector(".menu-toggle");
const verticalMenu = document.querySelector(".vertical-menu");

menuToggle.addEventListener("click", () => {
  verticalMenu.classList.toggle("active");
});

var a = prompt(" سن خود را وارد کنید");
var year = 1404 - a;
alert("خوش اومدید . سن شما به تاریخ شمسی میشه : " + year);
