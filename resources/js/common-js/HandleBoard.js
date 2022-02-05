window.addEventListener("DOMContentLoaded", function() {
    // ボード一覧のボード操作用の要素
    const clickShow = document.querySelectorAll('.js-click-toggle-display') || null,
        targetShow = document.querySelectorAll('.js-target-display') || null;

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
});