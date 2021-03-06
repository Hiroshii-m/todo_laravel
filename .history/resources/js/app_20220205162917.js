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

// ボードリスト
require('./components/BoardApp');
// TODOリスト
require('./components/ListApp');

/**
* JavaScript File
*/
require('./common-js/SpMenu');
window.addEventListener("DOMContentLoaded", function() {
    // ボード一覧のボード操作用の要素
    const clickShow = document.querySelectorAll('.js-click-toggle-display') || null,
        targetShow = document.querySelectorAll('.js-target-display') || null;
    // フラッシュメッセージの要素
    const $showMsg = document.querySelector(".js-show-msg") || null;

    // ボード一覧のボード操作ボタンをイベント
    if(clickShow !== null && targetShow !== null){
        document.addEventListener('click', e => {
            targetShow.forEach( el => {
                el.classList.remove('show');
            });
            if(!e.target.closest('.js-click-toggle-display')) {
            }else{
                e.target.nextElementSibling.classList.add('show');
            }
        })
    }
    
    // フラッシュメッセージの動き
    if($showMsg !== null) {
        if($showMsg.textContent.replace(/^[\s　]+|[\s　]+$/g, "").length) {
            setTimeout(function(){ $showMsg.classList.add('active'); }, 10);
            setTimeout(function(){ $showMsg.classList.remove('active'); }, 4000);
        }
    }
});