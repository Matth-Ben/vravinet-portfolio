@php
  $data = Component::project($id);
@endphp

<div class="c-card-project">
  <a class="c-card-project__link" href="{{ $data['url'] }}">
    <div class="c-card-project__thumbnail">
      @include('elements/image', ['data' => $data['thumbnail']])
    </div>
    <div class="c-card-project__title">
      <div class="c-card-project__title-content">
        <h2>{!! $data['title'] !!}</h2>
      </div>
    </div>
  </a>
</div>
