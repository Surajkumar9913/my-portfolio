// Typing text
var typed = new Typed(".typing-text", {
    strings: [
        "Programmer",
        "Web Designer",
        "Front-End Developer",
        "Web Developer",
        "Full Stack Developer",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
});
// Typing text end

// Toggle Navbar
const mobileMenu = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav");

mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});
// Toggle Navbar end

// tilt on image
function tilt(event, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const tiltX = (mouseY / centerY) * 20;
    const tiltY = -(mouseX / centerX) * 20;

    element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
}
// tilt end

// Scroll Animation on element
AOS.init({
    offset: 200,
    duration: 800,
});

//   Emailjs functinality


function sendMail() {
  // add your code for EmailJs
  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  span.onclick = function () {
      modal.style.display = "none";
  };
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
      
}
// Toast///////////////////

window.addEventListener("load", () => {
    const toast = document.getElementById("toast");
    const whatsappBtn = document.getElementById("whatsappBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    setTimeout(() => {
        toast.classList.remove("hidden");
    }, 1000);

    whatsappBtn.addEventListener("click", () => {
        window.open("https://wa.me/8433140785", "_blank");
        toast.classList.add("hidden");
    });

    cancelBtn.addEventListener("click", () => {
        toast.classList.add("hidden");
    });
    window.onclick = function (event) {
        const toast = document.getElementById("toast");

        if (!toast.contains(event.target)) {
            toast.classList.add("hidden");
        }
    };
});

//////////////////////////////////
// scroll top
window.onscroll = function () {
    if (window.scrollY > 100) {
        document.querySelector(".scroll-top").classList.add("active");
    } else {
        document.querySelector(".scroll-top").classList.remove("active");
    }
};

// Developer tools off

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        // Ctrl+Shift+I
        return false;
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        // Ctrl+Shift+C
        return false;
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        // Ctrl+Shift+J
        return false;
    } else if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        // Ctrl+U
        return false;
    }
};