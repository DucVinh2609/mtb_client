<template>
  <div class="movie-best" id="movie-best">
    <div class="col-sm-10 col-sm-offset-1 movie-best__rating">Today Best choice</div>
    <div class="col-sm-12 change--col">
      <div v-for="movie in moviesBest" :key="movie.id">
        <div class="movie-beta__item mutiple-item">
          <img alt v-if="movie.image!=null" v-bind:src="getImgae(movie.image)"/>
          <img alt v-else src="../../assets/images/movie/movie-sample1.jpg" />
          <span class="best-rate">{{ movie.rate }}</span>

          <ul class="movie-beta__info">
            <li>
              <span class="best-voted">{{ movie.name }}</span>
            </li>
            <li>
              <p class="movie__time">{{ movie.duration | formatTime }} min</p>
              <p>Adventure | Drama | Fantasy</p>
              <p>38 comments</p>
            </li>
            <li class="last-block">
              <a @click="detailMovie(movie)" class="slide__link">more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-10 col-sm-offset-1 movie-best__check">check all movies now playing</div>
  </div>
</template>


<script>
  import router from '@/router'

  export default {
    name: 'movie-best',
    props: {
      moviesBest: Array
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
