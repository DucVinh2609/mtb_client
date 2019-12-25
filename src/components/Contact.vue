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
      <h2 class="page-heading heading--outcontainer">Contact</h2>
      <div class="contact">
        <p class="contact__title">
          You have any questions or need help,
          <br />
          <span class="contact__describe">don’t be shy and contact us</span>
        </p>
        <span class="contact__mail">ducvinhnguyen2609@gmail.com</span>
        <span class="contact__tel">0787073046</span>
      </div>
    </section>

    <div class="contact-form-wrapper">
      <div class="container">
        <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <form id="contact-form" class="form row" method="post" novalidate action="send.php">
            <p class="form__title">Drop us a line</p>
            <div class="col-sm-6">
              <input type="text" placeholder="Your name" name="user-name" class="form__name" />
            </div>
            <div class="col-sm-6">
              <input type="email" placeholder="Your email" name="user-email" class="form__mail" />
            </div>
            <div class="col-sm-12">
              <textarea placeholder="Your message" name="user-message" class="form__message"></textarea>
            </div>
            <button type="submit" class="btn btn-md btn--danger">send message</button>
          </form>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="contact">
        <p class="contact__title">
          Trying to find our location?
          <br />
          <span class="contact__describe">we are here</span>
        </p>
      </div>
    </section>

    <div class="map cssmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.839791917705!2d108.14772551530515!3d16.073801288878226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68e8ccb03%3A0x64dc2cb3e38bbdaf!2zNTQgTmd1eeG7hW4gTMawxqFuZyBC4bqxbmcsIEhvw6AgS2jDoW5oIELhuq9jLCBMacOqbiBDaGnhu4N1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1576581138724!5m2!1svi!2s" width="1200" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>

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


<style scoped>
  .cssmap {
    text-align: center;
  }
</style>

<script>
import Header from '@/components/common/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
