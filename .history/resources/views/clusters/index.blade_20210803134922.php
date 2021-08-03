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
    const ExpTime = {{ __('Expected Time') }};
    const SpeTime = {{ __('Spended Time') }};
    const TimeLug = {{ __('Time Lug') }};
</script>
@endsection