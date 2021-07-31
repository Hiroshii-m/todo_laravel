@extends('layouts.main')

@section('content')
<!-- boardList -->
<section id="l-boardList">
    <div id="board-app"></div>
    <div class="p-boardList">
        <ul class="p-boardList__list">
            @foreach($boards as $board)
                <li class="p-boardList__item">
                    <span class="p-boardList__name">{{ $board->board_name }}</span>
                    <div class="p-boardList__left">
                        <span class="p-boardList__date">最終更新日：{{ $board->updated_at->format('Y/m/d') }}</span>
                        <i class="fas fa-ellipsis-v p-boardList__icon"></i>
                        <div id="l-itemMenu">
                            <ul class="p-boardList__modal c-itemMenu sho">
                                <li class="c-itemMenu__item"><a><i class="fas fa-pencil-alt c-itemMenu__icon"></i>名前を変更する</a></li>
                                <li class="c-itemMenu__item"><a><i class="fas fa-trash-alt c-itemMenu__icon"></i>削除</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            @endforeach
        </ul>

        {{-- ページネーション --}}
        <div class="">
            {{ $boards->links('vendor.pagination.board') }}
        </div>
    </div>
    </div>
</section>
@endsection