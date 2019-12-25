<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../../assets/images/banners/banner.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>

    <!-- Search bar -->
    <Search></Search>

    <div class="contact-form-wrapper">
      <div class="container">
        <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <form id="contact-form" class="form row" method="post" novalidate action="send.php">
            <p class="form__title">Setting</p>
            <div class="col-sm-6">
              <input type="text" placeholder="Your name" name="username" class="form__name" />
            </div>
            <div class="col-sm-6">
              <input type="text" placeholder="Your fullname" name="fullname" class="form__name" />
            </div>
            <div class="col-sm-6">
              <input type="email" placeholder="Your email" name="email" class="form__mail" />
            </div>
            <div class="col-sm-6">
              <input type="text" placeholder="Your phone number" name="phone" class="form__name" />
            </div>
            <div class="col-sm-6">
              <input type="text" placeholder="Your address" name="address" class="form__mail" />
            </div>
            <div class="col-sm-6">
              <!-- <v-select :options="options" :reduce="country => country.code" label="country" class="form__mail"/> -->
              <input type="text" placeholder="Your email" name="user-email" class="form__mail" />
            </div>
            <button type="submit" class="btn btn-md btn--danger">Save</button>
          </form>
        </div>
      </div>
    </div>

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

<style scoped>
  .cssmap {
    text-align: center;
  }
</style>

<script>
  $(document).ready(function () {
    let options = [{code: 'CA', country: 'Canada'}];
  });

import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Search from '@/components/common/Search.vue'

export default {
  components: {
    Header
  }
}
</script>
