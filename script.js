let rotationCount = 0;

function animate() {
    rotationCount += 120;
    gsap.to(".star", {
        rotation: '+=180',
        duration: 1,
        filter: "hue-rotate(" + rotationCount + "deg)",
    });
}

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        console.log("clicked");
        animate();
    });
});
