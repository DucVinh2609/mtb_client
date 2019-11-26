<template>
  <div class="col-sm-12" id="list-movies">
    <div class="row">
      <div class="col-sm-8 col-md-9" >

        <!-- Movie variant with time -->
        <div v-for="movie in movies" :key="movie.id">
          <div class="movie movie--test movie--test--dark movie--test--left">
            <div class="movie__images">
              <a href="movie-page-left.html" class="movie-beta__link">
                <img alt src="../../assets/images/movie/movie-time8.jpg" />
              </a>
            </div>

            <div class="movie__info">
              <a href="movie-page-left.html" class="movie__title">{{ movie.name }} ({{ movie.start_date }})</a>

              <p class="movie__time">{{ movie.duration }}  min</p>

              <p class="movie__option">
                <a href="#">Sci-Fi</a> |
                <a href="#">Thriller</a> |
                <a href="#">Drama</a>
              </p>

              <div class="movie__rate">
                <div class="score"></div>
                <span class="movie__rating">4.1</span>
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
  }
</script>

<style scoped></style>
