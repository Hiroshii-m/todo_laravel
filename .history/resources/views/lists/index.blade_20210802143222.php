@extends('layouts.main')

@section('content')
<!-- todoList -->
<section id="l-todoList">
    <div id="list-app" class="p-todoList"></div>
</section>
<script>
    const u_id = @json($user->id);
    const data = @json($data);
</script>
@endsection