document.addEventListener("DOMContentLoaded", (event) => {
    
    // const lenis = new Lenis({
    //     duration: 1.2,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   })
      
    //   function raf(time) {
    //     lenis.raf(time)
    //     requestAnimationFrame(raf)
    //   }
      
    //   requestAnimationFrame(raf)
    
    gsap.registerPlugin(ScrollTrigger)
    
    // Horizontal scroll effect on the Kinxsound logos banner
    gsap.to('.kxs-banner_list', {
        scrollTrigger: {
            trigger: '.kxs-banner_list',
            start: 'top bottom',
            end: 'bottom top',
            scrub: .25,
        },
        xPercent: -33
    });

    // Horizontal scroll effect on the stripes banner
    gsap.to('.stripes-banner_list', {
        scrollTrigger: {
            trigger: '.stripes-banner_wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: .25,
        },
        xPercent: -33
    });

    // Parallex effect on full-width images
    gsap.utils.toArray(".full-image_wrapper").forEach(function(wrapper) {
    let image = wrapper.querySelector("img");
    
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          scrub: 0.25,
        },
    }); 

    tl.from(image, {
        yPercent: -25,
        ease: "none",
      }).to(image, {
        yPercent: 25,
        ease: "none",
      }); 
    });

    // Target items with data-animate attribute of "appear" to animate
    gsap.fromTo("[data-animate=appear]", 
        { y: 56, opacity: 0 }, // From state
        { 
            y: 0, opacity: 1, // To state
            duration: 1,
            scrollTrigger: {
                trigger: "[data-animate=appear]",
                start: "top 80%",
            }
        }
    );

    document.querySelectorAll("[data-animate='appear-children']").forEach(parent => {
        gsap.fromTo(
            parent.children, // Target direct children
            { y: 56, opacity: 0 }, // From state
            { 
                y: 0, opacity: 1, // To state
                duration: .64,
                stagger: 0.16, // Stagger delay for each child
                scrollTrigger: {
                    trigger: parent,
                    start: "top 80%",
                }
            }
        );
    });

});