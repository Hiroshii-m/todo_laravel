@extends('layouts.main')

@section('content')
    <!-- main -->
    <section class="p-top">
        <div class="p-top__provider">
            <h3 class="p-top__tit">TODO-PRO</h3>
            @if (Route::has('register'))
                <a class="p-top__btn u-bgColor--success" href="{{ route('register') }}">
                    {{ __('Register') }}
                </a>
            @endif
            <a class="p-top__btn u-bgColor--primary" href="{{ route('login') }}">
                {{ __('Login') }}
            </a>
        </div>
        <div class="p-top__img">
            <img src="{{ asset('img/pic1.png') }}" alt="">
        </div>
    </section>
@endsection

