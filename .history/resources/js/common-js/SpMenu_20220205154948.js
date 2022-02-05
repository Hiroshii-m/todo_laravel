window.addEventListener("DOMContentLoaded", function() {
    // ハンバーガーメニューの要素
    const $headerToggle = document.querySelector('.js-header-toggle') || null,
        $headerBar = document.querySelectorAll('.js-header-bar') || null,
        $headerTarget = document.querySelector('.js-header-target') || null;

    // ハンバーガーメニュー
    if($headerToggle !== null && $headerBar !== null && $headerTarget !== null) {
        $headerToggle.addEventListener('click', function() {
            // ハンバーガーを変形させる
            $headerBar.forEach(($bar) => {
                $bar.classList.toggle('active');
            });
            // メニューを表示・非表示する
            $headerTarget.classList.toggle('active');
        });
    }
});