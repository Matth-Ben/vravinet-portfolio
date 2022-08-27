<header class="header">
  <div class="container-fluid">
    <div class="row">
      <div class="col-22 offset-1">
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
            @foreach ($GLOBALS['navigation']['primary_navigation'] as $item)
              <div class="header__nav-menu__item">
                <a href="{{ $item['url'] }}" class="header__nav-menu__item-link">{{ $item['title'] }}</a>
              </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
