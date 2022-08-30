<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class FrontPage extends Controller
{
  public static function Gallery() {
    $pageID = get_option('page_on_front');
    $gallery = get_field('gallery', $pageID);

    foreach ($gallery as $value) {
      $images[] = Element::image($value['ID'], '1920px');
    }

    return [
      'gallery' => $images
    ];
  }
}
