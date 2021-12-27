
<template>
<swiper :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" class="mySwiper"
:autoplay='{ "delay": 2500, "disableOnInteraction": true }' >
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 4</swiper-slide>
  <swiper-slide>Slide 5</swiper-slide>
  <swiper-slide>Slide 6</swiper-slide>
  <swiper-slide>Slide 7</swiper-slide>
  <swiper-slide>Slide 8</swiper-slide>
  <swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Autoplay
} from 'swiper'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {

    }
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>
    .mySwiper{
        height: 500px;
    }
</style>
