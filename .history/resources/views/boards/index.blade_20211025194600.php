@extends('layouts.main')

@section('content')
<!-- boardList -->
<section id="">
    <div id="board-app"></div>
    <div class="p-boardList">
        <ul class="p-boardList__list">
            @foreach($boards as $board)
                <li class="p-boardList__item">
                    <span class="p-boardList__name">{{ $board->board_name }}</span>
                    <div class="p-boardList__left">
                        <span class="p-boardList__date">{{ __('Last Updated') }}：{{ $board->updated_at->format('Y/m/d') }}</span>
                        <i class="fas fa-ellipsis-v p-boardList__icon js-click-toggle-display"></i>
                        <ul class="p-boardList__opMenu c-itemMenu js-target-display">
                            <li class="p-boardList__opItem c-itemMenu__item">
                                <a href="{{ route('clusters', $board->id) }}" class="u-block u-padding--m-l"><i class="far fa-folder-open u-margin--0-m"></i>{{ __('Open') }}</a>
                            </li>
                            <form action="{{ route('boards.delete', $board->id) }}" method="POST" class="p-boardList__opItem c-itemMenu__item">
                                @method('DELETE')
                                @csrf
                                <button class="u-block u-padding--m-l" onclick='return confirm("削除しますか？");'><i class="fas fa-trash-alt u-margin--0-m"></i>{{ __('Delete') }}</button>
                            </form>
                        </ul>
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