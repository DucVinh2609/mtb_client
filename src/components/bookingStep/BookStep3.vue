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
        <div class="checkout-wrapper">
          <h2 class="page-heading">price</h2>
          <ul class="book-result">
            <li class="book-result__item">
              Tickets:
              <span class="book-result__count booking-ticket">{{ totalSeat }}</span>
            </li>
            <li class="book-result__item">
              One item price:
              <span class="book-result__count booking-price">$45</span>
            </li>
            <li class="book-result__item">
              Total:
              <span class="book-result__count booking-cost">${{ totalSeat*45 }}</span>
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

          <form id="contact-info" method="post" novalidate class="form contact-info">
            <div class="contact-info__field contact-info__field-mail">
              <input type="email" name="user-mail" placeholder="Your email" class="form__mail" />
            </div>
            <div class="contact-info__field contact-info__field-tel">
              <input type="tel" name="user-tel" placeholder="Phone number" class="form__mail" />
            </div>
          </form>
        </div>

        <div class="order">
          <a href="book-final.html" class="btn btn-md btn--warning btn--wide">purchase</a>
        </div>
      </div>
    </section>

    <div class="clearfix"></div>

    <div class="booking-pagination">
      <a href="book2.html" class="booking-pagination__prev">
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
        totalSeat: localStorage.getItem('seatChooses') ? localStorage.getItem('seatChooses').split(',').length : ''
      }
    },
    methods: {

      bookStep2() {
        this.$router.push({ name: 'BookStep2'});
      }
    }
  }
</script>
