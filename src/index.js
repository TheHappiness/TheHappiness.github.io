(function Main() {
    document.addEventListener('DOMContentLoaded', () => {

        // set opasity
        setTimeout(() => {
            const mc = document.getElementById('main-container');
            mc.classList.add('setOpasity');
            mc.style.opacity = 1;
        }, 1000);

        // set footer
        (function addFooter() {
            const footer = document.getElementsByTagName('footer')[0];
            const elp = document.createElement('p');
            elp.style.textAlign = 'center';
            elp.textContent = new Date().getUTCFullYear().toString() + ' The Happiness \u00A9';
            footer.insertAdjacentElement('afterbegin', elp);
        })();

    });
})();