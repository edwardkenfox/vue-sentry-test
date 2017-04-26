<template>
  <div class="hello">
    <p>{{ label }}</p>
    <button @click="submitAndError">Click and throw an error!</button>
    <button @click="fetchAndError">Click and call an API!</button>
    <textarea v-model="message"></textarea>
  </div>
</template>

<script>
import Raven from 'raven-js'

export default {
  name: 'hello',
  data () {
    return {
      message: ''
    }
  },
  props: {
    plan: {
      type: String,
      required: true,
    }
  },
  watch: {
    message: function(val) {
      localStorage.setItem('message', val)
    }
  },
  computed: {
    label: function() {
      return `Welcome to your ${this.plan} Vue.js App`
    }
  },
  methods: {
    submitAndError: function() {
      alert(this.undeclaredMethod())
    },
    fetchAndError: function() {
      const url = 'https://jsonplaceholder.typicode.com/posts/1';

      fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        const data = JSON.parse(json)
      })
      .catch(err => {
        console.log(err)
        Raven.captureException(err, {
          extra: {
            componentName: this.$options.name,
            data: this.$data,
            propsData: this.$options.propsData,
            localStorage: window.localStorage
          }
        });
      })
    }
  },
  created: function() {
    // Uncomment to raise error from Hello component
    // this.fooFromHello()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
