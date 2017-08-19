<template>
  <div class="col-md-7">
    <h4><b>Popular Movies</b></h4>
    <div class="row">
      <div class="col-md-2 col-sm-1" v-for="movie in limitBy(popular, 20)" style="margin:20px">
        <img v-bind:src="getUrl(movie.poster_path)" width="100px" heigth="145px"  />
      </div>
    </div>
  </div>
</template>

<script>
import util from '../util/'
export default {
  name: 'app-popular',
  props: ['popular'],
  methods: {
    getUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w640${poster_path}`
    },
    limitBy (arr, n, offset) {
      offset = offset ? parseInt(offset, 10) : 0
      n = util.toNumber(n)
      return typeof n === 'number'
        ? arr.slice(offset, offset + n)
        : arr
    },
  }
}
</script>

<style>
</style>
