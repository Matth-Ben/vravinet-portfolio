@extends('layouts.app')

@section('content')
  @while (have_posts()) @php the_post() @endphp
    <div data-router-view="page">
      <div class="home">
        <div class="webGlGalleryVertical"></div>
        <div class="container-fluid">
          <div class="row align-items-center justify-content-center u-h100">
            <div class="home__title">
              <h1>Victor Ravinet</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  @endwhile
@endsection
