const headerMenu = document.querySelector(".header-menu"),
dnaTxt = document.querySelector(".dna-head_txt"),
workTxt = document.querySelector(".works-head_txt"),
compName = document.getElementById("name"),
whyTxt = document.getElementById("whyTxt"),
blogHead = document.getElementById("blogHead"),
clientTxt = document.querySelector(".clients-txt"),
goToTopBtn = document.querySelector(".go-to-top");

window.addEventListener("scroll", () => {

    window.scrollY > 550 ? dnaTxt.classList.add("active") : dnaTxt.classList.remove("active");

    window.scrollY > 1350 ? workTxt.classList.add("active") : workTxt.classList.remove("active");

    window.scrollY <= 100 ? compName.classList.add("active") : compName.classList.remove("active")

    window.scrollY >= 2200 ? whyTxt.classList.add("active") : whyTxt.classList.remove("active")

    window.scrollY >= 2850 ? blogHead.classList.add("active") : blogHead.classList.remove("active");

    window.scrollY >= 3620 ? clientTxt.classList.add("active") : clientTxt.classList.remove("active");
})

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.container',
    smooth: 1,
});

goToTopBtn.addEventListener("click", () => {
    window.scrollY = 0;
})