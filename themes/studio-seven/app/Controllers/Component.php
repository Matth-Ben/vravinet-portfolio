<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Component extends Controller {
  public static function classicContent($data) {
    return [
      'titles' => Element::title($data),
      'content' => $data['content'],
      'button' => $data['button']
    ];
  }

  public static function flexibleClassicContent($data) {
    return [
      'data' => [
        'classic-content' => Component::classicContent($data),
      ]
    ];
  }

  public static function flexibleMedia($data) {
    return [
      'data' => [
        'media' => $data['media'],
        'image' => isset($data['image']) && !empty($data['image']) ? Element::image($data['image'], '50vw', NULL, true) : NULL,
        'video' => [
          'video' => $data['video'],
          'poster' => isset($data['image']) && !empty($data['image']) ? Element::image($data['image'], '50vw') : NULL
        ]
      ]
    ];
  }

  public static function project($id) {
    return [
      'title' => get_the_title($id),
      'url' => get_post_permalink($id),
      'thumbnail' => Element::image(get_post_thumbnail_id($id), '1920px'),
    ];
  }
}
