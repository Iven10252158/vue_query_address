<template>
    <h2>Address</h2>
    <div v-for="(shop) in shopAdd" :key="shop.address">
        <a :href="shop.address" target="_blank">{{ shop.name }}</a>
    </div>
    <a href='https://www.google.com/maps/search/?api=1&query=25.040839556336802%2C121.56529320995597' target="_blank">時代百貨 | </a>
    <a href='https://www.google.com/maps/search/?api=1&query=
25.04248930486196%2C121.5567307007243' target="_blank">STARBUCKS 星巴克 (華視門市)</a>

</template>
<script>
// https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393
export default {
  data () {
    return {
      googleMap: 'https://www.google.com/maps/place/',
      shops: [
        {
          name: '統一時代百貨',
          address: '110台北市信義區忠孝東路五段8號',
          longitude: '121.56527686201238', // 經度
          latitude: '25.040806385450534' // 緯度
        },
        {
          name: 'LOUISA COFFEE 路易莎咖啡 (捷運市府門市)',
          address: '110台北市信義區忠孝東路五段33號'
        },
        {
          name: 'STARBUCKS 星巴克 (華視門市)',
          address: '110台北市大安區光復南路180巷14號'
        }
      ],
      shopAdd: []
    }
  },
  methods: {
    filterData () {
      this.shops.forEach(item => {
        this.shopAdd.push({ name: item.name, address: `${this.googleMap}${item.address}` })
      })
      console.log(this.shopAdd)
    }
  },
  mounted () {
    this.filterData()
  }
}
</script>
