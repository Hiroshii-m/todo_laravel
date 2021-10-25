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
                        <ul class="p-boardList__optionMenu c-itemMenu js-target-display">
                            <li class="p-boardList__optionItem c-itemMenu__item">
                                <a href="{{ route('clusters', $board->id) }}" class="c-itemMenu__txt"><i class="far fa-folder-open c-itemMenu__icon"></i>{{ __('Open') }}</a>
                            </li>
                            <form action="{{ route('boards.delete', $board->id) }}" method="POST" class="p-boardList__optionItem c-itemMenu__item">
                                @method('DELETE')
                                @csrf
                                <button class="c-itemMenu__txt" onclick='return confirm("削除しますか？");'><i class="fas fa-trash-alt c-itemMenu__icon"></i>{{ __('Delete') }}</button>
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