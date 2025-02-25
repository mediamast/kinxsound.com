document.addEventListener("DOMContentLoaded", () => {
    
    // 🚀 Initialize Lenis Smooth Scrolling
    // if (typeof Lenis !== 'undefined') {
    //     const lenis = new Lenis({
    //         duration: 1.2,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //     });

    //     function raf(time) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }
        
    //     requestAnimationFrame(raf);
    // }

    // ✅ Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Function to create horizontal scroll effects
    function horizontalScroll(selector, xPercent) {
        const el = document.querySelector(selector);
        if (el) {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.25,
                },
                xPercent: xPercent,
                ease: 'none',
            });
        }
    }

    // 🖼️ Apply Horizontal Scroll Effects
    horizontalScroll('.kxs-banner_list', -35);
    horizontalScroll('.stripes-banner_list', -35);

    // ✅ Parallax Effect on Full-Width Images
    gsap.utils.toArray(".full-image_wrapper").forEach(wrapper => {
        const image = wrapper.querySelector("img");
        if (image) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    scrub: 0.25,
                },
            }).fromTo(image, 
                { yPercent: -12.5 },
                { yPercent: 12.5, ease: 'none' }
            );
        }
    });

    // ✅ Appear Animation for Elements with `data-animate="appear"`
    gsap.utils.toArray("[data-animate='appear']").forEach(el => {
        gsap.set(
            el,
            {
                y: 56,
                opacity: 0
            }
        ),
        gsap.to(el, 
            { 
                y: 0, 
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    });

    // ✅ Staggered Appear Animation for Child Elements with `data-animate="appear-children"`
    gsap.utils.toArray("[data-animate='appear-children']").forEach(parent => {
        gsap.set(
            parent.children, 
            { 
                y: 48, 
                opacity: 0 
            }
        ),
        gsap.to(
            parent.children,
            { 
                y: 0,
                opacity: 1,
                duration: 0.64,
                stagger: 0.16,
                scrollTrigger: {
                    trigger: parent,
                    start: "top 80%",
                }
            }
        );
    });

});