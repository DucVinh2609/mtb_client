<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../../assets/images/banners/banner.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>
    <Search></Search>

    <section class="container">
      <div class="col-sm-12">
        
        <h2 class="page-heading">Watch List</h2>
        
        <div class="offers-block">
            <p  v-if="waitList" class="offer-place">Your Watch List</p>
            <p v-else class="offer-place">No Watch List</p>

            <div v-if="waitList">
              <div v-for="list in waitList" :key="list.id" class="col-xs-6 col-sm-4 col-md-3 offers-wrap">
                <a class="offer offer--winter">
                  <div class="offer__head">
                    <p class="offer__name">{{ list.name }}<br></p>
                    <span class="offer__datail">in <br> {{ list.room_name }}  <br> Time: {{ list.time }} </span>
                  </div>
                    <span class="offer__datail">Crate at : {{ list.create_at | formatDate}}  </span>
                    <span class="offer__datail">Seats: {{ list.seats }}  </span>
                    <p class="offer__datail">Price: {{ list.price }}  </p>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>

    <div class="clearfix"></div>

    <Footer></Footer>
  </div>
  
</template>

<script>
  import Header from '@/components/common/Header.vue'
  import Footer from '@/components/common/Footer.vue'
  import Search from '@/components/common/Search.vue'
  import axios from 'axios'
  import router from '@/router/index'

  export default {
    components: {
      Header,
      Footer,
      Search
    },
    data() {
      return {
        waitList: [],
        checkIsLoging: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
      }
    },
    methods: {
      async getWaitList() {
        if (this.checkIsLoging) {
          try {
            const response = await fetch('http://localhost:5000/api/watchlist/'+this.checkIsLoging)
            const data = await response.json()
            this.waitList = data
          } catch (error) {
            alert("Some thing wrongs !!!")
          }
        }
      },
    },
    mounted() {
      this.getWaitList()
    }
  }
</script>

