{{--
  Title: Contenu Flexible
  Description: Une ou deux colonnes : contenu / médias
  Category: template-blocks
  Icon: columns
  Post-Type: post page projects
  Keywords: contenu colonnes flexible image vidéo média
--}}

@php
  $data = Block::flexibleContent($block['data']);
@endphp

<section class="b-flexible-content">
  <div class="container-fluid">
    <div class="row align-items-end">
      @foreach ($data['components'] as $component)
        @php
          if (count($data['components']) > 1) {
            if ($component['name'] === 'flexible-classic-content') {
              $col = "col-lg-9 u-z1";
            } else {
              $col = "col-lg-11 u-z0";
            }
          }
        @endphp
        <div class="col-22 {{ $col }} offset-1">
          @include('components/' . $component['name'], ['data' => $component['data']])
        </div>
      @endforeach
    </div>
  </div>
</section>
