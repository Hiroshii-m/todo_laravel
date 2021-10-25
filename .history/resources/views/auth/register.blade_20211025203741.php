@extends('layouts.main')

@section('content')
<!-- form -->
<section id="l-main">
    <form class="c-form u-margin--0-auto" method="POST" action="{{ route('register') }}">
        @csrf

        <h2 class="c-container__tit u-margin--xl-0 u-text--center">{{ __('Register') }}</h2>
        <label for="name" class="u-block u-margin-bottom--m">
            {{ __('UserName') }}
            <input id="name" type="text" class="c-input u-padding--s-m u-margin-bottom--m" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
            @error('name')
                <p class="u-color--error">{{ $message }}</p>
            @enderror
        </label>
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
        <label for="password_confirmation" class="u-block u-margin-bottom--m">
            {{ __('Confirm Password') }}
            <input id="password_confirmation" type="password" class="c-input u-padding--s-m u-margin-bottom--m" name="password_confirmation" required autocomplete="new-password" autofocus>
            @error('password_confirmation')
                <p class="u-color--error">{{ $message }}</p>
            @enderror
        </label>
        <button class="c-form__submit u-bgColor--success">{{ __('Regist') }}</button>
    </form>
</section>
@endsection
