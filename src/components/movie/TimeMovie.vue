<template>
  <div class="time-select">
    <div class="time-select__group" v-for="moviesDate in moviesDates" :key="moviesDate.id">
      <div class="col-sm-4">
        <p class="time-select__place">{{ moviesDate.showtime }}</p>
      </div>
      <ul class="col-sm-8 items-wrap" id="movietime">
        <li v-for="moviesTime in moviesTimes" :key="moviesTime.id" v-if="moviesTime.showtime === moviesDate.showtime" class="time-select__item" @click="activate(moviesTime.id)" :class="{ active : active_el == moviesTime.id }">
          {{ moviesTime.time }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    el:"#movietime",
    name: 'time-movie',
    data: {
      active_el: 0
    },
    props: {
      moviesDates: Array,
      moviesTimes: Array
    },
    methods: {
      activate:function(el) {
        this.active_el = el;
      }
    }
  }
</script>

<style scoped></style>
