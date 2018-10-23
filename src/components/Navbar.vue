<template>
  <div>
    <nav>
      <ul>
        <li v-for="(item, index) in navbar" :key="index">
          <div class="navItem">
            <h2>{{ item.name }}</h2>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbar: [
        {
          name: 'Home'
        },
        {
          name: 'About'
        },
        {
          name: 'Portfolio'
        },
        {
          name: 'Contact'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
nav
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: rgba(#222, .8)
  ul
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    li
      height: 100%
      width: 100%
      .navItem
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        position: relative
        &::before
          position: absolute
          width: 100%
          height: 50%
          top: 0
          left: 0
          content: ''
          background: rgba(#222, .9)
        &::before
          position: absolute
          width: 100%
          height: 50%
          top: 50%
          left: 0
          content: ''
          background: rgba(#666, .9)
</style>
