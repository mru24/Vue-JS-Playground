<template>
  <div>
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <div class="container">
      <listAnim />
    </div>
  </div>
</template>

<script>
import listAnim from './listAnim'

export default {
  components: {
    listAnim
  },
  data () {
    return {
      title: 'Vue JS Playground'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.header
  background: #bbb
  color: #fff
  height: 120px
  display: flex
  justify-content: center
  align-items: center
</style>
