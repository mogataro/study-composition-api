<template>
  <div>
    <p>
      <img :src="imgSrc" alt="" width="400" />
    </p>
    <button @click="ddd">クリック</button>
    <p style="color: red">{{ msg }}</p>
    <p style="color: blue">{{ msg2 }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Tesseract from 'tesseract.js'
import { createWorker } from 'tesseract.js'
import IMG from '@/assets/img/taikan.png'

const worker = createWorker({
  logger: m => console.log(m)
})

@Component
export default class extends Vue {
  imgSrc = IMG
  msg = ''
  msg2 = ''
  // aaa() {
  //   // const img = 'https://tesseract.projectnaptha.com/img/eng_bw.png'
  //   const img = IMG
  //   Tesseract.recognize(
  //     // 'https://tesseract.projectnaptha.com/img/eng_bw.png',
  //     // '../assets/img/eng_bw.png',
  //     // './bbb.png',
  //     img,
  //     'jpn',
  //     { logger: m => console.log(m) }
  //   ).then(({ data: { text } }) => {
  //     console.log(text);
  //     this.msg = text
  //   })
  // }
  ddd() {
    // this.bbb()
    this.ccc()
  }

  async bbb() {
    await worker.load()
    await worker.loadLanguage('eng+jpn')
    await worker.initialize('jpn')
    const {
      data: { text }
    } = await worker.recognize(IMG)
    this.msg = text
    await worker.terminate()
  }

  async ccc() {
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')
    const {
      data: { text }
    } = await worker.recognize(IMG)
    this.msg = text
    const refactText = text
      .replace(/[b]+/g, '6')
      .replace(/[ ]+/g, '')
      .replace(/[,]+/g, '.')
      .replace(/[Oo]+/g, '0')
      .replace(/[^0-9.kg]+/g, '|')
    const textArr = refactText.split('|')

    const aaa = textArr.filter(item => /kg$/g.test(item))

    console.log(textArr, aaa)

    this.msg2 = aaa.join('')
    await worker.terminate()
  }
}
</script>
