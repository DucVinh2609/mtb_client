<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../../assets/images/banners/bra.jpg" />
    </div>

    <!-- Header section -->
    <Header></Header>

    <!-- Search bar -->
      <Search></Search>
    <!-- Main content -->

    <section class="container">
      <div class="order-container">
        <div class="order">
          <img class="order__images" alt src="../../assets/images/tickets.png" />
          <p class="order__title">
            Book a ticket
            <br />
            <span class="order__descript">and have fun movie time</span>
          </p>
          <div class="order__control">
            <a href="#" class="order__control-btn active">Purchase</a>
            <a href="#" class="order__control-btn">Reserve</a>
          </div>
        </div>
      </div>
      <div class="order-step-area">
        <div class="order-step first--step">1. What &amp; Where &amp; When</div>
      </div>

      <h2 class="page-heading heading--outcontainer">Choose a movie</h2>
    </section>

    <div class="choose-film">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!--First Slide-->
          <div class="swiper-slide" data-film="The Fifth Estate">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample1.jpg" />
            </div>
            <p class="choose-film__title">The Fifth Estate</p>
          </div>

          <!--Second Slide-->
          <div class="swiper-slide" data-film="Ender’s Game">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample2.jpg" />
            </div>
            <p class="choose-film__title">Ender’s Game</p>
          </div>

          <!--Third Slide-->
          <div class="swiper-slide" data-film="About Time">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample3.jpg" />
            </div>
            <p class="choose-film__title">About Time</p>
          </div>

          <!--Four Slide-->
          <div class="swiper-slide" data-film="Last Vegas">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample4.jpg" />
            </div>
            <p class="choose-film__title">Last Vegas</p>
          </div>

          <!--Five Slide-->
          <div class="swiper-slide" data-film="The Hunger Games: Cathing Fire">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample5.jpg" />
            </div>
            <p class="choose-film__title">The Hunger Games: Cathing Fire</p>
          </div>

          <!--Six Slide-->
          <div class="swiper-slide" data-film="The Counselor">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample6.jpg" />
            </div>
            <p class="choose-film__title">The Counselor</p>
          </div>

          <!--Seven Slide-->
          <div class="swiper-slide" data-film="Free Birds">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample7.jpg" />
            </div>
            <p class="choose-film__title">Free Birds</p>
          </div>

          <!--Eight Slide-->
          <div class="swiper-slide" data-film="Thor: The Dark World">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample8.jpg" />
            </div>
            <p class="choose-film__title">Thor: The Dark World</p>
          </div>

          <!--Nine Slide-->
          <div class="swiper-slide" data-film="The Book Thief">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample9.jpg" />
            </div>
            <p class="choose-film__title">The Book Thief</p>
          </div>

          <!--Ten Slide-->
          <div class="swiper-slide" data-film="The Wolf of Wall Stree">
            <div class="film-images">
              <img alt src="../../assets/images/movie/movie-sample10.jpg" />
            </div>
            <p class="choose-film__title">The Wolf of Wall Stree</p>
          </div>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="col-sm-12">
        <div class="choose-indector choose-indector--film">
          <strong>Choosen:</strong>
          <span class="choosen-area"></span>
        </div>

        <h2 class="page-heading">City &amp; Date</h2>

        <div class="choose-container choose-container--short">
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

          <div class="datepicker">
            <span class="datepicker__marker">
              <i class="fa fa-calendar"></i>Date
            </span>
            <input type="text" id="datepicker" value="03/10/2014" class="datepicker__input" />
          </div>
        </div>

        <h2 class="page-heading">Pick time</h2>

        <div class="ime-select--wide">
          <TimeMovie></TimeMovie>
        </div>

        <div class="choose-indector choose-indector--time">
          <strong>Choosen:</strong>
          <span class="choosen-area"></span>
        </div>
      </div>
    </section>

    <div class="clearfix"></div>

    <form id="film-and-time" class="booking-form" method="get" action="book2.html">
      <input type="text" name="choosen-movie" class="choosen-movie" />

      <input type="text" name="choosen-city" class="choosen-city" />
      <input type="text" name="choosen-date" class="choosen-date" />

      <input type="text" name="choosen-cinema" class="choosen-cinema" />
      <input type="text" name="choosen-time" class="choosen-time" />

      <div class="booking-pagination">
        <a href="#" class="booking-pagination__prev hide--arrow">
          <span class="arrow__text arrow--prev"></span>
          <span class="arrow__info"></span>
        </a>
        <a @click="bookStep2()" class="booking-pagination__next">
          <span class="arrow__text arrow--next">next step</span>
          <span class="arrow__info">choose a sit</span>
        </a>
      </div>
    </form>

    <div class="clearfix"></div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'
  import ModalSignin from '@/components/common/ModalSignin.vue'
  import Footer from '@/components/common/Footer.vue'
  import TimeMovie from '@/components/movie/TimeMovie.vue'
  import Search from '@/components/common/Search.vue'
  import axios from 'axios'
  import router from '@/router/index'

  export default {
    components: {
      Header,
      ModalSignin,
      Footer,
      TimeMovie
    },
    methods: {
      bookStep2() {
        this.$router.push({ name: 'BookStep2'});
      }
    }
  }
</script>

