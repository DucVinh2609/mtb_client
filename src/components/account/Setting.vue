<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner-top">
      <img alt="top banner" src="../../assets/images/banners/banner.jpg">
    </div>

    <!-- Header section -->
    <Header></Header>

    <!-- Search bar -->
    <!-- <Search></Search> -->

    <div class="contact-form-wrapper">
      <div class="container">
        <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <div id="contact-form" class="form row" method="post" novalidate action="send.php">
            <p class="form__title">Setting</p>
            <div>
              <div class="col-sm-6">
                <input type="text" v-model="fullname" placeholder="Your fullname" name="fullname" class="form__name" />
              </div>
              <div class="col-sm-6">
                <input type="email" v-model="email" placeholder="Your email" name="email" class="form__mail" />
              </div>
              <div class="col-sm-6">
                <input type="text" v-model="phone" placeholder="Your phone number" name="phone" class="form__name" />
              </div>
              <div class="col-sm-6">
                <input type="text" v-model="address" placeholder="Your address" name="address" class="form__mail" />
              </div>
              <div class="col-sm-6">
                <select placeholder="Your gender" v-model="gender" name="gender" class="form__mail" style="height: 39px; color: #b4b1b2;">
                  <option class="form__mail" value="Nam">Male</option>
                  <option class="form__mail" value="Nu">Female</option>
                </select>
              </div>
              <div class="col-sm-6">
                <div style="width: 100%; height: 100%; color: #b4b1b2;">
                  <DatePicker v-model="birthday" :value="birthday" style="width: 100%; height: 39px !important; color: #b4b1b2;"></DatePicker>
                </div>
              </div>
            </div>
            <div style="text-align: center;">
              <button @click="settingAccount()" class="btn btn-md btn--danger">Save</button>
            </div>
          </div>
        </div>
      </div>
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

    <Footer></Footer>
  </div>
</template>

<style scoped>
  .cssmap {
    text-align: center;
  }
</style>
<script>

import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Search from '@/components/common/Search.vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/zh-cn';
import axios from 'axios'

export default {
  components: {
    Header,
    DatePicker,
    Footer
  },
  data() {
    return {
      fullname: JSON.parse(sessionStorage.getItem('inforUser')) ? JSON.parse(sessionStorage.getItem('inforUser')).fullname : null,
      email: JSON.parse(sessionStorage.getItem('inforUser')) ? JSON.parse(sessionStorage.getItem('inforUser')).email : null,
      phone: JSON.parse(sessionStorage.getItem('inforUser')) ? JSON.parse(sessionStorage.getItem('inforUser')).phone : null,
      address: JSON.parse(sessionStorage.getItem('inforUser')) ? JSON.parse(sessionStorage.getItem('inforUser')).address : null,
      gender: JSON.parse(sessionStorage.getItem('inforUser')) ? JSON.parse(sessionStorage.getItem('inforUser')).gender : null,
      birthday: JSON.parse(sessionStorage.getItem('inforUser')) ? JSON.parse(sessionStorage.getItem('inforUser')).birthday : null,
      username: JSON.parse(sessionStorage.getItem('inforUser')) ? JSON.parse(sessionStorage.getItem('inforUser')).username : null,
      validateFullname: false,
      validateEmail: false,
      validatePhone: false,
      isSuccess: false
    }
  },
  methods: {
    closeIsSuccess () {
      this.isSuccess = false
    },
    getURL(URL) {
      return 'https://cors-anywhere.herokuapp.com/'+URL
    },
    settingAccount() {
      console.log(this.gender);
      axios({
        method: 'post',
        url: this.getURL('https://mtb-admin.herokuapp.com/api/member/edit/'+this.username),
        data: {
          fullname: this.username,
          address: this.address,
          phone: this.phone,
          birthday: this.birthday,
          gender: this.gender
        },
      })
      // axios.post(this.getURL('https://mtb-admin.herokuapp.com/api/member/edit/'+this.username), {
      //   fullname: this.username,
      //   address: this.address,
      //   phone: this.phone,
      //   birthday: this.birthday,
      //   gender: this.gender
      // })
      .then(res => {

        console.log(res)
        // if (res.status == 200) {
          this.isSuccess = true
        // } else {
        //   alert("Some thing wrongs !!!")
        // }
      })
      .catch(err => {

        console.log(err)
        alert('Some thing wrongs !!!')
      })
    }
  }
}
</script>
