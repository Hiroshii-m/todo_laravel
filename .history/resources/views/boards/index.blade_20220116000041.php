@extends('layouts.main')

@section('content')
<!-- boardList -->
<section id="">
    <div id="board-app"></div>
    <div class="p-boardList">
    

        {{-- ページネーション --}}
        <div class="">
            {{ $boards->links('vendor.pagination.board') }}
        </div>
    </div>
    </div>
</section>
@endsection