@extends('layouts.main')

@section('content')
<!-- form -->
<section id="l-main">
    <form class="c-form" method="POST" action="{{ route('login') }}">
        @csrf

        <h2 class="c-form__tit">{{ __('Login') }}</h2>

        <label for="email" class="c-form__label">
            {{ __('E-Mail Address') }}
            <input id="email" type="text" class="c-form__input" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
            @error('email')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
        <label for="password" class="c-form__label">
            {{ __('Password') }}
            <input id="password" type="password" class="c-form__input" name="password" required autocomplete="new-password" autofocus>
            @error('password')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
        <label for="remember">
            {{ __('Remember Me') }}
            <input class="c-form__check" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
        </label>
        
        <button class="c-form__submit u-bgColor--primary">{{ __('Login') }}</button>
        @if (Route::has('password.request'))
            <a class="btn btn-link" href="{{ route('password.request') }}">
                {{ __('Forgot Your Password?') }}
            </a>
        @endif
        
    </form>
</section>
@endsection
