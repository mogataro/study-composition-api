<template>
  <div style="position: relative;">
    <h2>composition-api</h2>
    <p>{{ countState.count }}</p>
    <button @click="increment">increment!</button>
    <button @click="decrement">decrement!</button>
    <p :style="{ color: autoCountColor }">autoCount:{{ countState.autoCount }}</p>
    <img
      :style="{ position: 'absolute', left: imgPosition + 'px', transform: `rotateZ(${imgRotate}deg)` }"
      src="@/assets/logo.svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, ref, computed } from '@vue/composition-api'

export function useCount() {
  const state = reactive({ count: 0, autoCount: 0 })

  const autoCountColor = computed(() => {
    return state.autoCount % 2 === 1 ? 'red' : 'gray'
  })
  function increment() {
    state.count++
  }
  function decrement() {
    state.count--
  }

  setInterval(() => {
    state.autoCount++
  }, 1000)
  return { state, autoCountColor, increment, decrement }
}

export function useImg() {
  const imgPosition = ref(0)

  const imgRotate = computed(() => {
    return imgPosition.value > 35 ? 180 : 0
  })

  function moveImg() {
    imgPosition.value = imgPosition.value >= 0 && imgPosition.value <= 70 ? imgPosition.value + 10 : 0
  }
  setInterval(moveImg, 1000)

  return { imgPosition, imgRotate, moveImg }
}

export default createComponent({
  // setup()メソッドはbeforeCreateの後、createdの前に呼ばれる
  setup(prop, context) {
    console.log('this.$root', context)
    const count = useCount()
    const { imgPosition, imgRotate } = useImg()

    return { ...count, countState: count.state, imgPosition, imgRotate }
  }
})
</script>
