<div class="c-video">
  <div class="c-video__video" id="{{ $data['video'] }}"></div>
  @if ($data['poster'])
    <div class="c-video__poster">
      @include('elements/image', ['data' => $data['poster']])
      <div class="c-video__play" data-video="{{ $data['video'] }}">{{ display_svg('play') }}</div>
    </div>
  @endif
</div>
