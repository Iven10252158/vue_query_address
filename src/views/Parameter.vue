<template>
    <h2>Params</h2>
    {{ person }}
    {{ seed }} / {{ sex }}
</template>

<script>

export default {
  data () {
    return {
      person: '',
      seed: '',
      sex: ''
    }
  },
  props: {
    parameter: {
      type: String,
      default: ''
    }
  },
  methods: {
    getUser () {
      if (this.person === 'man') {
        const id = 'e50b036b238dfb57'
        const apiUrl = `https://randomuser.me/api/?seed=${id}`
        this.$http.get(apiUrl).then(res => {
          console.log(res)
          this.seed = res.data.info.seed
          this.sex = res.data.results[0].gender
          // this.$router.push({ path: 'parameter', query: { id: `${this.seed}`, sex: `${this.sex}` } })
          console.log(this.$route)
        })
      } else if (this.person === 'woman') {
        const id = '70f1f858e0c722b6'
        const apiUrl = `https://randomuser.me/api/?seed=${id}`
        this.$http.get(apiUrl).then(res => {
          console.log(res)
          this.seed = res.data.info.seed
          this.sex = res.data.results[0].gender
          // this.$router.push({ path: 'parameter', query: { id: `${this.seed}`, sex: `${this.sex}` } })
          console.log(this.$route)
        })
      }
    }
  },
  mounted () {
    this.person = this.$route.query.person
    console.log(this.$route)
    this.getUser()
  }
}
</script>
