<template>
  <div class="movie-best" id="movie-best">
    <div class="col-sm-10 col-sm-offset-1 movie-best__rating">Today Best choice</div>
      <div class="col-sm-12 change--col">
        <div v-for="movie in moviesBest" :key="movie.id">
          <div class="movie-beta__item mutiple-item">
            <img alt src="../../assets/images/movie/movie-sample1.jpg" />
            <span class="best-rate">5.0</span>

            <ul class="movie-beta__info">
              <li>
                <span class="best-voted">{{ movie.name }}</span>
              </li>
              <li>
                <p class="movie__time">{{ movie.duration }} min</p>
                <p>Adventure | Drama | Fantasy</p>
                <p>38 comments</p>
              </li>
              <li class="last-block">
                <a @click="detailMovie(movie.id)" href="movie-page-left.html" class="slide__link">more</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <div class="col-sm-10 col-sm-offset-1 movie-best__check">check all movies now playing</div>
  </div>
</template>


<script>
  export default {
    name: 'movie-best',
    props: {
      moviesBest: Array
    },
    methods: {
      detailMovie(id) {
        this.$router.push({ name: 'MovieDetails' });
      }
    }
  }
</script>

<style scoped></style>
