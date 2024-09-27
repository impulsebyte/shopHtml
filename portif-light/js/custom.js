


// Function to adjust heights and paddings
function adjustHeightsAndPadding() {
    // Set min-height of the body to the outer height of the window
    document.body.style.minHeight = `${window.outerHeight}px`;

    // Select the body section
    const bodySection = document.querySelector('.wrapper');
    if (bodySection) {
        // Set min-height of body section to the outer height of the window
        bodySection.style.minHeight = `${window.outerHeight}px`;

        // Set padding-top of body section to the height of the header
        const header = document.querySelector('header');
        if (header) {
            bodySection.style.paddingTop = `${header.offsetHeight}px`;
        }

        // Set padding-bottom of body section to the height of the footer
        const footer = document.querySelector('footer');
        if (footer) {
            bodySection.style.paddingBottom = `${footer.offsetHeight}px`;
        }
    }
}

// Set a timeout to call the function after 50 milliseconds
setTimeout(adjustHeightsAndPadding, 50);

// Add an event listener to call the function when the window is resized
window.addEventListener('resize', adjustHeightsAndPadding);


gsap.from('.banner-content, .about-main, .work-main, .contact-main, .privacy-main ', {opacity: 0, duration: 1, y: -50, ease: 'Power2.easeInOut' })
gsap.from('.banner-img, .about-img',{duration:1, y:30, opacity:0, delay:0.4}) 



   // Header Js start here // 
         window.onscroll = function () {
            const header = document.getElementById('header');
            if (window.scrollY > 50) { // When user scrolls 50px down from the top
               header.classList.add('position-fixed');
            } else {
               header.classList.remove('position-fixed');
            }
         };
         
         // slider Js start here // 
         
         let SwiperTop = new Swiper
         
            ('.service-slider .swiper', {
               spaceBetween: 0,
               centeredSlides: true,
               speed: 7000,
         
               autoplay: {
                  delay: 1,
               },
         
               loop: true,
               slidesPerView: '4',
               allowTouchMove: false,
               spaceBetween: 15,
               disableOnInteraction: true,
         
               breakpoints: {
                  767: {
                     slidesPerView: 7,
         
                  }
               }
            });
         
         
         
         // box Scale // 
         
         const tl = gsap.timeline();
         
         tl.from(
            ".row-cols-lg-3", {
            x: "-100%",
            duration: 1
         }
         )
         
         tl.from(
            ".service-item", {
            x: "-100%",
            opacity: 0,
            duration: 2,
            ease: "back",
            scale: "1.1"
         }
         )
         
         
         // images Scale //
         
         const images = document.querySelectorAll(".project-item img");
         images.forEach(image => {
            image.addEventListener("mouseover", () => {
               gsap.to(image, {
                  scale: 1.3,
                  duration: 0.5,
                  ease: "power2.out"
               });
            });
         
            image.addEventListener("mouseout", () => {
               gsap.to(image, {
                  scale: 1,
                  duration: 0.5,
                  ease: "power2.out"
               });
            });
         });
         
    