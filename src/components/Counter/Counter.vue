<template>
  <div class="test">
    <h1>counter</h1>
    <p>{{ total }}</p>
    <button-counter @increment="incrementTotal"></button-counter>
    <button-counter @increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
  import ButtonCounter from '../ButtonCounter/ButtonCounter'

  export default {
    data () {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    },
    components: {
      ButtonCounter
    }
  }
</script>

<style scoped>
  .test {
    font-size: 40px;
  }
</style>
