<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../assets/images/banners/banner.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>

    <!-- Slider -->
    <Banner></Banner>
    <!-- End Slider -->

    <!-- Main content -->
    <section class="container">
      <MovieBest v-bind:moviesBest="moviesBest"></MovieBest>

      <div class="col-sm-12">
        <div class="mega-select-present mega-select-top mega-select--full">
          <div class="mega-select-marker">
            <div class="marker-indecator location" style="display: block;">
                <p class="select-marker"><span>movie to watch now</span> <br>in your city</p>
            </div>

            <div class="marker-indecator cinema" style="display: none;">
                <p class="select-marker"><span>find your </span> <br>cinema</p>
            </div>

            <div class="marker-indecator film-category" style="display: none;">
                <p class="select-marker"><span>find movie due to </span> <br> your mood</p>
            </div>

            <div class="marker-indecator actors" style="display: none;">
                <p class="select-marker"><span> like particular stars</span> <br>find them</p>
            </div>

            <div class="marker-indecator director" style="display: none;">
                <p class="select-marker"><span>admire personalities - find </span> <br>by director</p>
            </div>

            <div class="marker-indecator country" style="display: none;">
                <p class="select-marker"><span>search for movie from certain </span> <br>country?</p>
            </div>
          </div>

          <div class="mega-select pull-right">
            <span class="mega-select__point">Search by</span>
            <ul class="mega-select__sort">
              <li class="filter-wrap">
                <a
                  href="#"
                  class="mega-select__filter filter--active"
                  data-filter="location"
                >Location</a>
              </li>
              <li class="filter-wrap">
                <a href="#" class="mega-select__filter" data-filter="cinema">Cinema</a>
              </li>
              <li class="filter-wrap">
                <a href="#" class="mega-select__filter" data-filter="film-category">Category</a>
              </li>
              <li class="filter-wrap">
                <a href="#" class="mega-select__filter" data-filter="actors">Actors</a>
              </li>
              <li class="filter-wrap">
                <a href="#" class="mega-select__filter" data-filter="director">Director</a>
              </li>
              <li class="filter-wrap">
                <a href="#" class="mega-select__filter" data-filter="country">Country</a>
              </li>
            </ul>

            <input name="search-input" type="text" class="select__field" />

            <div class="select__btn">
              <a href="#" class="btn btn-md btn--danger location">
                find
                <span class="hidden-exrtasm">your city</span>
              </a>
              <a href="#" class="btn btn-md btn--danger cinema">
                find
                <span class="hidden-exrtasm">suitable cimema</span>
              </a>
              <a href="#" class="btn btn-md btn--danger film-category">
                find
                <span class="hidden-exrtasm">best category</span>
              </a>
              <a href="#" class="btn btn-md btn--danger actors">
                find
                <span class="hidden-exrtasm">talented actors</span>
              </a>
              <a href="#" class="btn btn-md btn--danger director">
                find
                <span class="hidden-exrtasm">favorite director</span>
              </a>
              <a href="#" class="btn btn-md btn--danger country">
                find
                <span class="hidden-exrtasm">produced country</span>
              </a>
            </div>

            <div class="select__dropdowns">
              <ul class="select__group location">
                <li class="select__variant" data-value="London">London</li>
                <li class="select__variant" data-value="New York">New York</li>
                <li class="select__variant" data-value="Paris">Paris</li>
                <li class="select__variant" data-value="Berlin">Berlin</li>
                <li class="select__variant" data-value="Moscow">Moscow</li>
                <li class="select__variant" data-value="Minsk">Minsk</li>
                <li class="select__variant" data-value="Warsawa">Warsawa</li>
              </ul>

              <ul class="select__group cinema">
                <li class="select__variant" data-value="Cineworld">Cineworld</li>
                <li class="select__variant" data-value="Empire">Empire</li>
                <li class="select__variant" data-value="Everyman">Everyman</li>
                <li class="select__variant" data-value="Odeon">Odeon</li>
                <li class="select__variant" data-value="Picturehouse">Picturehouse</li>
              </ul>

              <ul class="select__group film-category">
                <li class="select__variant" data-value="Children's">Children's</li>
                <li class="select__variant" data-value="Comedy">Comedy</li>
                <li class="select__variant" data-value="Drama">Drama</li>
                <li class="select__variant" data-value="Fantasy">Fantasy</li>
                <li class="select__variant" data-value="Horror">Horror</li>
                <li class="select__variant" data-value="Thriller">Thriller</li>
              </ul>

              <ul class="select__group actors">
                <li class="select__variant" data-value="Leonardo DiCaprio">Leonardo DiCaprio</li>
                <li class="select__variant" data-value="Johnny Depp">Johnny Depp</li>
                <li class="select__variant" data-value="Jack Nicholson">Jack Nicholson</li>
                <li class="select__variant" data-value="Robert De Niro">Robert De Niro</li>
                <li class="select__variant" data-value="Morgan Freeman">Morgan Freeman</li>
                <li class="select__variant" data-value="Jim Carrey">Jim Carrey</li>
                <li class="select__variant" data-value="Adam Sandler">Adam Sandler</li>
                <li class="select__variant" data-value="Ben Stiller">Ben Stiller</li>
              </ul>

              <ul class="select__group director">
                <li class="select__variant" data-value="Steven Spielberg">Steven Spielberg</li>
                <li class="select__variant" data-value="Martin Scorsese">Martin Scorsese</li>
                <li class="select__variant" data-value="Guy Ritchie">Guy Ritchie</li>
                <li class="select__variant" data-value="Christopher Nolan">Christopher Nolan</li>
                <li class="select__variant" data-value="Tim Burton">Tim Burton</li>
              </ul>

              <ul class="select__group country">
                <li class="select__variant" data-value="USA">USA</li>
                <li class="select__variant" data-value="Germany">Germany</li>
                <li class="select__variant" data-value="Australia">Australia</li>
                <li class="select__variant" data-value="UK">UK</li>
                <li class="select__variant" data-value="Japan">Japan</li>
                <li class="select__variant" data-value="Serbia">Serbia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="clearfix"></div>

      <h2 id="target" class="page-heading heading--outcontainer">Now in the cinema</h2>

      <ul v-if="errors && errors.length">
        <li v-for="error in errors" :key="error.id">
          {{error.message}}
        </li>
      </ul>

      <ListMoves v-bind:movies="movies"></ListMoves>

      <div class="col-sm-12">
        <h2 class="page-heading">Latest news</h2>

        <div class="col-sm-4 similar-wrap col--remove">
          <div class="post post--preview post--preview--wide">
            <div class="post__image">
              <img alt src="../assets/images/client-photo/post-thor.jpg" />
              <div class="social social--position social--hide">
                <span class="social__name">Share:</span>
                <a href="#" class="social__variant social--first fa fa-facebook"></a>
                <a href="#" class="social__variant social--second fa fa-twitter"></a>
                <a href="#" class="social__variant social--third fa fa-vk"></a>
              </div>
            </div>
            <p class="post__date">22 October 2013</p>
            <a
              href="single-page-left.html"
              class="post__title"
            >"Thor: The Dark World" - World Premiere</a>
            <a href="single-page-left.html" class="btn read-more post--btn">read more</a>
          </div>
        </div>
        <div class="col-sm-4 similar-wrap col--remove">
          <div class="post post--preview post--preview--wide">
            <div class="post__image">
              <img alt src="../assets/images/client-photo/post-annual.jpg" />
              <div class="social social--position social--hide">
                <span class="social__name">Share:</span>
                <a href="#" class="social__variant social--first fa fa-facebook"></a>
                <a href="#" class="social__variant social--second fa fa-twitter"></a>
                <a href="#" class="social__variant social--third fa fa-vk"></a>
              </div>
            </div>
            <p class="post__date">22 October 2013</p>
            <a
              href="single-page-left.html"
              class="post__title"
            >30th Annual Night Of Stars Presented By The Fashion Group International</a>
            <a href="single-page-left.html" class="btn read-more post--btn">read more</a>
          </div>
        </div>
        <div class="col-sm-4 similar-wrap col--remove">
          <div class="post post--preview post--preview--wide">
            <div class="post__image">
              <img alt src="../assets/images/client-photo/post-awards.jpg" />
              <div class="social social--position social--hide">
                <span class="social__name">Share:</span>
                <a href="#" class="social__variant social--first fa fa-facebook"></a>
                <a href="#" class="social__variant social--second fa fa-twitter"></a>
                <a href="#" class="social__variant social--third fa fa-vk"></a>
              </div>
            </div>
            <p class="post__date">22 October 2013</p>
            <a href="single-page-left.html" class="post__title">Hollywood Film Awards 2013</a>
            <a href="single-page-left.html" class="btn read-more post--btn">read more</a>
          </div>
        </div>
      </div>
    </section>

    <div class="clearfix"></div>
    <Footer></Footer>

    <ModalSignin></ModalSignin>
  </div>
</template>

<script>
import Header from './common/Header.vue'
import ModalSignin from './common/ModalSignin.vue'
import Footer from './common/Footer.vue'
import axios from 'axios'
import ListMoves from './home/ListMoves.vue'
import MovieBest from './home/MovieBest.vue'
import Banner from './home/Banner.vue'

export default {
  components: {
    Header,
    ModalSignin,
    Footer,
    ListMoves,
    MovieBest,
    Banner
  },
  data() {
    return {
      movies: [],
      errors: [],
      moviesBest: []
    }
  },
  methods: {
    async getMovies() {
      try {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:5000/api/list_movies'
        const response = await fetch(targetUrl)
        const data = await response.json()
        this.movies = data
      } catch (error) {
        this.errors.push(error)
      }
    },
    async getMovieBest() {
      try {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://localhost:5000/api/best_movies'
        // const response = await fetch('http://5ddcc1c9f40ae700141e8647.mockapi.io/movie-best')
        const response = await fetch(targetUrl)
        const data = await response.json()
        this.moviesBest = data
      } catch (error) {
        this.errors.push(error)
      }
    }
  },
  mounted() {
    this.getMovies(),
    this.getMovieBest()
  },
}
</script>
