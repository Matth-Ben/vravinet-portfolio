@extends('layouts.app')

@php
  $data = FrontPage::Gallery();
@endphp

@section('content')
  @while (have_posts()) @php the_post() @endphp
    <div data-router-view="page">
      <div class="home">
        <div class="webGlGalleryVertical"></div>
        <div class="home__title">
          <h1>Victor Ravinet</h1>
        </div>

        {{-- <div class="gl__scroll__vertical">
          <div class="gl__gallery">
            @foreach ($data['gallery'] as $item)
              <div class="gl__gallery__figure">
                @include('elements/image', ['data' => $item])
              </div>
            @endforeach
          </div>
        </div> --}}
      </div>
    </div>
  @endwhile
@endsection
