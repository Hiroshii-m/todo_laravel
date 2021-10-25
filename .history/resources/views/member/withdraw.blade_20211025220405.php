@extends('layouts.main')

@section('content')
<section>
    <form action="{{ route('boards.retire') }}" method="post" class="p-form u-color--accent u-margin--0-auto u-padding--0-3l">
        @method('DELETE')
        @csrf
        <h2 class="c-container__tit">退会ページ</h2>
        <div class="u-margin--m-0">
            一度、退会してしまうと、これまで作成したボード、リスト、タスクは、復元する事ができません。<br>
            それでも、本当に退会しますか？
        </div>
        <button class="p-form__submit u-bgColor--error u-color--default">退会する</button>
    </form>
</section>
@endsection