<template>
    <h2>QR code</h2>
    <vue-qr :text="url" :margin="0"
    lorDark="#f67b29" colorLight="#fff"
    :logoSrc="icon" :logoScale="0.2"
    :size="200"></vue-qr>
</template>

<script>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
export default {
  components: {
    vueQr
  },
  data () {
    return {
      url: 'https://www.oexpo.io/vb/6141d5906e128e325be1127f',
      icon: 'https://i.imgur.com/VsAVJc1.png'
    }
  },
  methods: {
    test (dataUrl, id) {
      console.log(dataUrl, id)
    }
  }
}
</script>
