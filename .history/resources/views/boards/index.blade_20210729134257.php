@extends('layouts.main')

@section('content')
<!-- boardList -->
<section id="l-boardList">
    <div id="board-app"></div>
</section>
<script>
    const boards = @json($boards.data);
</script>
@endsection