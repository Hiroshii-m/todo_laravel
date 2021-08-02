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
                        <span class="p-boardList__date">{{ __('Last Updated') }}：{{ $board->updated_at->format('Y/m/d') }}</span>
                        <i class="fas fa-ellipsis-v p-boardList__icon js-click-toggle-display"></i>
                        <div id="l-itemMenu" class="js-target-display">
                            <ul class="p-boardList__modal c-itemMenu">
                                <li class="c-itemMenu__item">
                                    <a href="{{ route('clusters', ['id' => $board->id, 'u_id' => $user->id]) }}" class="c-itemMenu__txt"><i class="far fa-folder-open c-itemMenu__icon"></i>{{ __('Open') }}</a>
                                </li>
                                <form action="{{ route('boards.delete', $board->id) }}" method="POST" class="c-itemMenu__item">
                                    @method('DELETE')
                                    @csrf
                                    <button class="c-itemMenu__txt" onclick='return confirm("削除しますか？");'><i class="fas fa-trash-alt c-itemMenu__icon"></i>{{ __('Delete') }}</button>
                                </form>
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