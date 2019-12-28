<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../../assets/images/banners/banner.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>

    <!-- Search bar -->
    <!-- <Search></Search> -->
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
          <div v-for="(movie, id) in movies" :key="id" class="swiper-slide" data-film="The Fifth Estate">
            <div class="film-images" style="width: 197.8px; height: 268.141px;" @click="myFilter(id), myNameMovie(movie.name), getMovieDate(id+1), getMovieTime(id+1)" v-bind:class="{ 'film--choosed': id === isActive }">
              <img alt v-if="movie.image!=null" v-bind:src="getImgae(movie.image)"/>
              <img alt v-else src="../../assets/images/movie/movie-sample1.jpg" />
            </div>
            <p class="choose-film__title">{{ movie.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <section class="container" v-if="isNameMovie != null">
      <div class="col-sm-12">
        <div class="choose-indector choose-indector--film">
          <strong>Choosen:</strong>
          <span class="choosen-area">{{ isNameMovie }}</span>
        </div>
        <h2 class="page-heading heading--outcontainer">Choose a Time</h2>
        <div class="ime-select--wide">
          <div class="time-select">
            <div class="time-select__group" v-for="moviesDate in moviesDates" :key="moviesDate.id">
              <div class="col-sm-4">
                <p class="time-select__place">{{ moviesDate.showtime | formatDate }}</p>
              </div>
              <ul class="col-sm-8 items-wrap">
                <li v-for="(moviesTime, id) in moviesTimes" :key="id" v-if="moviesTime.showtime === moviesDate.showtime" class="time-select__item" @click="myTime(moviesTime.id, moviesTime.room_id), myNameTime(moviesTime.time)" v-bind:class="{ active: moviesTime.id === isTimeMove }">
                  {{ moviesTime.time | formatTime }}
                </li>
              </ul>
            </div>
          </div>
          <!-- <TimeMovie v-bind:moviesDates="moviesDates" v-bind:moviesTimes="moviesTimes"></TimeMovie> -->
        </div>

        <div class="choose-indector choose-indector--time">
          <strong>Choosen:</strong>
          <span class="choosen-area">{{ timeMove | formatTime }}</span>
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
        <a v-if="isTimeMove != null" @click="bookStep2()" target="_blank" class="booking-pagination__next">
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
    data() {
      return {
        movies: [],
        errors: [],
        isActive: null,
        isTimeMove: null,
        isNameMovie: null,
        timeMove: '',
        moviesDates: [],
        moviesTimes: [],
        idRoomMovie: null
      }
    },
    methods: {
      bookStep2() {
        localStorage['idRoom'] = this.idRoomMovie;
        localStorage['idTimeMovie'] = this.isTimeMove;
        localStorage['idMovie'] = this.isActive+1;
        this.$router.push({ name: 'BookStep2', params:{id: this.isTimeMove} });
      },
      // getURL(URL) {
      //   return 'https://cors-anywhere.herokuapp.com/'+URL
      // },
      async getMovies() {
        try {
          const response = await fetch('http://localhost:5000/api/list_movies')
          const data = await response.json()
          this.movies = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      async myFilter(id) {
        this.isActive = id
      },
      async myTime(id, idRoom) {
        this.isTimeMove = id
        this.idRoomMovie = idRoom
        console.log(this.idRoomMovie)
        console.log(this.isTimeMove)
      },
      myNameTime(time) {
        this.timeMove = time
      },
      async myNameMovie(name) {
        this.isNameMovie = name
      },
      async getMovieDate(id) {

        try {
            const response = await fetch('http://localhost:5000/api/movie_detail_date/'+id)
            const data = await response.json()
            this.moviesDates = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      async getMovieTime(id) {
        try {
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
              targetUrl = 'http://localhost:5000/api/movie_detail_time/'+id
            const response = await fetch(targetUrl)
            const data = await response.json()
            this.moviesTimes = data
        } catch (error) {
          this.errors.push(error)
        }
      },
      getImgae(image){
        return 'http://localhost:5000'+image;
      }
    },
    mounted() {
      this.getMovies()
    }
  }
</script>

