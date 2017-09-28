<template>
  <button @click="incrementCounter" class="test">{{ counter }}</button>
</template>

<script>
  export default {
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter: function () {
        this.counter += 1
        this.$emit('increment')
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
