<template>
  <div class="wrapper">
    <h3>ArtTitle 组件</h3>
    <button @click="getTitle">获取title</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ArtTitle',
  methods: {
    ...mapActions(['getTitle']),
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