<template>
  <div class="overlay overlay-hugeinc" v-bind:class="{ 'open': show === true }">
    <section class="container">
      <div class="col-sm-4 col-sm-offset-4">
        <button @click="closeSignIn()" type="button" class="overlay-close">Close</button>
          <form id="login-form" class="login" method="get" novalidate>
            <p class="login__title">
              sign in
              <br />
              <span class="login-edition">welcome to A.Movie</span>
            </p>

            <div class="field-wrap">
              <input type="email" placeholder="Email" name="user-email" class="login__input" />
              <input type="password" placeholder="Password" name="user-password" class="login__input" />

              <input type="checkbox" id="#informed" class="login__check styled" />
              <label for="#informed" class="login__check-info">remember me</label>
            </div>

            <div class="login__control">
              <button type="submit" class="btn btn-md btn--warning btn--wider">sign in</button>
              <a href="#" class="login__tracker form__tracker">Forgot password?</a>
            </div>
          </form>
      </div>
    </section>
  </div>
  <!-- open/close -->
</template>
<script>
  export default {
    props: {
      show: null
    },
    // props: ['show'],
    // data() {
    //   return {
    //     show: JSON.parse(this.show)
    //   }
    // },
    methods: {
      closeSignIn() {
        this.show = false
      }
    }
  }
</script>