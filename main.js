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
    
    // Register the GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Horizontal scroll effect on the Kinxsound logos banner
    if (document.querySelector('.kxs-banner_list')) {
        gsap.to('.kxs-banner_list', {
            scrollTrigger: {
                trigger: '.kxs-banner_list',
                start: 'top bottom',
                end: 'bottom top',
                scrub: .25
            },
            xPercent: -35,
            ease: 'none'
        });
    }

    // Horizontal scroll effect on the stripes banner
    if (document.querySelector('.stripes-banner_list')) {
        gsap.to('.stripes-banner_list', {
            scrollTrigger: {
                trigger: '.stripes-banner_list',
                start: 'top bottom',
                end: 'bottom top',
                scrub: .25,
               
            },
            xPercent: -35,
            ease: 'none'
        });
    }

    // Parallex effect on full-width images
    if (document.querySelector('.full-image_wrapper')) {
        gsap.utils.toArray(".full-image_wrapper").forEach(function(wrapper) {
        let image = wrapper.querySelector("img");
        
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: wrapper,
            scrub: 0.25,
            },
        }); 

        tl.from(image, {
            yPercent: -12.5,
            ease: 'none',
        }).to(image, {
            yPercent: 12.5,
            ease: 'none',
        }); 
        });
    }

    // Target items with data-animate attribute of "appear" to animate
    if (document.querySelector('[data-animate=appear]')) {
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
    }

    if (document.querySelector('[data-animate=appear-children]')) {
        document.querySelectorAll('[data-animate=appear-children]').forEach(parent => {
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
    }

});