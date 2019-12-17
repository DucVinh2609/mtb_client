<template>
  <div class="overlay overlay-hugeinc" v-bind:class="{ 'open': show === true }">
    <section class="container">
      <div class="col-sm-4 col-sm-offset-4">
        <button type="button" class="overlay-close" v-on:click="$emit('showLogin', false)">Close</button>
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
</template>
<script>
  export default {
    // props: {
    //   show: null
    // },
    data() {
      return {
        show: null,
        username: null,
        password:null,
        errors: [],
        validateUsername: false,
        validatePassword: false
      }
    },
    methods: {

      getURL(URL) {
        return 'https://cors-anywhere.herokuapp.com/'+URL
      },

      // closeSignIn () {
      //   this.show = false
      // },
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
