@extends('layouts.main')

@section('content')
<!-- form -->
<section id="l-main">
    <form class="c-form" method="POST" action="{{ route('password.update') }}">
        @csrf
        
        <input type="hidden" name="token" value="{{ $token }}">

        <h2 class="c-form__tit">{{ __('Reset Password') }}</h2>

        <label for="email" class="c-form__label">
            {{ __('E-Mail Address') }}
            <input id="email" type="text" class="c-form__input" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
            @error('email')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
        <label for="password" class="c-form__label">
            {{ __('Password') }}
            <input id="password" type="text" class="c-form__input" name="password" value="{{ old('password') }}" required autocomplete="new-password" autofocus>
            @error('password')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
        <label for="password-confirm" class="c-form__label">
            {{ __('Confirm Password') }}
            <input id="password-confirm" type="text" class="c-form__input" name="password_confirmation" required autocomplete="new-password" autofocus>
        </label>
        
        <button class="c-form__submit u-bgColor--primary">{{ __('Reset Password') }}</button>
        
    </form>
</section>

@endsection
