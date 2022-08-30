{{--
  Title: Galerie
  Description: Description of example
  Category: template-blocks
  Icon: format-gallery
  Post-Type: page post projects
  Keywords: gallery galerie
--}}

@php
  $data = Block::gallery($block['data']);
@endphp

<section class="b-gallery">
  <div class="container-fluid">
    <div class="row">
      <div class="col-22 col-lg-14 offset-1 offset-lg-4">
        <div class="b-gallery__list">
          <div class="b-gallery__list-wrapper">
            @foreach ($data['gallery'] as $item)
              <div class="b-gallery__item">
                @include('elements/image', ['data' => $item['image']])
              </div>
            @endforeach
          </div>
        </div>
      </div>
      <div class="col-22 col-lg-2 offset-1 offset-lg-2">
        <div class="b-gallery__preview">
          <div class="b-gallery__preview-wrapper">
            @foreach ($data['gallery'] as $item)
              <div class="b-gallery__preview-item">
                {{-- @include('elements/image', ['data' => $item['image']]) --}}
              </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
