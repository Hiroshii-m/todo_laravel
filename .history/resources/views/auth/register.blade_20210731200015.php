@extends('layouts.main')

@section('content')
<!-- form -->
<section id="l-main">
    <form class="c-form" method="POST" action="{{ route('register') }}">
        @csrf

        <h2 class="c-form__tit">{{ __('Register') }}</h2>
        <label for="name" class="c-form__label">
            {{ __('Name') }}
            <input id="name" type="text" class="c-form__input" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
            @error('name')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
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
        <label for="password_confirmation" class="c-form__label">
            {{ __('Confirm Password') }}
            <input id="password_confirmation" type="password" class="c-form__input" name="password_confirmation" required autocomplete="new-password" autofocus>
            @error('password_confirmation')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
        <button class="c-form__submit u-bgColor--success">{{ __('Regist') }}</button>
    </form>
</section>
@endsection
