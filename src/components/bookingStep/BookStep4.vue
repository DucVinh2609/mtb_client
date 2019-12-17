<template>
  <div class="wrapper place-wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt='top banner' src="../../assets/images/banners/bra.jpg">
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
            Thank you
            <br />
            <span class="order__descript">you have successfully purchased tickets</span>
          </p>
        </div>

        <div v-if="inforTicket != null" class="ticket">
          <div class="ticket-position">
            <div class="ticket__indecator indecator--pre">
              <div class="indecator-text pre--text">online ticket</div>
            </div>
            <div class="ticket__inner">
              <div class="ticket-secondary">
                <span class="ticket__item">
                  Ticket number
                  <strong class="ticket__number">a126bym4</strong>
                </span>
                <span class="ticket__item ticket__date">{{ inforTicket.date }}</span>
                <span class="ticket__item ticket__time">{{ inforTicket.showings | formatTime}}</span>
                <span class="ticket__item">
                  Cinema:
                  <span class="ticket__cinema">Cineworld</span>
                </span>
                <span class="ticket__item">
                  Hall:
                  <span class="ticket__hall">Visconti</span>
                </span>
                <span class="ticket__item ticket__price">
                  price:
                  <strong class="ticket__cost">${{ inforTicket.price }}</strong>
                </span>
              </div>

              <div class="ticket-primery">
                <span class="ticket__item ticket__item--primery ticket__film">
                  Film
                  <br />
                  <strong class="ticket__movie">{{ inforTicket.movie }}</strong>
                </span>
                <span class="ticket__item ticket__item--primery">
                  Sits:
                  <span class="ticket__place">{{ inforTicket.seats }}</span>
                </span>
              </div>
            </div>
            <div class="ticket__indecator indecator--post">
              <div class="indecator-text post--text">online ticket</div>
            </div>
          </div>
        </div>

        <div class="ticket-control">
          <a href="#" class="watchlist list--download">Download</a>
          <a href="#" class="watchlist list--print">Print</a>
        </div>
      </div>
    </section>

    <div class="clearfix"></div>

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
      console.log(JSON.parse(localStorage.getItem('inforTicket')).date)
      return {
        inforTicket: JSON.parse(localStorage.getItem('inforTicket')) ? JSON.parse(localStorage.getItem('inforTicket')) : null,
      }
    }
  }
</script>
