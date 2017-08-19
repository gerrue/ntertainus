<template>
   <div style="width:400px;" class="input-group search-bar" id="search" tooltip="Click the X to reset the input">
     <input style="width:401px;"
            id='box'
            type="text"
            class="form-control"
            placeholder="Search for a movie"
            v-on:change="setThing"
            v-model="query"
            @keydown.down="down"
            @keydown.up="up"
            @keydown.enter="hit"
            @keydown.esc="reset"
            @blur="reset"
            @input="update"  />
     <span class="input-group-addon bar-style"><i class="glyphicon glyphicon-remove"></i></span>
   </div>
</template>

<script>
import VueTypeahead from 'vue-typeahead'
export default {
  extends: VueTypeahead,
  data() {
    return {
      src: 'https://api.themoviedb.org/3/search/multi?api_key=37a6fb67e0c9f9ef593a2b56571f3a8c&language=en-US&query=Sherlock&page=1&include_adult=false',
      query: '',
      minChar: 3,
      selectFirst: true,
    }
  },
  methods: {
    onHit(item) {
      alert(item)
    },
    prepareResponseData(data) {
      return data
    },
    setThing() {
      this.src = 'https://api.themoviedb.org/3/search/multi?api_key=37a6fb67e0c9f9ef593a2b56571f3a8c&language=en-US&query=' + this.query + '&page=1&include_adult=false'
    },
  }
}
</script>

<style>
.search-bar {
  width: 100%;
  max-width: 500px;
  margin-bottom: 25px;
}
</style>
