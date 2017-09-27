<template>
  <div class="test">counter</div>
</template>

<script>
  export default {
    name: 'fakeComponent',
    data () {
      return {
        fakeData: 'fake value'
      }
    }
  }
</script>

<style scoped>
  .test {
    font-size: 40px;
  }
</style>
