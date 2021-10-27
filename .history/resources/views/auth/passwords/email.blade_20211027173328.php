@extends('layouts.main')

@section('content')
<!-- form -->
<section id="l-main">
    <form class="c-form u-margin--0-auto" method="POST" action="{{ route('password.email') }}">
        @csrf

        <h2 class="c-container__tit">{{ __('Reset Password') }}</h2>

        <label for="email" class="u-block u-margin-bottom--m">
            {{ __('E-Mail Address') }}
            <input id="email" type="text" class="c-input u-padding--s-m u-margin-bottom--m" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
            @error('email')
                <p class="u-color--error">{{ $message }}</p>
            @enderror
        </label>
        
        <button class="c-form__submit u-bgColor--primary">{{ __('Send Password Reset Link') }}</button>
    </form>
</section>

@endsection
