/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/BoardApp');


/**
 * Native JavaScript
 */
window.addEventListener("DOMContentLoaded", function() {
    const clickShow = document.querySelectorAll('.js-click-toggle-display') || null;
    const targetShow = document.querySelectorAll('.js-target-display') || null;

    if(clickShow.length !==0 && targetShow.length !== 0){
        clickShow.foreach((click, key) => {
            click.addEventListener('click', function() {
                targetShow[key].classList.toggle('show');
            });
        })
    }
});