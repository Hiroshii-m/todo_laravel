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
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Reset Password') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('password.update') }}">
                        @csrf

                        <input type="hidden" name="token" value="{{ $token }}">

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Reset Password') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
