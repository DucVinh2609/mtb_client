<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../assets/images/banners/bra.jpg" />
    </div>

    <!-- Header section -->
    <header class="header-wrapper">
      <div class="container">
        <!-- Logo link-->
        <a href="index.html" class="logo">
          <img alt="logo" src="../assets/images/logo.png" />
        </a>

        <!-- Main website navigation-->
        <nav id="navigation-box">
          <!-- Toggle for mobile menu mode -->
          <a href="#" id="navigation-toggle">
            <span class="menu-icon">
              <span class="icon-toggle" role="button" aria-label="Toggle Navigation">
                <span class="lines"></span>
              </span>
            </span>
          </a>

          <!-- Link navigation -->
          <ul id="navigation">
            <li>
              <span class="sub-nav-toggle plus"></span>
              <a href="#">Pages</a>
              <ul>
                <li class="menu__nav-item">
                  <a href="movie-page-left.html">Single movie (rigth sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="movie-page-right.html">Single movie (left sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="movie-page-full.html">Single movie (full widht)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="movie-list-left.html">Movies list (rigth sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="movie-list-right.html">Movies list (left sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="movie-list-full.html">Movies list (full widht)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="single-cinema.html">Single cinema</a>
                </li>
                <li class="menu__nav-item">
                  <a href="cinema-list.html">Cinemas list</a>
                </li>
                <li class="menu__nav-item">
                  <a href="trailer.html">Trailers</a>
                </li>
                <li class="menu__nav-item">
                  <a href="rates-left.html">Rates (rigth sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="rates-right.html">Rates (left sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="rates-full.html">Rates (full widht)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="offers.html">Offers</a>
                </li>
                <li class="menu__nav-item">
                  <a href="contact.html">Contact us</a>
                </li>
                <li class="menu__nav-item">
                  <a href="404.html">404 error</a>
                </li>
                <li class="menu__nav-item">
                  <a href="coming-soon.html">Coming soon</a>
                </li>
                <li class="menu__nav-item">
                  <a href="login.html">Login/Registration</a>
                </li>
              </ul>
            </li>
            <li>
              <span class="sub-nav-toggle plus"></span>
              <a href="page-elements.html">Features</a>
              <ul>
                <li class="menu__nav-item">
                  <a href="typography.html">Typography</a>
                </li>
                <li class="menu__nav-item">
                  <a href="page-elements.html">Shortcodes</a>
                </li>
                <li class="menu__nav-item">
                  <a href="column.html">Columns</a>
                </li>
                <li class="menu__nav-item">
                  <a href="icon-font.html">Icons</a>
                </li>
              </ul>
            </li>
            <li>
              <span class="sub-nav-toggle plus"></span>
              <a href="page-elements.html">Booking steps</a>
              <ul>
                <li class="menu__nav-item">
                  <a href="book1.html">Booking step 1</a>
                </li>
                <li class="menu__nav-item">
                  <a href="book2.html">Booking step 2</a>
                </li>
                <li class="menu__nav-item">
                  <a href="book3-buy.html">Booking step 3 (buy)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="book3-reserve.html">Booking step 3 (reserve)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="book-final.html">Final ticket view</a>
                </li>
              </ul>
            </li>
            <li>
              <span class="sub-nav-toggle plus"></span>
              <a href="gallery-four.html">Gallery</a>
              <ul>
                <li class="menu__nav-item">
                  <a href="gallery-four.html">4 col gallery</a>
                </li>
                <li class="menu__nav-item">
                  <a href="gallery-three.html">3 col gallery</a>
                </li>
                <li class="menu__nav-item">
                  <a href="gallery-two.html">2 col gallery</a>
                </li>
              </ul>
            </li>
            <li>
              <span class="sub-nav-toggle plus"></span>
              <a href="news-left.html">News</a>
              <ul>
                <li class="menu__nav-item">
                  <a href="news-left.html">News (rigth sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="news-right.html">News (left sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="news-full.html">News (full widht)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="single-page-left.html">Single post (rigth sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="single-page-right.html">Single post (left sidebar)</a>
                </li>
                <li class="menu__nav-item">
                  <a href="single-page-full.html">Single post (full widht)</a>
                </li>
              </ul>
            </li>
            <li>
              <span class="sub-nav-toggle plus"></span>
              <a href="#">Mega menu</a>
              <ul class="mega-menu container">
                <li class="col-md-3 mega-menu__coloum">
                  <h4 class="mega-menu__heading">Now in the cinema</h4>
                  <ul class="mega-menu__list">
                    <li class="mega-menu__nav-item">
                      <a href="#">The Counselor</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Bad Grandpa</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Blue Is the Warmest Color</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Capital</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Spinning Plates</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Bastards</a>
                    </li>
                  </ul>
                </li>

                <li class="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                  <ul class="mega-menu__list">
                    <li class="mega-menu__nav-item">
                      <a href="#">Gravity</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Captain Phillips</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Carrie</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Cloudy with a Chance of Meatballs 2</a>
                    </li>
                  </ul>
                </li>

                <li class="col-md-3 mega-menu__coloum">
                  <h4 class="mega-menu__heading">Ending soon</h4>
                  <ul class="mega-menu__list">
                    <li class="mega-menu__nav-item">
                      <a href="#">Escape Plan</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Rush</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Prisoners</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Enough Said</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">The Fifth Estate</a>
                    </li>
                    <li class="mega-menu__nav-item">
                      <a href="#">Runner Runner</a>
                    </li>
                  </ul>
                </li>

                <li class="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                  <ul class="mega-menu__list">
                    <li class="mega-menu__nav-item">
                      <a href="#">Insidious: Chapter 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <!-- Additional header buttons / Auth and direct link to booking-->
        <div class="control-panel">
          <a href="#" class="btn btn--sign login-window">Sign in</a>
          <a href="#" class="btn btn-md btn--warning btn--book login-window">Book a ticket</a>
        </div>
      </div>
    </header>

    <!-- Search bar -->
    <div class="search-wrapper">
      <div class="container container--add">
        <form id="search-form" method="get" class="search">
          <input type="text" class="search__field" placeholder="Search" />
          <select name="sorting_item" id="search-sort" class="search__sort" tabindex="0">
            <option value="1" selected="selected">By title</option>
            <option value="2">By year</option>
            <option value="3">By producer</option>
            <option value="4">By title</option>
            <option value="5">By year</option>
          </select>
          <button type="submit" class="btn btn-md btn--danger search__button">search a movie</button>
        </form>
      </div>
    </div>

    <!-- Main content -->
    <section class="container">
      <div class="col-sm-12">
        <h2 class="page-heading">cinemas</h2>

        <div class="tags-area tags-area--thin">
          <form id="select" class="select" method="get">
            <select name="select_item" id="select-sort" class="select__sort" tabindex="0">
              <option value="1" selected="selected">London</option>
              <option value="2">New York</option>
              <option value="3">Paris</option>
              <option value="4">Berlin</option>
              <option value="5">Moscow</option>
              <option value="3">Minsk</option>
              <option value="4">Warsawa</option>
              <option value="5">Kiev</option>
            </select>
          </form>

          <div class="tags tags--unmarked tags--aside">
            <span class="tags__label">Sorted by:</span>
            <ul>
              <li class="item-wrap">
                <a href="#" class="tags__item item-active" data-filter="all">all</a>
              </li>
              <li class="item-wrap">
                <a href="#" class="tags__item" data-filter="name">name</a>
              </li>
              <li class="item-wrap">
                <a href="#" class="tags__item" data-filter="popularity">popularity</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="cinema-wrap">
          <div class="row">
            <div class="col-xs-6 col-sm-3 cinema-item">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema1.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Marble Arch Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item name">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema2.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item name popularity">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema3.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item popularity">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema4.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
          </div>

          <div class="adv-place">
            <img alt src="../assets/images/banners/film.jpg" />
          </div>

          <div class="row">
            <div class="col-xs-6 col-sm-3 cinema-item name">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema5.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Marble Arch Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item popularity">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema6.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item name popularity">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema7.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item popularity">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema8.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
          </div>

          <div class="adv-place">
            <img alt src="../assets/images/banners/film.jpg" />
          </div>

          <div class="row">
            <div class="col-xs-6 col-sm-3 cinema-item name">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema9.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Marble Arch Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema10.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item popularity">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema11.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
            <div class="col-xs-6 col-sm-3 cinema-item popularity">
              <div class="cinema">
                <a href="single-cinema.html" class="cinema__images">
                  <img alt src="../assets/images/cinema/cinema12.jpg" />
                  <span class="cinema-rating">5.0</span>
                </a>
                <a href="single-cinema.html" class="cinema-title">Camden Town Odeon</a>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination paginatioon--full">
          <a href="#" class="pagination__prev">prev</a>
          <a href="#" class="pagination__next">next</a>
        </div>
      </div>
    </section>

    <div class="clearfix"></div>

    <footer class="footer-wrapper">
      <section class="container">
        <div class="col-xs-4 col-md-2 footer-nav">
          <ul class="nav-link">
            <li>
              <a href="#" class="nav-link__item">Cities</a>
            </li>
            <li>
              <a href="movie-list-left.html" class="nav-link__item">Movies</a>
            </li>
            <li>
              <a href="trailer.html" class="nav-link__item">Trailers</a>
            </li>
            <li>
              <a href="rates-left.html" class="nav-link__item">Rates</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-4 col-md-2 footer-nav">
          <ul class="nav-link">
            <li>
              <a href="coming-soon.html" class="nav-link__item">Coming soon</a>
            </li>
            <li>
              <a href="cinema-list.html" class="nav-link__item">Cinemas</a>
            </li>
            <li>
              <a href="offers.html" class="nav-link__item">Best offers</a>
            </li>
            <li>
              <a href="news-left.html" class="nav-link__item">News</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-4 col-md-2 footer-nav">
          <ul class="nav-link">
            <li>
              <a href="#" class="nav-link__item">Terms of use</a>
            </li>
            <li>
              <a href="gallery-four.html" class="nav-link__item">Gallery</a>
            </li>
            <li>
              <a href="contact.html" class="nav-link__item">Contacts</a>
            </li>
            <li>
              <a href="page-elements.html" class="nav-link__item">Shortcodes</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="footer-info">
            <p class="heading-special--small">
              A.Movie
              <br />
              <span class="title-edition">in the social media</span>
            </p>

            <div class="social">
              <a href="#" class="social__variant fa fa-facebook"></a>
              <a href="#" class="social__variant fa fa-twitter"></a>
              <a href="#" class="social__variant fa fa-vk"></a>
              <a href="#" class="social__variant fa fa-instagram"></a>
              <a href="#" class="social__variant fa fa-tumblr"></a>
              <a href="#" class="social__variant fa fa-pinterest"></a>
            </div>

            <div class="clearfix"></div>
            <p class="copy">&copy; A.Movie, 2013. All rights reserved. Done by Olia Gozha</p>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
