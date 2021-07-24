@extends('layouts.main')

@section('content')
<!-- todoList -->
<section id="l-todoList">
    <div class="p-todoList">
        <h2 class="p-todoList__tit">サンプルボードサンプル</h2>
        
        <ul class="p-todoList__list">
            <li class="p-todoList__item">
                <div class="p-todoList__head">
                    <input type="text" class="p-todoList__input" placeholder="リスト名">
                    <span class="p-todoList__name"></span>
                </div>
                <div class="p-todoList__bottom">
                    <button class="p-todoList__btn">リスト追加</button>
                    <i class="far fa-times-circle p-todoList__icon"></i>
                </div>
            </li>
            <li class="p-todoList__item">
                <div class="p-todoList__head">
                    <!-- <input type="text" class="p-todoList__input" placeholder="リスト名"> -->
                    <span class="p-todoList__name">リスト名</span>
                    <p>{{ __('Expected Time') }}：5時間</p>
                    <p>{{ __('Spended Time') }}：10時間10分</p>
                    <p>{{ __('Time Lug') }}：+5時間10分</p>
                </div>
                <div class="p-todoList__bottom">
                    <span class="p-todoList__add"><i class="fas fa-plus"></i>TODOを追加</span>
                </div>
            </li>
            <li class="p-todoList__item">
                <div class="p-todoList__head">
                    <!-- <input type="text" class="p-todoList__input" placeholder="リスト名"> -->
                    <span class="p-todoList__name">リスト名</span>
                    <p>{{ __('Expected Time') }}：5時間</p>
                    <p>{{ __('Spended Time') }}：10時間10分</p>
                    <p>{{ __('Time Lug') }}：+5時間10分</p>
                </div>
                
                <input type="text" class="p-todoList__input" placeholder="TODO名">
                <div class="p-todoList__bottom">
                    <span class="p-todoList__btn"><i class="fas fa-plus"></i>TODOを追加</span>
                    <i class="far fa-times-circle p-todoList__icon"></i>
                </div>
            </li>
            <li class="p-todoList__item">
                <div class="p-todoList__head">
                    <!-- <input type="text" class="p-todoList__input" placeholder="リスト名"> -->
                    <span class="p-todoList__name">リスト名</span>
                    <p>{{ __('Expected Time') }}：5時間</p>
                    <p>{{ __('Spended Time') }}：10時間10分</p>
                    <p>{{ __('Time Lug') }}：+5時間10分</p>
                </div>
                <div class="">
                    <div class="p-todoList__todo">
                        <i class="far fa-square p-todoList__icon"></i>
                        <input type="text" class="p-todoList__input u-margin--0-m" placeholder="TODO名">
                        <!-- <span class="p-todoList__text u-margin--0-m">TODO</span> -->
                    </div>
                    <div class="c-acd">
                        <input class="c-acd__check" type="checkbox">
                        <div class="c-acd__content p-todoList__acd">
                            <div class="c-acd__item">
                                <i class="far fa-edit p-todoList__icon"></i>
                                <p class="c-acd__text">編集</p>
                            </div>
                            <div class="c-acd__item">
                                <i class="far fa-trash-alt p-todoList__icon"></i>
                                <p class="c-acd__text">削除</p>
                            </div>
                            <div class="c-acd__time">
                                <p>予想時間：<input type="time" value="00:00"></p>
                                <p>作業時間：<input type="time" value="00:00"></p>
                                <div class="c-timer">
                                    <p class="c-timer__btn u-bgColor--primary">START</p>
                                    <p class="c-timer__btn u-bgColor--error">STOP</p>
                                    <p class="c-timer__btn u-bgColor--success">RESET</p>
                                </div>
                            </div>
                        </div>
                        <i class="fas fa-chevron-down p-todoList__icon p-todoList__acon c-acd__icon c-acd__down"></i>
                        <i class="fas fa-chevron-up p-todoList__icon p-todoList__acon c-acd__icon c-acd__up"></i>
                    </div>
                </div>
                <div class="p-todoList__bottom">
                    <span class="p-todoList__add"><i class="fas fa-plus"></i>TODOを追加</span>
                </div>
            </li>
        </ul>
    </div>
</section>
@endsection