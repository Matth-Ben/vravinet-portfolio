<div class="c-video">
  @if ($data['video'])
    <div class="c-video__video" id="{{ $data['video'] }}"></div>
  @endif
  <div class="c-video__poster">
    @if ($data['poster'])
      @include('elements/image', ['data' => $data['poster']])
    @endif
    @if ($data['video'])
      <div class="c-video__play" data-video="{{ $data['video'] }}">{{ display_svg('play') }}</div>
    @endif
  </div>
</div>
