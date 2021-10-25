@if ($paginator->hasPages())
    <ul class="pagination p-page p-boardPage" role="navigation">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="disabled p-page__item p-boardPage__item" aria-disabled="true" aria-label="@lang('pagination.previous')">
                <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
            </li>
        @else
            <li class=" p-page__item p-boardPage__item">
                <a href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')"><i class="fas fa-chevron-left"></i></a>
            </li>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="disabled p-page__item p-boardPage__item" aria-disabled="true"><span>{{ $element }}</span></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li class="active p-page__item p-boardPage__item" aria-current="page"><span>{{ $page }}</span></li>
                    @else
                        <li class=" p-page__item"><a href="{{ $url }}">{{ $page }}</a></li>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class=" p-page__item p-boardPage__item">
                <a href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')"><i class="fas fa-chevron-right"></i></a>
            </li>
        @else
            <li class="disabled p-page__item p-boardPage__item" aria-disabled="true" aria-label="@lang('pagination.next')">
                <span aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
            </li>
        @endif
    </ul>
@endif
