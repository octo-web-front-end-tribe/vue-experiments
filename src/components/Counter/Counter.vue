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
    name: 'counter',
    data () {
      return {
        total: 0,
      };
    },
    mounted () {
      console.log(`Total at initialization : ${this.total}`)
    },
    methods: {
      incrementTotal () {
        this.total += 1;
      },
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
