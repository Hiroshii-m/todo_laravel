@extends('layouts.main')

@section('content')
<section>
    <form action="{{ route('boards.retire') }}" method="post" class="c-form u-color--accent u-margin--m-0">
        @method('DELETE')
        @csrf
        <h2 class="c-form__tit">退会ページ</h2>
        <div class="u-margin--m-0">
            一度、退会してしまうと、これまで作成したボード、リスト、タスクは、復元する事ができません。<br>
            それでも、本当に退会しますか？
        </div>
        <button class="c-form__submit u-bgColor--error u-color--default">退会する</button>
    </form>
</section>
@endsection