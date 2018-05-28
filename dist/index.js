'use strict';

(function canvasElemion() {
    document.addEventListener('DOMContentLoaded', function () {

        // set opasity
        setTimeout(function () {
            var logo = document.getElementById('logo');
            logo.classList.add('setOpasity');
            logo.style.opacity = 1;
        }, 1000);
    });
})();