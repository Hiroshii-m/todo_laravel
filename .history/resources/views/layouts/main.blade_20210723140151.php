<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ $user->email }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

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
                                <a href="" class="c-header__text">Login</a>
                            </li>
                            <li class="c-header__item">
                                <a href="" class="c-header__text">Signup</a>
                            </li>
                        @else
                            <li class="c-header__item">
                                <a href="" class="c-header__text">Logout</a>
                            </li>
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
    </div>
</body>
</html>
