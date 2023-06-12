const header = this.document.querySelector("header");

var getInTo = function (_) {
    header.classList.toggle("sticky", window.scrollY > 0);
    console.log(window.scrollY);
};
var changeTheme = function (_) {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    const img = document.querySelector("img.banner");
    img.setAttribute("src", "img/bg-dark.png");
}
window.addEventListener("scroll", getInTo);
window.addEventListener("touchmove", getInTo);
document.querySelector("header.sticky .theme").addEventListener("click", changeTheme);

header.classList.toggle("sticky", false);

const navigation = document.querySelector("nav");

document.querySelector(".toggle").onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');

}
const btn = document.querySelectorAll(".services .content button");
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.target.previousSibling.previousSibling.classList.toggle("more");
        if(e.target.previousSibling.previousSibling.classList.contains("more")) {
            e.target.innerText = "Read Less";
        } else {
            e.target.innerText = "Read More";
        }
    }
}
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true
});

gsap.timeline({
    scrollTrigger: {
        trigger: "section.fuel",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true,
    }
})
.from(".fuel .text", { scale: 0 })
.from(".fuel .box0", {scale: 0})
.to(".fuel .text", {scale: 0})
.from(".fuel p", {scale: 0})
.from(".fuel .box1", {opacity : 0})
.from(".fuel .box2", {scale: 0})
.from(".fuel .box3", {scale: 0})
.from(".fuel .box4", {scale: 0})
.from(".fuel .box5", {scale: 0})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.care",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".care .text", { scale: 0 })
.from(".care .box0", {scale: 0})
.to(".care .text", {scale: 0})
.from(".care p", {scale: 0})
.from(".care .box1", {opacity : 0})
.from(".care .box2", {scale: 0})
.from(".care .box3", {scale: 0})
.from(".care .box4", {scale: 0})
.from(".care .box5", {scale: 0})
.from(".care .box6", {scale: 0})
.from(".care .box7", {scale: 0})
.from(".care .box8", {scale: 0})
.from(".care .box9", {scale: 0})
.from(".care .box10", {scale: 0})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.restaurant",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".restaurant .text", { scale: 0 })
.from(".restaurant .box0", {scale: 0})
.to(".restaurant .text", {scale: 0})
.from(".restaurant p", {scale: 0})
.from(".restaurant .box1", {opacity : 0})
.from(".restaurant .box2", {scale: 0})
.from(".restaurant .box3", {scale: 0})
.from(".restaurant .box4", {scale: 0})
.from(".restaurant .box5", {scale: 0})
.from(".restaurant .box6", {scale: 0})
.from(".restaurant .box7", {scale: 0})
.from(".restaurant .box8", {scale: 0})
.from(".restaurant .box9", {scale: 0})
.from(".restaurant .box10", {scale: 0})
.from(".restaurant .box11", {scale: 0})
.from(".restaurant .box12", {scale: 0})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.icontact",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".icontact .text", { scale: 0 })
.from(".icontact .box0", {scale: 0})
.to(".icontact .text", {scale: 0})
.from(".icontact p", {scale: 0})
.from(".icontact .box1", {opacity : 0})
.from(".icontact .box2", {scale: 0})
.from(".icontact .box3", {scale: 0})
.from(".icontact .box4", {scale: 0})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.codesite",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".codesite .text", { scale: 0 })
.from(".codesite .box0", {scale: 0})
.to(".codesite .text", {scale: 0})
.from(".codesite p", {scale: 0})
.from(".codesite .box1", {opacity : 0})
.from(".codesite .box2", {scale: 0})
.from(".codesite .box3", {scale: 0})
.from(".codesite .box4", {scale: 0})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.esim",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".esim .text", { scale: 0 })
.from(".esim .box0", {scale: 0})
.to(".esim .text", {scale: 0})
.from(".esim p", {scale: 0})
.from(".esim .box1", {opacity : 0})
.from(".esim .box2", {scale: 0})
.from(".esim .box3", {scale: 0})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.ching4g",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".ching4g .text", { scale: 0 })
.from(".ching4g .box0", {scale: 0})
.to(".ching4g .text", {scale: 0})
.from(".ching4g p", {scale: 0})
.from(".ching4g .box1", {opacity : 0})
.from(".ching4g .box2", {scale: 0})

gsap.timeline({
    scrollTrigger: {
        trigger: "section.nursery",
        start: "center center",
        end: "bottom top",
        markers: false,
        scrub: true,
        pin: true
    }
})
.from(".nursery .text", { scale: 0 })
.from(".nursery .box0", {scale: 0})
.to(".nursery .text", {scale: 0})
.from(".nursery p", {scale: 0})
.from(".nursery .box1", {opacity : 0})
.from(".nursery .box2", {scale: 0})
.from(".nursery .box3", {scale: 0})
.from(".nursery .box4", {scale: 0})