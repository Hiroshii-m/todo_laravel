<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'TODO-PRO') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="u-bgColor--base">

        <!-- header -->
        <section id="l-header">
            <header class="c-header u-flex u-justify-content--space-between u-align-items--center">
                <h2 class="c-header__top u-flex u-align-items--center">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'TODO-WATCH') }}
                    </a>
                </h2>
                <ul class="c-header__menu u-flex u-align-items--center">
                    <div class="c-header__tool">
                        <p href="" class="c-header__text">Web-Tool</p>
                    </div>
                    <ul class="c-header__list">
                        <li class="c-header__item">
                            <a href="" class="c-header__text">Home</a>
                        </li>
                        <li class="c-header__item">
                            <a href="" class="c-header__text">Bord</a>
                        </li>
                        @guest
                            <li class="c-header__item">
                                <a href="{{ route('login') }}" class="c-header__text">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="c-header__item">
                                    <a href="{{ route('register') }}" class="c-header__text">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="c-header__item">
                                <a class="c-header__text" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>
                            </li>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        @endguest
                    </ul>
                    <div class="c-header__hamburger">
                        <span class="c-header__bar"></span>
                        <span class="c-header__bar"></span>
                        <span class="c-header__bar"></span>
                    </div>
                </ul>
            </header>
        </section>

        {{-- フラッシュメッセージ --}}
        @if (session('flash_message'))
            <div class="alert alert-primary text-center" role="alert">
                {{ session('flash_message') }}
            </div>
        @endif

        <main class="py-4">
            @yield('content')
        </main>
        <!-- footer -->
        <section id="l-footer">
            <footer class="c-footer">
                Todo-Pro
            </footer>
        </section>
    </div>
    <script>
        window.addEventListener("DOMContentLoaded", function() {
            const $ftr = document.querySelector('#l-footer');
            // フッター要素を最下部に固定
            if(window.innerHeight > $ftr.offsetTop + $ftr.offsetHeight ){
                $ftr.classList.add("active");
            }
        });
    </script>
</body>
</html>
