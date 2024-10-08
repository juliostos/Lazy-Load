const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if(!entry.isIntersectiong) return
        const image = entry.target

        image.src = image.src.replace("&Q=1&", "&Q=1000");

        observer.unobserve(image);
    })
}, {})
images.forEach((image) => {
    observer.observe(image);
});