@extends('layouts.main')

@section('content')
<!-- boardList -->
<section id="l-boardList">
    <div id="board-app"></div>
</section>
<script>
    const window.Laravel.boards = @json($boards);
</script>
@endsection