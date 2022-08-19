{{--
  Template Name: Template projects
--}}

@extends('layouts.app')

@php
  $args = array('post_type' => 'projects', 'posts_per_page'=>'-1');
  $loop = new WP_Query($args);
@endphp

@section('content')
  <div class="project" data-router-view="page">
    <div class="project__list">
      @while($loop->have_posts()) @php ($loop->the_post()) @endphp
        <div class="project__item">
          @include('components/card/card-project', ['id' => get_the_ID()])
        </div>
      @endwhile
    </div>
  </div>
@endsection
