<template>
  <div class="wrapper place-wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt='top banner' src="../../assets/images/banners/bra.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>

    <!-- Search bar -->
    <Search></Search>

    <!-- Main content -->
    <div class="place-form-area">
      <section class="container">
        <div class="order-container">
          <div class="order">
            <img class="order__images" alt='' src="images/tickets.png">
            <p class="order__title">Book a ticket
              <br><span class="order__descript">and have fun movie time</span>
            </p>
            <div class="order__control">
              <a href="#" class="order__control-btn active">Purchase</a>
              <a href="#" class="order__control-btn">Reserve</a>
            </div>
          </div>
        </div>
        <div class="order-step-area">
          <div class="order-step first--step order-step--disable ">1. What &amp; Where &amp; When</div>
          <div class="order-step second--step">2. Choose a sit</div>
        </div>

        <div class="choose-sits">
          <div class="choose-sits__info choose-sits__info--first">
            <ul>
              <li class="sits-price marker--none"><strong>Price</strong>
              </li>
              <li class="sits-price sits-price--cheap">$45</li>
            </ul>
          </div>

          <div class="choose-sits__info">
            <ul>
              <li class="sits-state sits-state--not">Not available</li>
              <li class="sits-state sits-state--your">Your choice</li>
            </ul>
          </div>

          <div class="col-sm-12 col-lg-10 col-lg-offset-1">
            <div class="sits-area hidden-xs">
              <div class="sits-anchor">screen</div>

              <div class="sits">
                <aside class="sits__line">
                  <span class="sits__indecator" v-for="row in rows" v-bind:key="row.id">{{ row }}</span>
                  <!-- <span class="sits__indecator additional-margin">J</span> -->
                </aside>

                <div class="sits__row" v-for="row in rows" v-bind:key="row.id">
                  <span v-for="column in columns" v-bind:key="column.id">
                    <span v-if="checkSeatIsAcitive(row, column) === true" class="sits__place sits-price--middle" >{{ row }}{{ column }}</span>
                    <span v-else class="sits__place sits-price--cheap" @click="yourSeatChooses(row, column)" v-bind:class="{'sits-state--your': checkYourSeatAcitive(row, column) == true }">{{ row }}{{ column }}</span>
                  </span>
                </div>
                <aside class="sits__checked">
                  <div class="checked-place">
                    <span v-for="seatChoose in seatChooses" v-bind:key="seatChoose.id" class="choosen-place">{{ seatChoose }}</span>
                  </div>
                  <div class="checked-result">
                    ${{ total }}
                  </div>
                </aside>
                <footer class="sits__number">
                  <span class="sits__indecator" v-for="column in columns" v-bind:key="column.id">{{ column }}</span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="clearfix"></div>
    <form id='film-and-time' class="booking-form" method='get' action='book3-buy.html'>

        <input type='text' name='choosen-number' class="choosen-number">
        <input type='text' name='choosen-number--cheap' class="choosen-number--cheap">
        <input type='text' name='choosen-number--middle' class="choosen-number--middle">
        <input type='text' name='choosen-number--expansive' class="choosen-number--expansive">
        <input type='text' name='choosen-cost' class="choosen-cost">
        <input type='text' name='choosen-sits' class="choosen-sits">

        <div class="booking-pagination booking-pagination--margin">
        <a @click="bookStep1()" class="booking-pagination__prev">
            <span class="arrow__text arrow--prev">prev step</span>
            <span class="arrow__info">what&amp;where&amp;when</span>
        </a>
        <a @click="bookStep3()" class="booking-pagination__next">
            <span class="arrow__text arrow--next">next step</span>
            <span class="arrow__info">checkout</span>
        </a>
        </div>
    </form>

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
          rows: [],
          columns: null,
          errors: [],
          seats: [],
          seatChooses: [],
          activeSeat: false,
          activeChoose: null,
          total: null
        }
      },
      methods: {
        bookStep1() {
          this.$router.push({ name: 'BookStep1'});
        },
        bookStep3() {
          this.$router.push({ name: 'BookStep3'});
        },
        getURL(URL) {
          return 'https://cors-anywhere.herokuapp.com/'+URL
        },
        async getRoom() {
          var index = 65

          axios.get(this.getURL('http://mtb-admin.herokuapp.com/api/max_row_seat/1'))
          .then(response => {
            const data  = response.data
            this.columns = data[0]['max_seat_row']
            for(var i = 0; i <= data[0]['max_row_seat']; i++) {
              this.rows.push(String.fromCharCode(index+i))
            }
            console.log(this.rows);
          })
          .catch(e => {
            this.errors.push(e)
          })
        },
        async getSeatAcitve() {
          axios.get(this.getURL('http://mtb-admin.herokuapp.com/api/seat_was_booked/'+this.$route.params.id))
          .then(response => {
            const data  = response.data
            data.forEach(element => {
              $.merge(this.seats, element['seat'].split(' '))
            });
            console.log(this.seats)
          })
          .catch(e => {
            this.errors.push(e)
          })
        },
        checkSeatIsAcitive(row, column) {
          return (jQuery.inArray(row+column, this.seats) !== -1 ) ? true : false
        },
        yourSeatChooses(row, column) {
          if (jQuery.inArray(row+column, this.seatChooses) !== -1) {
            this.seatChooses = this.seatChooses.filter( function(list_item) {
              return list_item !=row+column
            })
          } else {
            this.seatChooses.push(row+column)
          }
          this.total = (this.seatChooses.length > 0) ? this.seatChooses.length*45 : 0
          console.log(this.seatChooses)
        },
        checkYourSeatAcitive(row, column) {
          return (jQuery.inArray(row+column, this.seatChooses) !== -1 ) ? true : false
        },
      },
      mounted() {
        this.getRoom(),
        this.getSeatAcitve()
      }
    }
</script>
