import Vue from 'vue'
import Router from 'vue-router'
import DemoElementUI from '@/components/DemoElementUI'
import Index from '@/components/Index'
import MovieDetails from '@/components/MovieDetails'
import MovieList from '@/components/MovieList'
import SingleCinema from '@/components/SingleCinema'
import CinemaList from '@/components/CinemaList'
import Trailer from '@/components/Trailer'
import Rates from '@/components/Rates'
import Setting from '@/components/account/Setting'
import Contact from '@/components/Contact'
import Pages404 from '@/components/Pages404'
import Login from '@/components/Login'
import News from '@/components/News'
import SinglePost from '@/components/SinglePost'
import Gallery from '@/components/Gallery'
import BookStep1 from '@/components/bookingStep/BookStep1'
import BookStep2 from '@/components/bookingStep/BookStep2'
import BookStep3 from '@/components/bookingStep/BookStep3'
import BookStep3Reserve from '@/components/BookStep3Reserve'
import BookStep4 from '@/components/bookingStep/BookStep4'
import HelloWorld from '@/components/paypal/HelloWorld'
import WaitList from '@/components/account/WaitList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/waitList',
      name: 'WaitList',
      component: WaitList
    },
    {
      path: '/demo',
      name: 'DemoElementUI',
      component: DemoElementUI
    },
    {
      path: '/paypal',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/details/:id',
      name: 'MovieDetails',
      component: MovieDetails
    },
    {
      path: '/list',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/single-cinema',
      name: 'SingleCinema',
      component: SingleCinema
    },
    {
      path: '/cinema-list',
      name: 'CinemaList',
      component: CinemaList
    },
    {
      path: '/trailer',
      name: 'Trailer',
      component: Trailer
    },
    {
      path: '/rates',
      name: 'Rates',
      component: Rates
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/404',
      name: 'Pages404',
      component: Pages404
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/single-post',
      name: 'SinglePost',
      component: SinglePost
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/booking-step-1',
      name: 'BookStep1',
      component: BookStep1
    },
    {
      path: '/booking-step-2/:id',
      name: 'BookStep2',
      component: BookStep2
    },
    {
      path: '/booking-step-3',
      name: 'BookStep3',
      component: BookStep3
    },
    {
      path: '/booking-step-3-reserve',
      name: 'BookStep3Reserve',
      component: BookStep3Reserve
    },
    {
      path: '/booking-step-4',
      name: 'BookStep4',
      component: BookStep4
    }
  ]
})
