const handleIntersect = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
            // handleAnimation();
            Array.from(circles).forEach((circle) => {
                circle.classList.add("");
            });
        } else {
            // handleAnimation();
            Array.from(circles).forEach((circle) => {
                // circle.classList.remove("");
            });
        };
    });
};

const handleAnimation = () => {
    Array.from(circles).forEach((circle) => {
        console.log(circle)
        setTimeout( () => {circle.classList.toggle("bg-pink")}, 1000);
    });
};

const circles = document.getElementsByClassName("xp-circles");
const target = document.getElementById("experience");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
};

let observer = new IntersectionObserver(handleIntersect, options);
observer.observe(target);