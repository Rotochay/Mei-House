/* =========================================
   HUNGER HATCH
   ========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");


// MOBILE MENU

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});


// SIMPLE SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".intro-content, .food-card, .statement-inner, .gallery-item, .visit-left, .visit-right"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// CURRENT YEAR

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}
