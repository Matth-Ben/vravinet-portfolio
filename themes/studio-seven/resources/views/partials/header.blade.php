<header class="header">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-22 offset-lg-1">
        <div class="header__nav">
          <div class="header__nav-logo">
            <a href="{{ home_url() }}" aria-label="Accueil" class="header__logo">
              Victor Ravinet
            </a>
          </div>
          <div class="header__toggler">
            <span style="--transition-order: 0"></span>
            <span style="--transition-order: 1"></span>
            <span style="--transition-order: 2"></span>
            <div style="--transition-order: 0"></div>
            <div style="--transition-order: 1"></div>
          </div>
          <div class="header__nav-menu">
            <div class="header__nav-menu__contact">
              <div class="header__nav-menu__contact-item">
                @if ($GLOBALS['options']['header']['contact'])
                  <div class="header__nav-menu__contact-label">Contact</div>
                  <a href="mailto:{{ $GLOBALS['options']['header']['contact'] }}">{{ $GLOBALS['options']['header']['contact'] }}</a>
                @endif
              </div>
              <div class="header__nav-menu__contact-item">
                @if ($GLOBALS['options']['header']['insta'])
                  <div class="header__nav-menu__contact-label">Instagram</div>
                  <a href="https://www.instagram.com/{!! $GLOBALS['options']['header']['insta'] !!}" target="_blanc">{{ '@'.$GLOBALS['options']['header']['insta'] }}</a>
                @endif
              </div>
            </div>
            @foreach ($GLOBALS['navigation']['primary_navigation'] as $item)
              <div class="header__nav-menu__item">
                <a href="{{ $item['url'] }}" class="header__nav-menu__item-link">{{ $item['title'] }}</a>
              </div>
            @endforeach
            <div class="header__nav-menu__dev">Developped by <a href="https://matthiasbenoit.fr">Matthias Benoit</a></div>
            <div class="header__nav-menu__image">
              @include('elements/image', ['data' => $GLOBALS['options']['header']['image_menu']])
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
