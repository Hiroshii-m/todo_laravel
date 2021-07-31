@extends('layouts.welcome')

@section('content')
    <!-- main -->
    <section id="l-main">
        <div class="p-main">
            <div class="p-main__provider">
                <h3 class="p-main__tit">TODO-PRO</h3>
                @if (Route::has('register'))
                    <div class="p-main__btn u-bgColor--success">
                        <a href="{{ route('register') }}">ユーザー登録</a>
                    </div>
                @endif
                <div class="p-main__btn u-bgColor--primary">
                    <a href="{{ route('login') }}">ログイン</a>
                </div>
            </div>
            <div class="p-main__img">
                <img src="{{ asset('img/pic1.png') }}" alt="">
            </div>
        </div>
    </section>
@endsection
