<template>
  <div class="count-wrapper">
    <h3>Counter 组件</h3>
    <button @click="ADD_COUNT(10)">count 加10</button>
    <button @click="REDUCE_COUNT(10)">count 减10</button>
  </div>
</template>

<script>
import { mapMutations } from '../store/myvuex'

export default {
  name: 'Counter',
  methods: {
    ...mapMutations(['ADD_COUNT', 'REDUCE_COUNT']),
  },
}
</script>

<style scoped>
.count-wrapper {
  width: 100%;
  padding: 10px;
  border: 1px solid red;
}
</style>