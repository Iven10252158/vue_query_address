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
      sex: '',
      isOpen: true
    }
  },
  props: {
    parameter: {
      type: Object,
      default () {
        return { person: 'man' }
      }
    }
  },
  methods: {
    getUser () {
      const idMan = 'e50b036b238dfb57'
      const apiUrlMan = `https://randomuser.me/api/?seed=${idMan}`

      const idWoman = '70f1f858e0c722b6'
      const apiUrlWoman = `https://randomuser.me/api/?seed=${idWoman}`

      switch (this.person) {
        case 'man' :
          this.$http.get(apiUrlMan).then(res => {
            this.seed = res.data.info.seed
            this.sex = res.data.results[0].gender
          })
          break

        case 'woman' :
          this.$http.get(apiUrlWoman).then(res => {
            this.seed = res.data.info.seed
            this.sex = res.data.results[0].gender
          })
          break
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
