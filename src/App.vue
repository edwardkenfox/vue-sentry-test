<template>
  <div id="app">
    <input type="radio" id="free" value="free" v-model="plan">
    <label for="free">Free</label>
    <br>
    <input type="radio" id="premium" value="premium" v-model="plan">
    <label for="premium">Premium</label>
    <hello :plan="plan"></hello>
    <image-loader></image-loader>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ImageLoader from './components/ImageLoader'

export default {
  name: 'app',
  components: {
    Hello,
    ImageLoader
  },
  data () {
    return {
      plan: 'free'
    }
  },
  created: function() {
    // Uncomment to raise error from App component
    // this.fooFromApp()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
