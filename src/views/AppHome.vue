<template>
  <div>
    <app-popular></app-popular>
    <app-upcoming></app-upcoming>
  </div>
</template>

<script>
import AppUpcoming from '../components/AppUpcoming';
import AppPopular from '../components/AppPopular';
export default {
  name: 'appHome',
  components: {
    AppUpcoming,
    AppPopular,
  }
}
</script>

<style>
</style>
