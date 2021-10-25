@extends('layouts.main')

@section('content')
@if (session('status'))
    <div class="alert alert-success" role="alert">
        {{ session('status') }}
    </div>
@endif
<!-- form -->
<section id="l-main">
    <form class="c-form" method="POST" action="{{ route('password.email') }}">
        @csrf

        <h2 class="c-container__tit">{{ __('Reset Password') }}</h2>

        <label for="email" class="c-form__label">
            {{ __('E-Mail Address') }}
            <input id="email" type="text" class="c-form__input" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
            @error('email')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
        
        <button class="c-form__submit u-bgColor--primary">{{ __('Send Password Reset Link') }}</button>
    </form>
</section>

@endsection
