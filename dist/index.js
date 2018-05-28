'use strict';

(function canvasElemion() {
    document.addEventListener('DOMContentLoaded', function () {

        // set opasity
        setTimeout(function () {
            var mc = document.getElementById('main-container');
            mc.classList.add('setOpasity');
            mc.style.opacity = 1;
        }, 1000);
    });
})();