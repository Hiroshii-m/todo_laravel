window.addEventListener("DOMContentLoaded", function() {
    // フラッシュメッセージの要素
    const $showMsg = document.querySelector(".js-show-msg") || null;
    
    // フラッシュメッセージの動き
    if($showMsg !== null) {
        if($showMsg.textContent.replace(/^[\s　]+|[\s　]+$/g, "").length) {
            setTimeout(function(){ $showMsg.classList.add('active'); }, 10);
            setTimeout(function(){ $showMsg.classList.remove('active'); }, 4000);
        }
    }
});