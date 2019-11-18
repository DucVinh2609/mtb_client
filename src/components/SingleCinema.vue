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
    <section class="cinema-container">
      <div class="cinema cinema--full">
        <p class="cinema__title">Cinema name</p>
        <div class="cinema__rating">5.0</div>
        <div class="cinema__gallery">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <!--First Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner1.jpg" />
              </div>

              <!--Second Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner2.jpg" />
              </div>

              <!--Third Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner3.jpg" />
              </div>

              <!--Four Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner4.jpg" />
              </div>

              <!--Five Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner5.jpg" />
              </div>

              <!--Six Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner6.jpg" />
              </div>

              <!--Seven Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner7.jpg" />
              </div>

              <!--Eight Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner8.jpg" />
              </div>

              <!--Nine Slide-->
              <div class="swiper-slide">
                <img alt src="../assets/images/cinema/cinema-inner9.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div class="cinema__info">
          <p class="cinema__info-item">
            <strong>Address:</strong> Leicester Sq, London, WC2H 7LP
          </p>
          <p class="cinema__info-item">
            <strong>Phone:</strong> 0871 224 0240
          </p>
          <p class="cinema__info-item">
            <strong>Official website:</strong>
            <a href="#">www.myvue.com</a>
          </p>
        </div>
      </div>

      <div class="share share--centered">
        <div class="addthis_toolbox addthis_default_style">
          <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>
          <a class="addthis_button_tweet"></a>
          <a class="addthis_button_google_plusone" g:plusone:size="medium"></a>
        </div>
      </div>

      <div class="tabs tabs--horisontal">
        <!-- Nav tabs -->
        <div class="container">
          <ul class="nav nav-tabs" id="hTab">
            <li>
              <a href="#movie1" data-toggle="tab">Movies</a>
            </li>
            <li>
              <a href="#comment1" data-toggle="tab">Comments</a>
            </li>
            <li class="active">
              <a href="#map1" data-toggle="tab">Map</a>
            </li>
          </ul>
        </div>

        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane" id="movie1">
            <div class="container">
              <div class="movie-time-wrap">
                <div class="datepicker">
                  <span class="datepicker__marker">
                    <i class="fa fa-calendar"></i>Date
                  </span>
                  <input type="text" id="datepicker" value="03/10/2014" class="datepicker__input" />
                </div>

                <div class="clearfix"></div>

                <div class="col-sm-6">
                  <!-- Movie variant with time -->
                  <div class="movie movie--time">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="movie__images">
                          <span class="movie__rating">4.1</span>
                          <img alt src="../assets/images/movie/movie-time1.jpg" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <a href="movie-page-left.html" class="movie__title">Gravity (2013)</a>

                        <p class="movie__time">91 min</p>

                        <p class="movie__option">
                          <a href="#">Drama</a> |
                          <a href="#">Sci-Fi</a> |
                          <a href="#">Thriller</a>
                        </p>
                      </div>
                      <div class="time-select">
                        <ul class="items-wrap">
                          <li class="time-select__item" data-time="09:40">09:40</li>
                          <li class="time-select__item" data-time="13:45">13:45</li>
                          <li class="time-select__item" data-time="15:45">15:45</li>
                          <li class="time-select__item" data-time="19:50">19:50</li>
                          <li class="time-select__item" data-time="21:50">21:50</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Movie variant with time -->
                </div>

                <div class="col-sm-6">
                  <!-- Movie variant with time -->
                  <div class="movie movie--time">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="movie__images">
                          <span class="movie__rating">5.0</span>
                          <img alt src="../assets/images/movie/movie-time2.jpg" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <a
                          href="movie-page-left.html"
                          class="movie__title"
                        >The Hobbit: The Desolation of Smaug (2013)</a>

                        <p class="movie__time">169 min</p>

                        <p class="movie__option">
                          <a href="#">Adventure</a> |
                          <a href="#">Fantazy</a> |
                          <a href="#">Drama</a>
                        </p>
                      </div>

                      <div class="time-select">
                        <ul class="items-wrap">
                          <li class="time-select__item" data-time="09:40">09:40</li>
                          <li class="time-select__item" data-time="13:45">13:45</li>
                          <li class="time-select__item" data-time="15:45">15:45</li>
                          <li class="time-select__item" data-time="19:50">19:50</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Movie variant with time -->
                </div>

                <div class="clearfix"></div>

                <div class="col-sm-6">
                  <!-- Movie variant with time -->
                  <div class="movie movie--time">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="movie__images">
                          <span class="movie__rating">4.9</span>
                          <img alt src="../assets/images/movie/movie-time3.jpg" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <a
                          href="movie-page-left.html"
                          class="movie__title"
                        >The Hunger Games: Catching Fire (2013)</a>

                        <p class="movie__time">149 min</p>

                        <p class="movie__option">
                          <a href="#">Adventure</a> |
                          <a href="#">Action</a> |
                          <a href="#">Sci-Fi</a>
                        </p>
                      </div>

                      <div class="time-select">
                        <ul class="items-wrap">
                          <li class="time-select__item" data-time="09:40">09:40</li>
                          <li class="time-select__item" data-time="13:45">13:45</li>
                          <li class="time-select__item" data-time="15:45">15:45</li>
                          <li class="time-select__item" data-time="19:50">19:50</li>
                          <li class="time-select__item" data-time="21:50">21:50</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Movie variant with time -->
                </div>

                <div class="col-sm-6">
                  <!-- Movie variant with time -->
                  <div class="movie movie--time">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="movie__images">
                          <span class="movie__rating">4.9</span>
                          <img alt src="../assets/images/movie/movie-time4.jpg" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <a
                          href="movie-page-left.html"
                          class="movie__title"
                        >Thor: The Dark World (2013)</a>

                        <p class="movie__time">112 min</p>

                        <p class="movie__option">
                          <a href="#">Action</a> |
                          <a href="#">Adventure</a> |
                          <a href="#">Fantazy</a>
                        </p>
                      </div>

                      <div class="time-select">
                        <ul class="items-wrap">
                          <li class="time-select__item" data-time="09:40">09:40</li>
                          <li class="time-select__item" data-time="13:45">13:45</li>
                          <li class="time-select__item" data-time="15:45">15:45</li>
                          <li class="time-select__item" data-time="19:50">19:50</li>
                          <li class="time-select__item" data-time="21:50">21:50</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Movie variant with time -->
                </div>

                <div class="clearfix"></div>

                <div class="col-sm-6">
                  <!-- Movie variant with time -->
                  <div class="movie movie--time">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="movie__images">
                          <span class="movie__rating">4.1</span>
                          <img alt src="../assets/images/movie/movie-time5.jpg" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <a href="movie-page-left.html" class="movie__title">World War Z (2013)</a>

                        <p class="movie__time">116 min</p>

                        <p class="movie__option">
                          <a href="#">Adventure</a> |
                          <a href="#">Horror</a> |
                          <a href="#">Action</a>
                        </p>
                      </div>

                      <div class="time-select">
                        <ul class="items-wrap">
                          <li class="time-select__item" data-time="09:40">09:40</li>
                          <li class="time-select__item" data-time="13:45">13:45</li>
                          <li class="time-select__item" data-time="15:45">15:45</li>
                          <li class="time-select__item" data-time="19:50">19:50</li>
                          <li class="time-select__item" data-time="21:50">21:50</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Movie variant with time -->
                </div>

                <div class="col-sm-6">
                  <!-- Movie variant with time -->
                  <div class="movie movie--time">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="movie__images">
                          <span class="movie__rating">4.9</span>
                          <img alt src="../assets/images/movie/movie-time6.jpg" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <a href="movie-page-left.html" class="movie__title">Prisoners (2013)</a>

                        <p class="movie__time">153 min</p>

                        <p class="movie__option">
                          <a href="#">Crime</a> |
                          <a href="#">Thriller</a> |
                          <a href="#">Drama</a>
                        </p>
                      </div>

                      <div class="time-select">
                        <ul class="items-wrap">
                          <li class="time-select__item" data-time="09:40">09:40</li>
                          <li class="time-select__item" data-time="13:45">13:45</li>
                          <li class="time-select__item" data-time="15:45">15:45</li>
                          <li class="time-select__item" data-time="19:50">19:50</li>
                          <li class="time-select__item" data-time="21:50">21:50</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Movie variant with time -->
                </div>

                <div class="clearfix"></div>

                <div class="col-sm-6">
                  <!-- Movie variant with time -->
                  <div class="movie movie--time">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="movie__images">
                          <span class="movie__rating">4.6</span>
                          <img alt src="../assets/images/movie/movie-time7.jpg" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <a href="movie-page-left.html" class="movie__title">This Is the End (2013)</a>

                        <p class="movie__time">107 min</p>

                        <p class="movie__option">
                          <a href="#">Comedy</a> |
                          <a href="#">Fantazy</a>
                        </p>
                      </div>

                      <div class="time-select">
                        <ul class="items-wrap">
                          <li class="time-select__item" data-time="09:40">09:40</li>
                          <li class="time-select__item" data-time="13:45">13:45</li>
                          <li class="time-select__item" data-time="15:45">15:45</li>
                          <li class="time-select__item" data-time="19:50">19:50</li>
                          <li class="time-select__item" data-time="21:50">21:50</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- Movie variant with time -->
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="comment1">
            <div class="container">
              <div class="comment-wrapper">
                <form id="comment-form" class="comment-form" method="post">
                  <textarea class="comment-form__text" placeholder="Add you comment here"></textarea>
                  <label class="comment-form__info">250 characters left</label>
                  <button type="submit" class="btn btn-md btn--danger comment-form__btn">add comment</button>
                </form>

                <div class="comment-sets comment--light">
                  <div class="comment">
                    <div class="comment__images">
                      <img alt src="../assets/images/comment/avatar.jpg" />
                    </div>

                    <a href="#" class="comment__author">
                      <span class="social-used fa fa-facebook"></span>Roberta Inetti
                    </a>
                    <p class="comment__date">today | 03:04</p>
                    <p
                      class="comment__message"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae enim sollicitudin, euismod erat id, fringilla lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat at viverra a, mattis in velit. Morbi molestie rhoncus enim, vitae sagittis dolor tristique et.</p>
                    <a href="#" class="comment__reply">Reply</a>
                  </div>

                  <div class="comment">
                    <div class="comment__images">
                      <img alt src="../assets/images/comment/avatar-olia.jpg" />
                    </div>

                    <a href="#" class="comment__author">
                      <span class="social-used fa fa-vk"></span>Olia Gozha
                    </a>
                    <p class="comment__date">22.10.2013 | 14:40</p>
                    <p
                      class="comment__message"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae enim sollicitudin, euismod erat id, fringilla lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat at viverra a, mattis in velit. Morbi molestie rhoncus enim, vitae sagittis dolor tristique et.</p>
                    <a href="#" class="comment__reply">Reply</a>
                  </div>

                  <div class="comment comment--answer">
                    <div class="comment__images">
                      <img alt src="../assets/images/comment/avatar-dmitriy.jpg" />
                    </div>

                    <a href="#" class="comment__author">
                      <span class="social-used fa fa-vk"></span>Dmitriy Pustovalov
                    </a>
                    <p class="comment__date">today | 10:19</p>
                    <p
                      class="comment__message"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae enim sollicitudin, euismod erat id, fringilla lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat at viverra a, mattis in velit. Morbi molestie rhoncus enim, vitae sagittis dolor tristique et.</p>
                    <a href="#" class="comment__reply">Reply</a>
                  </div>

                  <div class="comment comment--last">
                    <div class="comment__images">
                      <img alt src="../assets/images/comment/avatar-sia.jpg" />
                    </div>

                    <a href="#" class="comment__author">
                      <span class="social-used fa fa-facebook"></span>Sia Andrews
                    </a>
                    <p class="comment__date">22.10.2013 | 12:31</p>
                    <p
                      class="comment__message"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae enim sollicitudin, euismod erat id, fringilla lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat at viverra a, mattis in velit. Morbi molestie rhoncus enim, vitae sagittis dolor tristique et.</p>
                    <a href="#" class="comment__reply">Reply</a>
                  </div>

                  <div id="hide-comments" class="hide-comments">
                    <div class="comment">
                      <div class="comment__images">
                        <img alt src="../assets/images/comment/avatar.jpg" />
                      </div>

                      <a href="#" class="comment__author">
                        <span class="social-used fa fa-facebook"></span>Roberta Inetti
                      </a>
                      <p class="comment__date">today | 03:04</p>
                      <p
                        class="comment__message"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae enim sollicitudin, euismod erat id, fringilla lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat at viverra a, mattis in velit. Morbi molestie rhoncus enim, vitae sagittis dolor tristique et.</p>
                      <a href="#" class="comment__reply">Reply</a>
                    </div>

                    <div class="comment">
                      <div class="comment__images">
                        <img alt src="../assets/images/comment/avatar-olia.jpg" />
                      </div>

                      <a href="#" class="comment__author">
                        <span class="social-used fa fa-vk"></span>Olia Gozha
                      </a>
                      <p class="comment__date">22.10.2013 | 14:40</p>
                      <p
                        class="comment__message"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae enim sollicitudin, euismod erat id, fringilla lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat at viverra a, mattis in velit. Morbi molestie rhoncus enim, vitae sagittis dolor tristique et.</p>
                      <a href="#" class="comment__reply">Reply</a>
                    </div>
                  </div>

                  <div class="comment-more">
                    <a href="#" class="watchlist">Show more comments</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane active" id="map1">
            <div id="cinema-map" class="map"></div>
          </div>
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
