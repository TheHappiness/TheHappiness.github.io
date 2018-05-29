'use strict';

(function Main() {
    document.addEventListener('DOMContentLoaded', function () {

        // set opasity
        setTimeout(function () {
            var mc = document.getElementById('main-container');
            mc.classList.add('setOpasity');
            mc.style.opacity = 1;
        }, 1000);

        // set footer
        (function addFooter() {
            var footer = document.getElementsByTagName('footer')[0];
            var elp = document.createElement('p');
            elp.style.textAlign = 'center';
            elp.textContent = new Date().getUTCFullYear().toString() + ' The Happiness \xA9';
            footer.insertAdjacentElement('afterbegin', elp);
        })();
    });
})();