var typed = new Typed("#theText", {
    strings: ["Mobile-app Developer "],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// scroll to top btn
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  }else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when the button is clicked
scrollToTopBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
});
};

AOS.init({
    mirror: true
});