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
            <input id="password" type="text" class="c-form__input" name="password" value="{{ old('password') }}" required autocomplete="new-password" autofocus>
            @error('password')
                <p class="c-form__error">{{ $message }}</p>
            @enderror
        </label>
        <div class="form-group row">
            <div class="col-md-6 offset-md-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                    <label class="form-check-label" for="remember">
                        {{ __('Remember Me') }}
                    </label>
                </div>
            </div>
        </div>
        
        <button class="c-form__submit u-bgColor--success">{{ __('Login') }}</button>
        @if (Route::has('password.request'))
            <a class="btn btn-link" href="{{ route('password.request') }}">
                {{ __('Forgot Your Password?') }}
            </a>
        @endif
        
    </form>
</section>
@endsection
