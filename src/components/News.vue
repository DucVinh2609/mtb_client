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
      <div class="overflow-wrapper">
        <div class="col-sm-12">
          <h2 class="page-heading">News</h2>

          <!-- News post article-->
          <article class="post post--news">
            <a href="single-page-full.html" class="post__image-link">
              <img alt src="../assets/images/client-photo/single-post.jpg" />
            </a>

            <h1>
              <a
                href="single-page-full.html"
                class="post__title-link"
              >Donec eu mollis augue, ut egestas leo</a>
            </h1>
            <p class="post__date">29 October 2013</p>

            <div class="wave-devider"></div>

            <p
              class="post__text"
            >Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p>

            <div class="tags">
              <ul>
                <li class="item-wrap">
                  <a href="#" class="tags__item">news</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">movie</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">ceremony</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">award</a>
                </li>
              </ul>
            </div>

            <div class="devider-huge"></div>
          </article>
          <!-- end news post article-->

          <!-- News post article-->
          <article class="post post--news">
            <a href="single-page-full.html" class="post__image-link">
              <img alt src="../assets/images/new/news-1.jpg" />
            </a>

            <h1>
              <a
                href="single-page-full.html"
                class="post__title-link"
              >Donec eu mollis augue, ut egestas leo</a>
            </h1>
            <p class="post__date">29 October 2013</p>

            <div class="wave-devider"></div>

            <p
              class="post__text"
            >Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p>

            <div class="tags">
              <ul>
                <li class="item-wrap">
                  <a href="#" class="tags__item">news</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">movie</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">ceremony</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">award</a>
                </li>
              </ul>
            </div>

            <div class="devider-huge"></div>
          </article>
          <!-- end news post article-->

          <!-- News post article-->
          <article class="post post--news">
            <a href="single-page-full.html" class="post__image-link">
              <img alt src="../assets/images/new/news-2.jpg" />
            </a>

            <h1>
              <a
                href="single-page-full.html"
                class="post__title-link"
              >Donec eu mollis augue, ut egestas leo</a>
            </h1>
            <p class="post__date">29 October 2013</p>

            <div class="wave-devider"></div>

            <p
              class="post__text"
            >Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p>

            <div class="tags">
              <ul>
                <li class="item-wrap">
                  <a href="#" class="tags__item">news</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">movie</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">ceremony</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">award</a>
                </li>
              </ul>
            </div>

            <div class="devider-huge"></div>
          </article>
          <!-- end news post article-->

          <!-- News post article-->
          <article class="post post--news">
            <a href="single-page-full.html" class="post__image-link">
              <img alt src="../assets/images/new/news-3.jpg" />
            </a>

            <h1>
              <a
                href="single-page-full.html"
                class="post__title-link"
              >Donec eu mollis augue, ut egestas leo</a>
            </h1>
            <p class="post__date">29 October 2013</p>

            <div class="wave-devider"></div>

            <p
              class="post__text"
            >Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p>

            <div class="tags">
              <ul>
                <li class="item-wrap">
                  <a href="#" class="tags__item">news</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">movie</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">ceremony</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">award</a>
                </li>
              </ul>
            </div>

            <div class="devider-huge"></div>
          </article>
          <!-- end news post article-->

          <!-- News post article-->
          <article class="post post--news">
            <a href="single-page-full.html" class="post__image-link">
              <img alt src="../assets/images/new/news-4.jpg" />
            </a>

            <h1>
              <a
                href="single-page-full.html"
                class="post__title-link"
              >Donec eu mollis augue, ut egestas leo</a>
            </h1>
            <p class="post__date">29 October 2013</p>

            <div class="wave-devider"></div>

            <p
              class="post__text"
            >Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p>

            <div class="tags">
              <ul>
                <li class="item-wrap">
                  <a href="#" class="tags__item">news</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">movie</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">ceremony</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">award</a>
                </li>
              </ul>
            </div>

            <div class="devider-huge"></div>
          </article>
          <!-- end news post article-->

          <!-- News post article-->
          <article class="post post--news">
            <a href="single-page-full.html" class="post__image-link">
              <img alt src="../assets/images/new/news-5.jpg" />
            </a>

            <h1>
              <a
                href="single-page-full.html"
                class="post__title-link"
              >Donec eu mollis augue, ut egestas leo</a>
            </h1>
            <p class="post__date">29 October 2013</p>

            <div class="wave-devider"></div>

            <p
              class="post__text"
            >Mauris gravida ipsum vitae libero molestie eget dignissim ipsum egestas. Quisque in eros id velit molestie placerat a ut arcu. Etiam consequat, turpis ac commodo rhoncus, justo enim consequat tortor, vitae interdum odio tellus at sem. Aliquam lacus quam, lobortis sed lacus eget, commodo volutpat nunc. Text link sample. Proin accumsan diam vel nulla ultrices congue.</p>

            <div class="tags">
              <ul>
                <li class="item-wrap">
                  <a href="#" class="tags__item">news</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">movie</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">ceremony</a>
                </li>
                <li class="item-wrap">
                  <a href="#" class="tags__item">award</a>
                </li>
              </ul>
            </div>

            <div class="devider-huge"></div>
          </article>
          <!-- end news post article-->

          <div class="pagination">
            <a href="#" class="pagination__prev">prev</a>
            <a href="#" class="pagination__next">next</a>
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

<script>
import Header from '@/components/common/Header.vue'

export default {
  components: {
    Header
  }
}
</script>