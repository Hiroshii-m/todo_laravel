@extends('layouts.main')

@section('content')
<!-- todoList -->
<section id="">
    <div id="list-app" class="p-todoList"></div>
</section>
<script>
    const u_id = @json($user->id);
    const board = @json($board);
    const clusters = @json($clusters);
    const todos = @json($todos);

    const ExpTime = @json( __('Expected Time') );
    const SpeTime = @json( __('Spended Time') );
    const TimeLug = @json( __('Time Lug') );
    const word = {ExpTime: ExpTime, SpeTime: SpeTime, TimeLug: TimeLug};
</script>
@endsection