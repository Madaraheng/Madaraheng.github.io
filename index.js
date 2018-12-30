window.onscroll = () => {
    const nav = document.querySelector("nav");
    if (this.scrollY <= 50) {
        nav.className = "";
    } else {
        nav.className = "scroll";
    }
};

const contact = document.querySelector(".contact-us");
const aside = document.querySelector("aside");
contact.addEventListener("click", function () {
    let time = 5;
    aside.style.right = "0";
    setInterval(function () {
        time = time - 1;
        if (time == 0) {
            aside.style.right = "-100px";
        }
    }, 1000);
});


const bar = document.querySelector(".bar");
const nav = document.querySelector("nav");
bar.addEventListener("click", function () {
    let time = 3;
    nav.style.top = "0";
    setInterval(function () {
        time = time - 1;
        if (time == 0) {
            nav.style.top = "-500px";
        }
    }, 1000);
});