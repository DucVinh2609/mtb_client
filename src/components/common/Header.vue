<template>
  <header class="header-wrapper header-wrapper--home">
    <div class="container">
      <!-- Logo link-->
      <a href="/" class="logo">
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
            <a href="/#/gallery">Gallery</a>
          </li>
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="/#/news">New</a>
          </li>
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="/#/trailer">Trailer</a>
          </li>
          <li>
            <span class="sub-nav-toggle plus"></span>
            <a href="/#/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <!-- Additional header buttons / Auth and direct link to booking-->
      <div class="control-panel">
        <div  v-if="checkIsLoging != null" class="auth auth--home">
          <div  class="auth__show">
            <span class="auth__image">
              <img alt="" src="../../assets/images/client-photo/auth.png">
            </span>
          </div>
          <a class="btn btn--sign btn--singin" id="toggle">
            me
          </a>
          <ul class="auth__function" id="menu" >
            <li><a href="#" class="auth__function-item">Watchlist</a></li>
            <li><a @click="logout()" class="auth__function-item">Logout</a></li>
          </ul>
        </div>
        <a v-else @click="signIn()" class="btn btn--sign login-window ">Sign in</a>
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
                    <a @click="signUp()" class="login__tracker form__tracker">Sin up</a>
                  </div>
                </div>
            </div>
          </section>
        </div>

        <div class="overlay overlay-hugeinc" v-bind:class="{ 'open': showUp === true }">
          <section class="container">
            <div class="col-sm-4 col-sm-offset-4">
              <button @click="closeSignIn()" type="button" class="overlay-close">Close</button>
                <div id="login-form" class="login" method="get" novalidate>
                  <p class="login__title">
                    sign up
                    <br />
                    <span class="login-edition">welcome to A.Movie</span>
                  </p>

                  <div class="field-wrap">

                    <p v-for="error in errors" :key="error.id" class="inv-em alert alert-danger">
                      <span class="icon-warning"></span>{{ error }} <a class="close" data-dismiss="alert" href="#" aria-hidden="true"></a>
                    </p>
                    <input type="email" v-model="username" id="username" placeholder="Email" name="email" class="login__input" v-bind:class="{ 'invalid_field': validateEmail === true }" />
                    <input type="email" v-model="email" id="email" placeholder="Username" name="username" class="login__input" v-bind:class="{ 'invalid_field': validateUsername === true }" />
                    <input type="password" v-model="password" id="password" placeholder="Password" name="user-password" class="login__input" v-bind:class="{ 'invalid_field': validatePassword === true }" />
                    <input type="password" v-model="confirmPassword" id="confirmPassword" placeholder="Confirm Password" name="user-password" class="login__input" v-bind:class="{ 'invalid_field': validateConfirmPassword === true }" />

                    <input id="#informed" class="login__check styled" />
                    <label for="#informed" class="login__check-info"></label>
                  </div>

                  <div class="login__control">
                    <button @click="signUpForm()" class="btn btn-md btn--warning btn--wider">sign up</button>
                    <a href="#" class="login__tracker form__tracker">Sign in</a>
                  </div>
                </div>
            </div>
          </section>
        </div>

        <div class="overlay overlay-hugeinc" v-bind:class="{ 'open': isSuccess === true }" >
          <section class="container">
            <div class="col-sm-4 col-sm-offset-4">
                <button @click="closeIsSuccess()" type="button" class="overlay-close">Close</button>
                <form id="login-form" class="login" method="get" novalidate="">
                  <p class="login__title" style="display: block;">sign in <br><span class="login-edition">welcome to A.Movie</span></p>
                  <p class="success" style="display: block;">You have successfully<br> signed in!</p>
                </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
  $(document).ready(function () {
    $("#toggle").on('click', function() {
      $('#menu').toggleClass("open-function");
    });
  });

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
        showUp: false,
        email: null,
        username: null,
        password: null,
        confirmPassword: null,
        errors: [],
        validateUsername: false,
        validatePassword: false,
        validateEmail: false,
        validateConfirmPassword: false,
        checkIsLoging: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,
        isSuccess: false
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
        this.showUp = false
        this.show = true
      },
      signUp () {
        this.show = false
        this.showUp = true
      },
      closeSignIn (enlargeAmount) {
        this.show = enlargeAmount
      },
      closeIsSuccess () {
        this.showUp = false
        this.show = false
        this.checkIsLoging = sessionStorage.getItem('token')
        this.isSuccess = false
      },
      logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('inforUser')
        this.checkIsLoging = null
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
            console.log(res.data)
            console.log(res.data.mail)
            if (res.status == 200) {
              this.show = false
              sessionStorage.setItem('token', res.data.username)
              sessionStorage.setItem('inforUser', JSON.stringify(res.data))
              this.isSuccess = true
            } else {
              alert("Some thing wrongs !!!")
            }
          })
          .catch(err => {
            console.log(err)
            alert('Wrong email/password')
          })
        }
      },
      signUpForm () {
        this.errors = []
        this.validateUsername = false
        this.validatePassword = false
        this.validateEmail = false
        this.validateConfirmPassword = false

        if (this.validateSignUp() > 0) {
          return this.errors;
        } else {
          axios.post(this.getURL('https://mtb-admin.herokuapp.com/api/login/'), { //api đăng kí
            username: this.username,
            gmail: this.email,
            password: this.password
          })
          .then(res => {
            if (res.status == 200) {
              this.showUp = false
              this.isSuccess = true
              sessionStorage.setItem('token', res.data.username)
              sessionStorage.setItem('inforUser', JSON.stringify(res.data))
              this.checkIsLoging = sessionStorage.getItem('token')
            } else {
              alert("Some thing wrongs !!!")
            }
          })
          .catch(err => {
            console.log(err)
            alert('Wrong email/password')
          })
        }
      },
      validateSignUp () {
        this.username = document.getElementById('username').value
        this.password = document.getElementById('password').value
        this.email = document.getElementById('email').value
        this.confirmPassword = document.getElementById('confirmPassword').value

        if (!this.password) {
          this.validatePassword = true
          this.errors.push("Password required.");
        }
        if (!this.username) {
          this.validateUsername = true
          this.errors.push('Username required.');
        }
        if (!this.email) {
          this.validateEmail = true
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.username)) {
          this.validateEmail = true
          this.errors.push('Valid email required.');
        }
        if (!confirmPassword) {
          this.validateConfirmPassword = true
          this.errors.push("Confirm Password required.");

        } else if (this.password != confirmPassword) {
          this.validatePassword = true
          this.validatePassword = true
          this.errors.push("Password and Confirm password no validate.");
        }

        return this.errors.length
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
