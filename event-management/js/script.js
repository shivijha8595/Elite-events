// ==========================
// MOBILE NAVBAR
// ==========================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ==========================
// CLOSE NAVBAR ON LINK CLICK
// ==========================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

// ==========================
// HEADER BACKGROUND ON SCROLL
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.style.background = "#000";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.5)";

    }
    else{

        header.style.background =
        "rgba(0,0,0,0.8)";

        header.style.boxShadow = "none";

    }

});

// ==========================
// FAQ ACCORDION
// ==========================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

// ==========================
// FAQ OPEN/CLOSE ANIMATION
// ==========================

const faqAnswers =
document.querySelectorAll(".faq-answer");

faqAnswers.forEach(answer => {

    answer.style.display = "none";

});

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    const answer =
    item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }
        else{

            faqAnswers.forEach(allAnswers => {

                allAnswers.style.display = "none";

            });

            answer.style.display = "block";

        }

    });

});

// ==========================
// ACTIVE FAQ ICON
// ==========================

faqItems.forEach(item => {

    const icon =
    item.querySelector(".faq-question i");

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        if(icon.classList.contains("fa-plus")){

            document
            .querySelectorAll(".faq-question i")
            .forEach(allIcons => {

                allIcons.classList.remove("fa-minus");
                allIcons.classList.add("fa-plus");

            });

            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }
        else{

            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        }

    });

});

// ==========================
// PORTFOLIO FILTER BUTTONS
// ==========================

const filterBtns =
document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelector(".filter-btn.active")
        .classList.remove("active");

        btn.classList.add("active");

    });

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// FORM SUBMIT MESSAGE
// ==========================

const forms =
document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank You! Your form has been submitted successfully."
        );

        form.reset();

    });

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements =
document.querySelectorAll(
    ".service-box, .service-card, .portfolio-item, .portfolio-box, .blog-card, .package-card, .testimonial-card, .team-box, .choose-box, .benefit-box, .process-box"
);

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 0.6s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ==========================
// AUTO YEAR IN FOOTER
// ==========================

const footerText =
document.querySelector(".footer-bottom p");

if(footerText){

    const year = new Date().getFullYear();

    footerText.innerHTML =
    `© ${year} Elite Events | All Rights Reserved`;

}

// ==========================
// LOADER EFFECT
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity 0.5s ease";

        document.body.style.opacity = "1";

    }, 100);

});

// ==========================
// ACTIVE NAV LINK ON SCROLL
// ==========================

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){

            link.classList.add("active");

        }

    });

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "scale(1)";

    });

});

// ==========================
// IMAGE HOVER EFFECT
// ==========================

const images =
document.querySelectorAll(
    ".portfolio-item img, .blog-image img"
);

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.filter =
        "brightness(80%)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.filter =
        "brightness(100%)";

    });

});

// ==========================
// END OF SCRIPT
// ==========================