@extends('layouts.main')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

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
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- form -->
<section id="l-main">
    <form class="c-form" method="POST">
        @csrf
        <h2 class="c-form__tit">{{ __('Register') }}</h2>
        <label for="name" class="c-form__label">
            {{ __('Name') }}}}
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
            <input id="password" type="text" class="c-form__input" name="password" value="{{ old('password') }}" required autocomplete="new-password" autofocus>
            <p class="c-form__error">入力必須です</p>
        </label>
        <label for="" class="c-form__label">
            パスワード（再入力）
            <input type="text" class="c-form__input">
            <p class="c-form__error">入力必須です</p>
        </label>
        <button class="c-form__submit u-bgColor--success">登録</button>
    </form>
</section>
@endsection
