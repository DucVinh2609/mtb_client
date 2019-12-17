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
        <h2 class="page-heading">trailers</h2>

        <div class="trailer-wrapper">
          <!-- Films trailers -->
          <div class="trailer-block row">
            <div class="col-sm-4 col-md-3">
              <div class="trailer">
                <p class="trailer__name">Thor: The Dark World</p>
                <p class="trailer__number">12 trailers</p>
              </div>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-1.jpg" />
              </a>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-2.jpg" />
              </a>
            </div>

            <div class="col-md-3 hidden-sm">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-3.jpg" />
              </a>
            </div>

            <a href="#" class="trailer-btn">
              <span class="btn-circled"></span>
            </a>

            <div class="hidden-content">
              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-1.jpg" />
                </a>
              </div>

              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-2.jpg" />
                </a>
              </div>

              <div class="col-md-3 hidden-sm">
                <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-3.jpg" />
                </a>
              </div>

              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-1.jpg" />
                </a>
              </div>

              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-2.jpg" />
                </a>
              </div>
            </div>
          </div>
          <!--end films trailers-->

          <!-- Films trailers -->
          <div class="trailer-block row">
            <div class="col-sm-4 col-md-3">
              <div class="trailer">
                <p class="trailer__name">The Book Thief</p>
                <p class="trailer__number">4 trailers</p>
              </div>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-4.jpg" />
              </a>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-5.jpg" />
              </a>
            </div>

            <div class="col-md-3 hidden-sm">
              <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-6.jpg" />
              </a>
            </div>

            <a href="#" class="trailer-btn">
              <span class="btn-circled"></span>
            </a>

            <div class="hidden-content">
              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-1.jpg" />
                </a>
              </div>
            </div>
          </div>

          <!--end films trailers-->

          <!-- Films trailers -->
          <div class="trailer-block trailer-block--short row">
            <div class="col-sm-4 col-md-3">
              <div class="trailer">
                <p class="trailer__name">How I Live Now</p>
                <p class="trailer__number">2 trailers</p>
              </div>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-7.jpg" />
              </a>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-8.jpg" />
              </a>
            </div>
          </div>

          <!--end films trailers-->

          <!-- Films trailers -->
          <div class="trailer-block row">
            <div class="col-sm-4 col-md-3">
              <div class="trailer">
                <p class="trailer__name">Ender's Game</p>
                <p class="trailer__number">9 trailers</p>
              </div>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-9.jpg" />
              </a>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-10.jpg" />
              </a>
            </div>

            <div class="col-md-3 hidden-sm">
              <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-11.jpg" />
              </a>
            </div>

            <a href="#" class="trailer-btn">
              <span class="btn-circled"></span>
            </a>

            <div class="hidden-content">
              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-1.jpg" />
                </a>
              </div>

              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-2.jpg" />
                </a>
              </div>

              <div class="col-md-3 hidden-sm">
                <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-3.jpg" />
                </a>
              </div>
            </div>
          </div>

          <!--end films trailers-->

          <!-- Films trailers -->
          <div class="trailer-block row">
            <div class="col-sm-4 col-md-3">
              <div class="trailer">
                <p class="trailer__name">Last Vegas</p>
                <p class="trailer__number">4 trailers</p>
              </div>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-12.jpg" />
              </a>
            </div>

            <div class="col-sm-4 col-md-3">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-13.jpg" />
              </a>
            </div>

            <div class="col-md-3 hidden-sm">
              <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                <img alt src="../assets/images/trailers/trailer-14.jpg" />
              </a>
            </div>

            <a href="#" class="trailer-btn">
              <span class="btn-circled"></span>
            </a>

            <div class="hidden-content">
              <div class="col-sm-4 col-md-3">
                <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="trailer-sample">
                  <img alt src="../assets/images/trailers/trailer-1.jpg" />
                </a>
              </div>
            </div>
          </div>

          <!--end films trailers-->
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