<template>
  <div id="app">
    <counter></counter>
    <art-title></art-title>
    <div class="wrapper">
      <h3>App组件</h3>
      <div>count: {{ count }}</div>
      <div>title: {{ title }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from './store/myvuex'

import Counter from './components/Counter'
import ArtTitle from './components/ArtTitle'

export default {
  name: 'App',
  created() {
    console.log(this)
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['title']),
  },
  components: {
    Counter,
    ArtTitle,
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding: 10px;
  border: 1px solid red;
}
</style>