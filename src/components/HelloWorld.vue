<template>
  <div style="position: relative;">
    <h2>vue-class-component</h2>
    <p>{{ state.count }}</p>
    <button @click="increment">increment!</button>
    <button @click="decrement">decrement!</button>
    <p :style="{ color: autoCountColor }">autoCount:{{ state.autoCount }}</p>
    <img
      :style="{ position: 'absolute', left: imgPosition + 'px', transform: `rotateZ(${imgRotate}deg)` }"
      src="@/assets/logo.svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface State {
  count: number
  autoCount: number
}

@Component
export default class extends Vue {
  /**
   * data
   */
  state: State = {
    count: 0,
    autoCount: 0
  }
  imgPosition = 0
  /**
   * getter
   */
  get autoCountColor(): string {
    return this.state.autoCount % 2 === 1 ? 'red' : 'gray'
  }
  get imgRotate(): number {
    return this.imgPosition > 35 ? 180 : 0
  }
  /**
   * methods
   */
  increment() {
    this.state.count++
  }
  decrement() {
    this.state.count--
  }
  moveImg() {
    this.imgPosition = this.imgPosition >= 0 && this.imgPosition <= 70 ? this.imgPosition + 10 : 0
  }
  /**
   * life cycle
   */
  created() {
    setInterval(() => {
      this.state.autoCount++
    }, 1000)
    setInterval(this.moveImg, 1000)
  }
}
</script>
