import './lightgallery/lightgallery.umd.js';
import './lightgallery/lg-video.umd.js';

document.addEventListener("DOMContentLoaded", event => {
    document.querySelectorAll(".media-grid").forEach(gallery => {
        lightGallery(gallery, {
            speed: 500,
            selector: "[data-lightbox='true']:not(.video)"
        });
    });
})