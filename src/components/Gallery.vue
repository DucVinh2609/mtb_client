<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../assets/images/banners/banner.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>

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
        <h2 class="page-heading">Gallery</h2>

        <div class="row">
          <div class="gallery-wrapper">
            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-1.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-1.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-1.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Marble Arch Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-2.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-2.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-2.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-3.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-3.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-3.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__image gallery-item--video"
                >
                  <img alt src="../assets/images/gallery/thumb/item-4.jpg" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__descript gallery-item--video-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-video-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-5.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-5.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-5.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Marble Arch Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-6.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-6.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-6.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__image gallery-item--video"
                >
                  <img alt src="../assets/images/gallery/thumb/item-7.jpg" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__descript gallery-item--video-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-video-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-8.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-8.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-8.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-9.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-9.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-9.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Marble Arch Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__image gallery-item--video"
                >
                  <img alt src="../assets/images/gallery/thumb/item-10.jpg" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__descript gallery-item--video-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-video-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="images/gallery/large/item-11.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-11.jpg" />
                </a>
                <a
                  href="images/gallery/large/item-11.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-12.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-12.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-12.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="../assets/images/gallery/large/item-13.jpg"
                  class="gallery-item__image gallery-item--photo"
                >
                  <img alt src="../assets/images/gallery/thumb/item-13.jpg" />
                </a>
                <a
                  href="../assets/images/gallery/large/item-13.jpg"
                  class="gallery-item__descript gallery-item--photo-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-camera"></i>
                  </span>
                  <p class="gallery-item__name">Marble Arch Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__image gallery-item--video"
                >
                  <img alt src="../assets/images/gallery/thumb/item-14.jpg" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__descript gallery-item--video-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-video-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="gallery-item">
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__image gallery-item--video"
                >
                  <img alt src="../assets/images/gallery/thumb/item-15.jpg" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                  class="gallery-item__descript gallery-item--video-link"
                >
                  <span class="gallery-item__icon">
                    <i class="fa fa-video-camera"></i>
                  </span>
                  <p class="gallery-item__name">Camden Town Odeon</p>
                </a>
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

<script>
import Header from '@/components/common/Header.vue'

export default {
  components: {
    Header
  }
}
</script>