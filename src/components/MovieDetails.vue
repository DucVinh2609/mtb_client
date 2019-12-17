<style scoped></style>

<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../assets/images/banners/banner.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>

    <ul v-if="errors && errors.length">
      <li v-for="error in errors" :key="error.id">
        {{error.message}}
      </li>
    </ul>

    <!-- Search bar -->
    <div class="search-wrapper">
      <div class="container container--add">
        <form id="search-form" method="get" class="search">
          <!-- <input type="text" class="search__field" placeholder="Search" /> -->
          <select name="sorting_item" id="search-sort" class="search__sort" tabindex="0">
            <option value="1" selected="selected">By title</option>
            <option value="2">By year</option>
            <option value="3">By producer</option>
            <option value="4">By title</option>
            <option value="5">By year</option>
          </select>
          <!-- <button type="submit" class="btn btn-md btn--danger search__button">search a movie</button> -->
        </form>
      </div>
    </div>

    <!-- Main content -->
    <section class="container">
      <div class="col-sm-8 col-md-9">
        <div class="movie">
          <h2 class="page-heading">{{ moviesDetail.name }}</h2>

          <div class="movie__info">
            <div class="col-sm-6 col-md-4 movie-mobile">
              <div class="movie__images">
                <span class="movie__rating">5.0</span>
                <img alt v-if="moviesDetail.image!=null" v-bind:src="getImgae(moviesDetail.image)"/>
                <img alt v-else src="../assets/images/movie/movie-sample1.jpg" />
              </div>
              <div class="movie__rate">
                Your vote:
                <div id="score" class="score"></div>
              </div>
            </div>

            <div class="col-sm-6 col-md-8">
              <p class="movie__time">{{ moviesDetail.duration | formatTime }} hour</p>

              <p class="movie__option">
                <strong>Country:</strong>
                <a href="#">{{ moviesDetail.country_code }}</a>
              </p>
              <p class="movie__option">
                <strong>Year:</strong>
                <a href="#">2012</a>
              </p>
              <p class="movie__option">
                <strong>Category:</strong>
                <a href="#">{{ moviesDetail.note }}</a>
              </p>
              <p class="movie__option">
                <strong>Release date:</strong>{{ moviesDetail.start_date | formatDate }} - {{ moviesDetail.end_date | formatDate }}
              </p>
              <p class="movie__option">
                <strong>Director:</strong>
                <a href="#">Peter Jackson</a>
              </p>
              <p class="movie__option">
                <strong>Actors:</strong>
                <a href="#">Martin Freeman</a>,
                <a href="#">Ian McKellen</a>,
                <a href="#">Richard Armitage</a>,
                <a href="#">Ken Stott</a>,
                <a href="#">Graham McTavish</a>,
                <a href="#">Cate Blanchett</a>,
                <a href="#">Hugo Weaving</a>,
                <a href="#">Ian Holm</a>,
                <a href="#">Elijah Wood</a>
                <a href="#">...</a>
              </p>
              <p class="movie__option">
                <strong>Age restriction:</strong>
                <a href="#">13</a>
              </p>
              <p class="movie__option">
                <strong>Box office:</strong>
                <a href="#">$1 017 003 568</a>
              </p>
            </div>
          </div>

          <div class="clearfix"></div>

          <h2 class="page-heading">The plot</h2>

          <p
            class="movie__describe"
          > {{ moviesDetail.description }}

          <h2 class="page-heading">photos &amp; videos</h2>

          <div class="movie__media">
              <div class="movie__media-switch">
                  <a href="#" class="watchlist list--photo" data-filter="media-photo">234 photos</a>
                  <a href="#" class="watchlist list--video" data-filter="media-video">10 videos</a>
              </div>

              <div class="swiper-container">
                <div class="swiper-wrapper" style="width: 1292px; height: 90.8906px; transform: translate3d(-323px, 0px, 0px); transition-duration: 0s;">
                    <!--First Slide-->
                    <div class="swiper-slide media-video swiper-slide-visible swiper-slide-active" style="width: 209.375px; height: 119.625px; margin-left: -1px; display: none;">
                      <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="movie__media-item ">
                        <img alt="" src="../assets/images/movie/movie-video1.jpg">
                      </a>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <h2 class="page-heading">showtime &amp; tickets</h2>
        <div class="choose-container">

          <div class="clearfix"></div>
          <!-- select TIME MOVIE -->
          <TimeMovie v-bind:moviesDates="moviesDates" v-bind:moviesTimes="moviesTimes"></TimeMovie>

          <h2 class="page-heading">comments</h2>

          <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="850" data-numposts="10"></div>
        </div>
      </div>

      <aside class="col-sm-4 col-md-3">
        <div class="sitebar">

          <div class="category category--discuss category--count marginb-sm mobile-category ls-cat">
            <h3 class="category__title">
              the Most
              <br />
              <span class="title-edition">discussed posts</span>
            </h3>
            <ol>
              <li v-for="movie in moviesBest" :key="movie.id">
                <a class="category__item">{{ movie.name }}</a>
              </li>
            </ol>
          </div>

          <div class="category category--cooming category--count marginb-sm mobile-category rs-cat">
            <h3 class="category__title">
              coming soon
              <br />
              <span class="title-edition">movies</span>
            </h3>
            <ol>
              <li>
                <a href="#" class="category__item">Ender's Game</a>
              </li>
              <li>
                <a href="#" class="category__item">About Time</a>
              </li>
              <li>
                <a href="#" class="category__item">Last Vegas</a>
              </li>
              <li>
                <a href="#" class="category__item">Free Birds</a>
              </li>
              <li>
                <a href="#" class="category__item">The Wolf of Wall Street</a>
              </li>
              <li>
                <a href="#" class="category__item">The Best Man Holiday</a>
              </li>
              <li>
                <a href="#" class="category__item">The Book Thief</a>
              </li>
              <li>
                <a href="#" class="category__item">The Hunger Games: Catching Fire</a>
              </li>
              <li>
                <a href="#" class="category__item">Delivery Man</a>
              </li>
              <li>
                <a href="#" class="category__item">Nebraska</a>
              </li>
            </ol>
          </div>
        </div>
      </aside>
    </section>

    <div class="clearfix"></div>

    <Footer></Footer>

    <ModalSignin></ModalSignin>
  </div>
</template>

<script>
  import router from '@/router'
  import Header from './common/Header.vue'
  import ModalSignin from './common/ModalSignin.vue'
  import Footer from './common/Footer.vue'
  import TimeMovie from './movie/TimeMovie.vue'
  import axios from 'axios'

  export default {
    components: {
      Header,
      ModalSignin,
      Footer,
      TimeMovie,
    },
    data() {
      return {
        moviesDetail: [],
        errors: [],
        moviesDates: [],
        moviesTimes: [],
        moviesBest: []
      }
    },
    methods: {
      async getMovieDetail() {
        try {
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:5000/api/movie_detail/'+this.$route.params.id
          const response = await fetch(targetUrl)
          const data = await response.json()
          this.moviesDetail = data[0]
          // this.formatYear = this.moviesDetail
        } catch (error) {
          this.errors.push(error)
        }
      },
      async getMovieDate() {
        try {
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:5000/api/movie_detail_date/'+this.$route.params.id
          const response = await fetch(targetUrl)
          const data = await response.json()
          this.moviesDates = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      async getMovieTime() {
        try {
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:5000/api/movie_detail_time/'+this.$route.params.id
          const response = await fetch(targetUrl)
          const data = await response.json()
          this.moviesTimes = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      getImgae(image){
        return 'https://mtb-admin.herokuapp.com'+image;
      },
      async getMovieBest() {
        try {
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
              targetUrl = 'https://mtb-admin.herokuapp.com/api/best_movies'
          const response = await fetch(proxyUrl + targetUrl)
          const data = await response.json()
          this.moviesBest = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      detailMovie(id) {
        this.$router.push({ name: 'MovieDetails', params:{id: id} });
      },
    },
    mounted() {
      this.getMovieDetail(),
      this.getMovieDate(),
      this.getMovieTime(),
      this.getMovieBest()
    },
  }
</script>
