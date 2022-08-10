{{--
  Title: Liste de liens
  Description: Description of example
  Category: template-blocks
  Icon: editor-ul
  Post-Type: page post
  Keywords: list liste liens lien
--}}

@php
  $data = Block::listLink($block['data']);
@endphp

<section class="b-list-link">
  <div class="container-fluid">
    <div class="row">
      <div class="col-22 col-lg-8 offset-1 offset-lg-2">
        <h2 class="b-list-link__title">{{ $data['title'] }}</h2>
      </div>
      <div class="col-22 col-lg-10 offset-1 offset-lg-2">
        <div class="b-list-link__list">
          @foreach ($data['links'] as $item)
            <div class="b-list-link__item">
              @include('elements/link', ['data' => $item['link']])
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</div>
