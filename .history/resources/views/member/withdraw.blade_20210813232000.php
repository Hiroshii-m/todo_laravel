@extends('layouts.main')

@section('content')
<section>
    <form action="" method="post" class="c-form">
        <h2 class="c-form__tit">退会ページ</h2>
        <div>
            一度、退会してしまうと、これまで作成したボード、リスト、タスクは、復元する事ができません。<br>
            それでも、本当に退会しますか？
        </div>
        <button class="c-form__submit u-bgColor--error">退会する</button>
    </form>
</section>
@endsection