<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Swiper></Swiper>
  <QRcode></QRcode>
  <Address></Address>
</template>

<script>
import Swiper from '@/components/Swiper'
import QRcode from '@/components/Qrcode'
import Address from '@/components/Address'
export default {
  components: {
    Swiper,
    QRcode,
    Address
  }
}
</script>
