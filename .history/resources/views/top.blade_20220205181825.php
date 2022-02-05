@extends('layouts.main')

@section('head_info')
    {{-- TDK (title,description,keywords) --}}
    <title>TOP - {{ config('app.name', 'TODO-PRO') }}</title>
    <meta name="description" content="TODO-PROは、あなたの見積り力を育てます。">
    <meta name="keywords" content="TODO-PRO,見積もる,タスク">
@endsection

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

