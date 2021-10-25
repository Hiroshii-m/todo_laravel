<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'TODO-WATCHER') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    {{-- Favicon --}}
    <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}" type="image/x-icon">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/fontawesome/css/all.css') }}">

    <!-- Styles -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>
<body class="u-bgColor--base">
    <div id="app" class="">

        <!-- header -->
        <section id="l-header">
            <header class="p-header">
                <div class="p-header__inner">
                    <h2 class="p-header__top">
                        <a class="navbar-brand" href="{{ url('/') }}">
                            {{ config('app.name', 'TODO-PRO') }}
                        </a>
                    </h2>
                    <div class="p-header__menu">
                        <ul class="p-header__list js-header-target">
                            <li class="p-header__item">
                                <a href="{{ url('/') }}" class="p-header__text">{{ __('Home') }}</a>
                            </li>
                            @guest
                                <li class="p-header__item">
                                    <a href="{{ route('login') }}" class="p-header__text">{{ __('Login') }}</a>
                                </li>
                                @if (Route::has('register'))
                                    <li class="p-header__item">
                                        <a href="{{ route('register') }}" class="p-header__text">{{ __('Register') }}</a>
                                    </li>
                                @endif
                            @else
                                <li class="p-header__item">
                                    <a href="{{ route('boards') }}" class="p-header__text">{{ __('Board') }}</a>
                                </li>
                                <li class="p-header__item">
                                    <a class="p-header__text" href="{{ route('logout') }}"
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
                        <div class="p-header__hamburger js-header-toggle">
                            <span class="p-header__bar js-header-bar"></span>
                            <span class="p-header__bar js-header-bar"></span>
                            <span class="p-header__bar js-header-bar"></span>
                        </div>
                    </div>
                </div>
            </header>
        </section>

        {{-- フラッシュメッセージ --}}
        @if (session('flash_message'))
            <div class="c-flashMsg js-show-msg" role="alert">
                {{ session('flash_message') }}
            </div>
        @endif

        <main id="l-main" class="py-4">
            @yield('content')
        </main>
        <!-- footer -->
        <section id="l-footer">
            <footer class="p-footer">
                <div class="p-footer__menu">
                    <a href="" class="p-footer__item">利用規約</a>
                    <a href="" class="p-footer__item">お問い合わせ</a>
                    <a href="" class="p-footer__item">個人情報保護方針</a>
                    <a href="" class="p-footer__item">ヘルプ</a>
                    <a href="{{ route('boards.withdraw') }}" class="p-footer__item">退会</a>
                </div>
                <p class="p-footer__tit">Todo-Pro</p>
                <p class="p-footer__tit">Copyright&copy;piroshiki</p>
            </footer>
        </section>
    </div>
</body>
</html>
