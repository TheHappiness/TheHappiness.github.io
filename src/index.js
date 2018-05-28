(function canvasElemion() {
    document.addEventListener('DOMContentLoaded', () => {

        // set opasity
        setTimeout(() => {
            const logo = document.getElementById('logo');
            logo.classList.add('setOpasity');
            logo.style.opacity = 1;
        }, 1000);

    });
})();