const container = document.querySelector('.container')
const sections = gsap.utils.toArray('.container section')

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth,
    }
})