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
// SP時のハンバーガーメニュー
require('./common-js/SpMenu');
// フラッシュメッセージ
require('./common-js/FlashMsg');
// ボード一覧画面でボードの操作
require('./common-js/HandleBoard');
