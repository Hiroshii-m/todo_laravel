@extends('layouts.main')

@section('content')
    <!-- main -->
    <section id="l-main">
        <div class="p-main">
            <div class="p-main__provider">
                <h3 class="p-main__tit">TODO-PRO</h3>
                @if (Route::has('register'))
                    <a class="p-main__btn u-bgColor--success" href="{{ route('register') }}">
                        {{ __('Register') }}
                    </a>
                @endif
                <a class="p-main__btn u-bgColor--primary" href="{{ route('login') }}">
                    {{ __('Login') }}
                </a>
            </div>
            <div class="p-main__img">
                <img src="{{ asset('img/pic1.png') }}" alt="">
            </div>
        </div>
    </section>
@endsection

