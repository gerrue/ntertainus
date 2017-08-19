<template>
  <div>
    <app-popular :popular="popular"></app-popular>
    <app-upcoming :upcoming="upcoming"></app-upcoming>
  </div>
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
import AppUpcoming from '../components/AppUpcoming';
import AppPopular from '../components/AppPopular';
Vue.use(VueResource)

export default {
  name: 'appHome',
  data() {
    return {
      popular: '',
      upcoming: '',
    }
  },
  components: {
    AppUpcoming,
    AppPopular,
  },
  created() {
    this.$http.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=37a6fb67e0c9f9ef593a2b56571f3a8c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => {
        this.popular = response.data.results
      }, response => {
        console.log(response)
      }),
    this.$http.get(
      'https://api.ntertain.us/v1/movies/upcoming').then(response => {
        this.upcoming = response.data
      }, response => {
        console.log(response)
      })
  }
}
</script>

<style>
</style>
