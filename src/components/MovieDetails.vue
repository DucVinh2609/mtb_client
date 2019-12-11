<style scoped></style>

<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../assets/images/banners/bra.jpg" />
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
      <div class="col-sm-8 col-md-9">
        <div class="movie">
          <h2 class="page-heading">{{ moviesDetail.name }}</h2>

          <div class="movie__info">
            <div class="col-sm-6 col-md-4 movie-mobile">
              <div class="movie__images">
                <span class="movie__rating">5.0</span>
                <img alt src="../assets/images/movie/single-movie.jpg" />
              </div>
              <div class="movie__rate">
                Your vote:
                <div id="score" class="score"></div>
              </div>
            </div>

            <div class="col-sm-6 col-md-8">
              <p class="movie__time">{{ moviesDetail.duration }} min</p>

              <p class="movie__option">
                <strong>Country:</strong>
                <a href="#">New Zeland</a>,
                <a href="#">USA</a>
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
                <strong>Release date:</strong>{{ moviesDetail.start_date }} - {{ moviesDetail.end_date }}
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

              <a href="#" class="comment-link">Comments: 15</a>

              <div class="movie__btns">
                <a href="#" class="btn btn-md btn--warning">book a ticket for this movie</a>
                <a href="#" class="watchlist">Add to watchlist</a>
              </div>
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

                    <!--Second Slide-->
                    <div class="swiper-slide media-video swiper-slide-visible" style="width: 209.375px; height: 119.625px; display: none;">
                      <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="movie__media-item">
                          <img alt="" src="images/movie/movie-video2.jpg">
                      </a>
                    </div>

                    <!--Third Slide-->
                    <div class="swiper-slide media-photo" style="width: 215.333px; height: 90.8906px; display: block; margin-left: -1px;">
                          <a href="images/movie/movie-img1-lg.jpg" class="movie__media-item">
                              <img alt="" src="images/movie/movie-img1.jpg">
                            </a>
                    </div>

                    <!--Four Slide-->
                    <div class="swiper-slide media-photo" style="width: 215.333px; height: 90.8906px; display: block;">
                          <a href="images/movie/movie-img2-lg.jpg" class="movie__media-item">
                              <img alt="" src="images/movie/movie-img2.jpg">
                            </a>
                    </div>

                    <!--Slide-->
                    <div class="swiper-slide media-photo swiper-slide-visible swiper-slide-active" style="width: 215.333px; height: 90.8906px; display: block;">
                          <a href="images/gallery/large/item-7.jpg" class="movie__media-item">
                              <img alt="" src="images/movie/movie-img3.jpg">
                            </a>
                    </div>

                    <!--Slide-->
                    <div class="swiper-slide media-photo swiper-slide-visible" style="width: 215.333px; height: 90.8906px; display: block;">
                          <a href="images/gallery/large/item-11.jpg" class="movie__media-item">
                              <img alt="" src="images/movie/movie-img4.jpg">
                            </a>
                    </div>

                    <!--First Slide-->
                    <div class="swiper-slide media-video swiper-slide-visible" style="width: 209.375px; height: 119.625px; display: none;">
                      <a href="https://www.youtube.com/watch?v=Y5AehBA3IsE" class="movie__media-item ">
                            <img alt="" src="images/movie/movie-video1.jpg">
                      </a>
                    </div>

                    <!--Second Slide-->
                    <div class="swiper-slide media-video swiper-slide-visible" style="width: 209.375px; height: 119.625px; display: none;">
                      <a href="https://www.youtube.com/watch?v=Kb3ykVYvT4U" class="movie__media-item">
                          <img alt="" src="images/movie/movie-video2.jpg">
                      </a>
                    </div>

                    <!--Slide-->
                    <div class="swiper-slide media-photo swiper-slide-visible" style="width: 215.333px; height: 90.8906px; display: block;">
                          <a href="images/gallery/large/item-15.jpg" class="movie__media-item">
                              <img alt="" src="images/movie/movie-img5.jpg">
                            </a>
                    </div>

                    <!--Slide-->
                    <div class="swiper-slide media-photo swiper-slide-visible" style="width: 215.333px; height: 90.8906px; display: block;">
                          <a href="images/gallery/large/item-16.jpg" class="movie__media-item">
                              <img alt="" src="images/movie/movie-img6.jpg">
                            </a>
                    </div>

                </div>
              </div>
          </div>
        </div>

        <h2 class="page-heading">showtime &amp; tickets</h2>
        <div class="choose-container">
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

          <a href="#" id="map-switch" class="watchlist watchlist--map">
            <span class="show-map">Show cinemas on map</span>
            <span class="show-time">Show cinema time table</span>
          </a>

          <div class="clearfix"></div>
          <!-- select TIME MOVIE -->
          <TimeMovie v-bind:moviesDates="moviesDates" v-bind:moviesTimes="moviesTimes"></TimeMovie>

          <!-- hiden maps with multiple locator-->
          <div class="map">
            <div id="cimenas-map"></div>
          </div>

          <h2 class="page-heading">comments (15)</h2>

          <div class="comment-wrapper">
            <form id="comment-form" class="comment-form" method="post">
              <textarea class="comment-form__text" placeholder="Add you comment here"></textarea>
              <label class="comment-form__info">250 characters left</label>
              <button type="submit" class="btn btn-md btn--danger comment-form__btn">add comment</button>
            </form>
          </div>
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
              <li>
                <a href="#" class="category__item">Gravity</a>
              </li>
              <li>
                <a href="#" class="category__item">The Counselor</a>
              </li>
              <li>
                <a href="#" class="category__item">Bad Grandpa</a>
              </li>
              <li>
                <a href="#" class="category__item">Blue Is the Warmest Color</a>
              </li>
              <li>
                <a href="#" class="category__item">Rush</a>
              </li>
              <li>
                <a href="#" class="category__item">Captain Phillips</a>
              </li>
              <li>
                <a href="#" class="category__item">Escape Plan</a>
              </li>
              <li>
                <a href="#" class="category__item">Cloudy with a Chance of Meatballs 2</a>
              </li>
              <li>
                <a href="#" class="category__item">Prisoners</a>
              </li>
              <li>
                <a href="#" class="category__item">The Fifth Estate</a>
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
        moviesTimes: []
        // moviesDates: [
        //   {"id":1,"movie_id":1,"room_id":1,"showtime":"2019-11-30"}, {"id":2,"movie_id":1,"room_id":1,"showtime":"2019-12-1"}, {"id":3,"movie_id":1,"room_id":1,"showtime":"2019-12-03"}, {"id":4,"movie_id":1,"room_id":1,"showtime":"2019-12-04"}
        // ],
        // moviesTimes: [
        //   {"id":1,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-11-30"}, {"id":2,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-11-30"}, {"id":3,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-11-30"}, {"id":4,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-11-30"},
        //   {"id":5,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-1"}, {"id":6,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-1"}, {"id":7,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-1"}, {"id":8,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-1"},
        //   {"id":9,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-12-03"}, {"id":10,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-12-03"}, {"id":11,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-12-03"}, {"id":12,"movie_id":1,"room_id":1,"time":"09:00","showtime":"2019-12-03"},
        //   {"id":13,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-04"}, {"id":14,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-04"}, {"id":15,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-04"}, {"id":16,"movie_id":1,"room_id":1,"time":"10:00","showtime":"2019-12-04"},
        // ]

      }
    },
    methods: {
      async getMovieDetail() {
        // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        //     targetUrl = 'https://mtb-admin.herokuapp.com/api/movie_detail/'+this.$route.params.id
        // this.axios.get(proxyUrl + targetUrl).then((response)=>{
        //   this.moviesDetail=response.data;
        // });

        try {
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://mtb-admin.herokuapp.com/api/movie_detail/'+this.$route.params.id
          const response = await fetch(proxyUrl + targetUrl)
          const data = await response.json()
          this.moviesDetail = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      async getMovieDate() {
        try {
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://mtb-admin.herokuapp.com/api/movie_detail_time/'+this.$route.params.id
          const response = await fetch(proxyUrl + targetUrl)
          const data = await response.json()
          this.moviesDates = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      async getMovieTime() {
        try {
          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://mtb-admin.herokuapp.com/api/movie_detail_time/'+this.$route.params.id
          const response = await fetch(proxyUrl + targetUrl)
          const data = await response.json()
          this.moviesTimes = data
        } catch (error) {
          this.errors.push(error)
        }
      },
    },
    mounted() {
      this.getMovieDetail(),
      this.getMovieDate(),
      this.getMovieTime()
    },
  }
</script>
