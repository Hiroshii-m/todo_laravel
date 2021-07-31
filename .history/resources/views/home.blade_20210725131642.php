@extends('layouts.main')

@section('content')
<section id="l-main">
    <div class="p-boardList">
        <div class="p-boardList__head">
            <h2 class="p-boardList__tit">{{ __('Board List') }}</h2>
            <button class="p-boardList__btn--pc">{{ __('Create Board') }}</button>
            <button class="p-boardList__btn--sp"><i class="fas fa-plus"></i></button>
        </div>
    </div>
</section>
@endsection
