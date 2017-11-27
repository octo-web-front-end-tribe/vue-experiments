<template>
  <button @click="incrementCounter" class="test">{{ counter }}</button>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'buttonCounter',
    created () {
      axios.get('http://www.mocky.io/v2/5a01affc300000da45fac0cf')
        .then((response) => { this.counter = response.data })
    },
    data () {
      return {
        counter: 0
      }
    },
    mounted () {
      console.log('mounted from ButtonCounter!')
    },
    methods: {
      incrementCounter: function () {
        this.counter += 1;
        this.$emit('increment');
      }
    }
  }
</script>

<style scoped>
  .test {
    font-size: 30px;
    color: red;
  }
</style>
