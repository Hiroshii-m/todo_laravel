@extends('layouts.main')

@section('content')
<!-- todoList -->
<section id="l-todoList">
    <div id="list-app" class="p-todoList"></div>
</section>
<script>
    const u_id = @json($user->id);
    const board = @json($board);
    const clusters = @json($clusters);
    const todos = @json($todos);

    const ExpTime = 'Expected Time';
    const SpeTime = 'Spended Time';
    const TimeLug = 'Time Lug';
    const word = {ExpTime: ExpTime, SpeTime: SpeTime, TimeLug: SpeTime};
</script>
@endsection