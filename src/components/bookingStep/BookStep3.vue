<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../../assets/images/banners/bra.jpg" />
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
            Book a ticket
            <br />
            <span class="order__descript">and have fun movie time</span>
          </p>
          <div class="order__control">
            <a href class="order__control-btn active">Purchase</a>
            <a href="book3-reserve.html" class="order__control-btn">Reserve</a>
          </div>
        </div>
      </div>
      <div class="order-step-area">
        <div class="order-step first--step order-step--disable">1. What &amp; Where &amp; When</div>
        <div class="order-step second--step order-step--disable">2. Choose a sit</div>
        <div class="order-step third--step">3. Check out</div>
      </div>

      <div class="col-sm-12">
        

      <!-- <form novalidate class="form contact-info"> -->
        <div class="form contact-info checkout-wrapper">  
          <h2 class="page-heading">price</h2>
          <ul class="book-result">
            <li class="book-result__item">
              Tickets:
              <span class="book-result__count booking-ticket">{{ totalSeat }}</span>
            </li>
            <li class="book-result__item">
              One item price:
              <span class="book-result__count booking-price">$10</span>
            </li>
            <li class="book-result__item">
              Total:
              <span class="book-result__count booking-cost">${{ totalSeat*10 }}</span>
            </li>
          </ul>

          <h2 class="page-heading">Choose payment method</h2>
          <div class="payment">
            <a href="#" class="payment__item">
              <img alt src="../../assets/images/payment/pay1.png" />
            </a>
            <a href="#" class="payment__item">
              <img alt src="../../assets/images/payment/pay2.png" />
            </a>
            <a href="#" class="payment__item">
              <img alt src="../../assets/images/payment/pay3.png" />
            </a>
            <a href="#" class="payment__item">
              <img alt src="../../assets/images/payment/pay4.png" />
            </a>
            <a href="#" class="payment__item">
              <img alt src="../../assets/images/payment/pay5.png" />
            </a>
            <a href="#" class="payment__item">
              <img alt src="../../assets/images/payment/pay6.png" />
            </a>
            <a href="#" class="payment__item">
              <img alt src="../../assets/images/payment/pay7.png" />
            </a>
          </div>

          <h2 class="page-heading">Contact information</h2>
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
              </ul>
            </p>
            <div class="contact-info__field contact-info__field-mail">
              <input type="text" v-model="email" id="email" name="email" placeholder="Your email" class="form__mail" />
            </div>
            <div class="contact-info__field contact-info__field-tel">
              <input type="text" v-model="tel" id="tel" name="tel" placeholder="Phone number" class="form__mail" />
            </div>
        </div>  

        <div class="order">
          <button @click="bookForm()" class="btn btn-md btn--warning" placeholder="">purchase</button>
        </div>
          <!-- </form> -->
      </div>
    </section>

    <div class="clearfix"></div>

    <div class="booking-pagination">
      <a @click="bookStep2()" class="booking-pagination__prev">
        <p class="arrow__text arrow--prev">prev step</p>
        <span class="arrow__info">choose a sit</span>
      </a>
      <a @click="bookStep2()" class="booking-pagination__next hide--arrow">
        <p class="arrow__text arrow--next">next step</p>
        <span class="arrow__info"></span>
      </a>
    </div>

    <div class="clearfix"></div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'
  import ModalSignin from '@/components/common/ModalSignin.vue'
  import Footer from '@/components/common/Footer.vue'
  import Search from '@/components/common/Search.vue'
  import TimeMovie from '@/components/movie/TimeMovie.vue'
  import axios from 'axios'

  export default {
    components: {
        Header,
        ModalSignin,
        Footer,
        TimeMovie,
        Search
    },
    data() {
      return {
        idRoom: localStorage.getItem('idRoom') ? localStorage.getItem('idRoom') : '0',
        seatChooses: localStorage.getItem('seatChooses') ? localStorage.getItem('seatChooses') : '',
        totalSeat: localStorage.getItem('seatChooses') ? localStorage.getItem('seatChooses').split(',').length : '',
        idShowing: localStorage.getItem('idTimeMovie') ? localStorage.getItem('idTimeMovie') : '0',
        idMovie: localStorage.getItem('idMovie') ? localStorage.getItem('idMovie') : '0',
        email: null,
        tel: null,
        errors: []
      }
    },
    methods: {
        // getURL(URL) {
        //   return 'https://cors-anywhere.herokuapp.com/'+URL
        // },
        bookForm: function() {
          this.errors = []

          if (this.validate() > 0) {
            return this.errors;
          } else {
          const price = this.totalSeat*10
          console.log(this.idShowing, this.idRoom, this.seatChooses, this.idMovie, price, this.email)
          axios.post('http://localhost:5000/api/add_tickets', {
          // axios.post('http://5ddcc1c9f40ae700141e8647.mockapi.io/add_tickets', {
            showing_id: this.idShowing,
            room_id: this.idRoom,
            username: "no",
            event_id: null,
            unitprice: 10,
            seats: this.seatChooses,
            movie_id: this.idMovie,
            price: price,
            gmail: this.email
          })
          .then(function (response) {
            console.log( response.data)
          })
          .catch(function (error) {
            this.errors.push(error)
          });
          }
      },
      validate () {
        this.tel = document.getElementById('tel').value
        this.email = document.getElementById('email').value
        if (!this.tel) {
          this.errors.push("Phone required.");
        }
        if (!this.email) {
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
        }

        return this.errors.length
      },
      validEmail (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      bookStep2() {
        this.$router.push({ name: 'BookStep2'});
      }
    },
    
    mounted() {
      // this.bookForm()
    }
  }
</script>
