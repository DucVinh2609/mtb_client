<template>
  <header class="header-wrapper header-wrapper--home">
    <div class="container">
      <!-- Logo link-->
      <a href="index.html" class="logo">
        <img alt="logo" src="../../assets/images/logo.png" />
      </a>

      <!-- Main website navigation-->
      <nav id="navigation-box">
        <!-- Toggle for mobile menu mode -->
        <a href="#" id="navigation-toggle">
          <span class="menu-icon">
            <span class="icon-toggle" role="button" aria-label="Toggle Navigation">
              <span class="lines"></span>
            </span>
          </span>
        </a>

        <!-- Link navigation -->
        <ul id="navigation">
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="#">Movie</a>
            <ul class="mega-menu container">
              <li class="col-md-3 mega-menu__coloum">
                <h4 class="mega-menu__heading">Now in the cinema</h4>
                <ul class="mega-menu__list">
                  <li class="mega-menu__nav-item">
                    <a href="#">The Counselor</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Bad Grandpa</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Blue Is the Warmest Color</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Capital</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Spinning Plates</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Bastards</a>
                  </li>
                </ul>
              </li>

              <!-- <li class="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                <ul class="mega-menu__list">
                  <li class="mega-menu__nav-item">
                    <a href="#">Gravity</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Captain Phillips</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Carrie</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Cloudy with a Chance of Meatballs 2</a>
                  </li>
                </ul>
              </li> -->

              <li class="col-md-3 mega-menu__coloum">
                <h4 class="mega-menu__heading">Ending soon</h4>
                <ul class="mega-menu__list">
                  <li class="mega-menu__nav-item">
                    <a href="#">Escape Plan</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Rush</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Prisoners</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Enough Said</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">The Fifth Estate</a>
                  </li>
                  <li class="mega-menu__nav-item">
                    <a href="#">Runner Runner</a>
                  </li>
                </ul>
              </li>

              <li class="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                <ul class="mega-menu__list">
                  <li class="mega-menu__nav-item">
                    <a href="#">Insidious: Chapter 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="#">Cinema angle</a>
            <ul>
              <li class="menu__nav-item">
                <a href="movie-page-left.html">Movie genre</a>
              </li>
              <li class="menu__nav-item">
                <a href="movie-page-right.html">Cast</a>
              </li>
              <li class="menu__nav-item">
                <a href="movie-page-full.html">Directors</a>
              </li>
              <li class="menu__nav-item">
                <a href="movie-list-left.html">Movie commentary</a>
              </li>
              <li class="menu__nav-item">
                <a href="movie-list-right.html">Movie blog</a>
              </li>
            </ul>
          </li>
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="page-elements.html">Event</a>
            <ul>
              <li class="menu__nav-item">
                <a href="typography.html">Endow</a>
              </li>
              <li class="menu__nav-item">
                <a href="page-elements.html">Great movie of the month</a>
              </li>
            </ul>
          </li>
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="gallery-four.html">Support</a>
          </li>
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="news-left.html">Member</a>
          </li>
        </ul>
      </nav>

      <!-- Additional header buttons / Auth and direct link to booking-->
      <div class="control-panel">
        <!-- <div class="auth auth--home">
          <div class="auth__show">
            <span class="auth__image">
              <img alt src="../../assets/images/client-photo/auth.png" />
            </span>
          </div>
          <a href="#" class="btn btn--sign btn--singin">me</a>
          <ul class="auth__function">
            <li>
              <a href="#" class="auth__function-item">Watchlist</a>
            </li>
            <li>
              <a href="#" class="auth__function-item">Booked tickets</a>
            </li>
            <li>
              <a href="#" class="auth__function-item">Discussion</a>
            </li>
            <li>
              <a href="#" class="auth__function-item">Settings</a>
            </li>
          </ul>
        </div> -->
        <a @click="signIn()" class="btn btn--sign login-window ">Sign in</a>
        <a @click="bookStep1()" class="btn btn-md btn--warning btn--book btn-control--home login-window">Book a ticket</a>
        <!-- <ModalSignin v-on:showLogin="closeSignIn"></ModalSignin> -->
        <div class="overlay overlay-hugeinc" v-bind:class="{ 'open': show === true }">
          <section class="container">
            <div class="col-sm-4 col-sm-offset-4">
              <button @click="closeSignIn()" type="button" class="overlay-close">Close</button>
                <div id="login-form" class="login" method="get" novalidate>
                  <p class="login__title">
                    sign in
                    <br />
                    <span class="login-edition">welcome to A.Movie</span>
                  </p>

                  <div class="field-wrap">
                    <input type="email" v-model="username" id="username" placeholder="Email" name="username" class="login__input" v-bind:class="{ 'invalid_field': validateUsername === true }" />
                    <p v-if="validateUsername == true" class="inv-em alert alert-danger"><span class="icon-warning"></span>Error! Wrong email! <a class="close" data-dismiss="alert" href="#" aria-hidden="true"></a></p>
                    <input type="password" v-model="password" id="password" placeholder="Password" name="user-password" class="login__input" v-bind:class="{ 'invalid_field': validatePassword === true }" />
                    <p v-if="validatePassword == true" class="inv-em alert alert-danger"><span class="icon-warning"></span>Error! Wrong password! <a class="close" data-dismiss="alert" href="#" aria-hidden="true"></a></p>

                    <input id="#informed" class="login__check styled" />
                    <label for="#informed" class="login__check-info"></label>
                  </div>

                  <div class="login__control">
                    <button @click="loginForm()" class="btn btn-md btn--warning btn--wider">sign in</button>
                    <a href="#" class="login__tracker form__tracker">Forgot password?</a>
                  </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
  import router from '@/router'
  import ModalSignin from '@/components/common/ModalSignin.vue'
  import axios from 'axios'

  export default {
    components: {
      ModalSignin
    },
    data() {
      return {
        show: false,
        username: null,
        password:null,
        errors: [],
        validateUsername: false,
        validatePassword: false
      }
    },
    methods: {
      bookStep1 () {
        this.$router.push({ name: 'BookStep1'});
      },
      getURL(URL) {
        return 'https://cors-anywhere.herokuapp.com/'+URL
      },
      signIn () {
        this.show = true
      },
      closeSignIn (enlargeAmount) {
        this.show = enlargeAmount
      },
      loginForm () {
        this.errors = []
        this.validateUsername = false
        this.validatePassword = false

        if (this.validate() > 0) {
          return this.errors;
        } else {
          axios.get(this.getURL('https://mtb-admin.herokuapp.com/api/login/'+this.username+'/'+this.password))
          .then(res => {
            console.log(res)
            sessionStorage.setItem('token', res.data.token)
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err)
            alert('Wrong email/password')
          })
        }
      },
      loginSuccessful (req) {
        if (!req.data.token) {
          this.loginFailed()
          return
        }

        localStorage.token = req.data.token
        this.error = false

        this.$router.replace(this.$route.query.redirect || '/')
      },
      loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
      },
      validate () {
        this.username = document.getElementById('username').value
        this.password = document.getElementById('password').value
        if (!this.password) {
          this.validatePassword = true
          this.errors.push("Password required.");
        }
        if (!this.username) {
          this.validateUsername = true
          this.errors.push('Email required.');
        }
        // } else if (!this.validEmail(this.username)) {
        //   this.validateUsername = true
        //   this.errors.push('Valid email required.');
        // }

        return this.errors.length
      },
      validEmail (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  }
</script>

<style scoped></style>
