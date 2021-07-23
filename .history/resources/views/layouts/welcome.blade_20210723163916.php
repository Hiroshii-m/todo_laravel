<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Todo-Pro</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div class="">
           
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
                            @if (Route::has('login'))
                                <div class="top-right links">
                                    @auth
                                        <a href="{{ url('/home') }}">Home</a>
                                    @else
                                        <a href="{{ route('login') }}">Login</a>
                
                                        @if (Route::has('register'))
                                            <a href="{{ route('register') }}">Register</a>
                                        @endif
                                    @endauth
                                </div>
                            @endif
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

        </div>
    </body>
</html>
