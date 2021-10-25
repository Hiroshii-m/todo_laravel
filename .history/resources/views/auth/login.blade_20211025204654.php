@extends('layouts.main')

@section('content')
<!-- form -->
<form class="c-form u-margin--0-auto" method="POST" action="{{ route('login') }}">
    @csrf

    <h2 class="c-container__tit u-margin--xl-0 u-text--center">{{ __('Login') }}</h2>

    <label for="email" class="u-block u-margin-bottom--m">
        {{ __('E-Mail Address') }}
        <input id="email" type="text" class="c-input u-padding--s-m u-margin-bottom--m" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
        @error('email')
            <p class="u-color--error">{{ $message }}</p>
        @enderror
    </label>
    <label for="password" class="u-block u-margin-bottom--m">
        {{ __('Password') }}
        <input id="password" type="password" class="c-input u-padding--s-m u-margin-bottom--m" name="password" required autocomplete="new-password" autofocus>
        @error('password')
            <p class="u-color--error">{{ $message }}</p>
        @enderror
    </label>
    <label for="remember">
        {{ __('Remember Me') }}
        <input class="u-inline" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
    </label>
    
    <button class="c-form__submit u-bgColor--primary">{{ __('Login') }}</button>
    @if (Route::has('password.request'))
        <a class="btn btn-link" href="{{ route('password.request') }}">
            {{ __('Forgot Your Password?') }}
        </a>
    @endif
    
</form>
@endsection
