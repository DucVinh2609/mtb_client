<template>
  <div class="col-sm-12" id="list-movies">
    <div class="row">
      <div class="col-sm-8 col-md-9" >

        <!-- Movie variant with time -->
        <div v-for="movie in movies" :key="movie.id">
          <div class="movie movie--test movie--test--dark movie--test--left">
            <div class="movie__images">
              <a @click="detailMovie(movie)" class="movie-beta__link">
                <img alt v-if="movie.image!=null" v-bind:src="getImgae(movie.image)"/>
                <img alt v-else src="../../assets/images/movie/movie-sample1.jpg" />
              </a>
            </div>

            <div class="movie__info">
              <a @click="detailMovie(movie)" class="movie__title">{{ movie.name }} ({{ movie.start_date | formatDate }})</a>

              <p class="movie__time">{{ movie.duration | formatTime }}  hour</p>

              <p class="movie__option">
                <a href="#">Sci-Fi</a> |
                <a href="#">Thriller</a> |
                <a href="#">Drama</a>
              </p>

              <div class="movie__rate">
                <div class="score"></div>
                <span class="movie__rating">{{ movie.rate }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Movie variant with time -->
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'list-movies',
    props: {
      movies: Array
    },
    methods: {
      detailMovie(movie) {
        this.$router.push({ name: 'MovieDetails', params:{id: movie.id} });
      },
      getImgae(image){
        return 'http://localhost:5000'+image;
      }

    }
  }
</script>

<style scoped></style>
