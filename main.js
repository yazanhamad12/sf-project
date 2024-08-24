window.onscroll = function() {
    const nav = document.querySelector(".navb");
    const ground = document.querySelector(".ground");
    const productss = document.querySelector(".Productss");
    const about = document.querySelector(".about");

    const scrollPosition = window.scrollY + nav.offsetHeight;

    if (scrollPosition >= about.offsetTop) {
        nav.style.backgroundColor = "white";
    } else if (scrollPosition >= productss.offsetTop) {
        nav.style.backgroundColor = "#C1DCDC";
    } else if (scrollPosition >= ground.offsetTop) {
        nav.style.backgroundColor = "white"; 
    } else {
        nav.style.backgroundColor = "#C1DCDC";
    }
};
