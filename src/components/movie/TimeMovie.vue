<template>
  <div class="time-select">
    <div class="time-select__group" v-for="moviesDate in moviesDates" :key="moviesDate.id">
      <div class="col-sm-4">
        <p class="time-select__place">{{ moviesDate.showtime }}</p>
      </div>

      <div v-for="moviesTime in moviesTimes" :key="moviesTime.id">
        <p class="col-sm-8 items-wrap">
          <div v-if="moviesTime.showtime === moviesDate.showtime">
            <span class="time-select__item" >{{ moviesDate.time }}</span>
          </div>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    name: 'time-movie',
    props: {
      moviesDates: Array,
      moviesTimes: Array
    }
  }
</script>

<style scoped></style>
