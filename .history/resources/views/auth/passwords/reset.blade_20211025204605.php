@extends('layouts.main')

@section('content')
<!-- form -->
<form class="c-form u-margin--0-auto" method="POST" action="{{ route('password.update') }}">
    @csrf
    
    <input type="hidden" name="token" value="{{ $token }}">

    <h2 class="c-container__tit u-margin--xl-0 u-text--center">{{ __('Reset Password') }}</h2>

    <label for="email" class="u-block u-margin-bottom--m">
        {{ __('E-Mail Address') }}
        <input id="email" type="text" class="c-input u-padding--s-m u-margin-bottom--m" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
        @error('email')
            <p class="u-color--error">{{ $message }}</p>
        @enderror
    </label>
    <label for="password" class="u-block u-margin-bottom--m">
        {{ __('Password') }}
        <input id="password" type="text" class="c-input u-padding--s-m u-margin-bottom--m" name="password" value="{{ old('password') }}" required autocomplete="new-password" autofocus>
        @error('password')
            <p class="u-color--error">{{ $message }}</p>
        @enderror
    </label>
    <label for="password-confirm" class="u-block u-margin-bottom--m">
        {{ __('Confirm Password') }}
        <input id="password-confirm" type="text" class="c-input u-padding--s-m u-margin-bottom--m" name="password_confirmation" required autocomplete="new-password" autofocus>
    </label>
    
    <button class="c-form__submit u-bgColor--primary">{{ __('Reset Password') }}</button>
    
</form>

@endsection
