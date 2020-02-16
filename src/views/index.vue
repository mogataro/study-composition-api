<template>
  <div style="display: flex; justify-content: space-around">
    <HelloWorld />
    <GoodByWorld />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import GoodByWorld from '@/components/GoodByWorld.vue'

export default Vue.extend({
  components: {
    HelloWorld,
    GoodByWorld
  }
})
</script>
