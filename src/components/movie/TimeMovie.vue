<template>
  <div class="time-select">
    <div class="time-select__group" v-for="moviesDate in moviesDates" :key="moviesDate.id">
      <div class="col-sm-4">
        <p class="time-select__place">{{ moviesDate.showtime | formatDate }}</p>
      </div>
      <ul class="col-sm-8 items-wrap">
        <li v-for="(moviesTime, id) in moviesTimes" :key="id" v-if="moviesTime.showtime === moviesDate.showtime" class="time-select__item" @click="myFilter(id)" v-bind:class="{ active: id === isActive }">
          {{ moviesTime.time | formatTime}}
        </li>
      </ul>
    </div>
</template>

<script>
  import router from '@/router/index'

  export default {
    name: 'time-movie',
    data() {
      return {
        isActive: null
      }
    },
    props: {
      moviesDates: Array,
      moviesTimes: Array
    },
    methods: {
      async myFilter(id) {
        this.isActive = id
      }
    }

  }
</script>

<style scoped></style>
