(function canvasElemion() {
    document.addEventListener('DOMContentLoaded', () => {

        // set opasity
        setTimeout(() => {
            const mc = document.getElementById('main-container');
            mc.classList.add('setOpasity');
            mc.style.opacity = 1;
        }, 1000);

    });
})();