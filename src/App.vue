<template>
  <div id="app">
    <Navbar />
    <transition name="intro">
      <div class="intro" v-if="!show">
        <div class="loader">
          <div class="circle"></div>
        </div>
      </div>
    </transition>
    <transition name="router">
      <div v-if="show">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    var vm = this
    setTimeout(function() {
      vm.show = true
    }, 4000)
  }
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
body
  overflow-x: hidden
#app
  font-family: sans-serif
  width: 100%
  height: 100vh
  position: relative
  .intro
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #999
    display: flex
    justify-content: center
    align-items: center
    .loader
      width: 200px
      height: 200px
      .circle
        width: 100%
        height: 100%
        border: 1px solid #bbb
        border-radius: 50%
        position: relative
        animation: rotate 1s infinite
        &::before
          position: absolute
          top: 20px
          left: 20px
          width: 20px
          height: 20px
          border-radius: 50%
          background: red
          content: ''
.container
  width: 80%
  margin: auto

.intro-enter-active, .intro-leave-active
  transition: all 1s
.intro-enter, .intro-leave-to
  opacity: 0

.router-enter-active, .router-leave-active
  transition: all 1s
  transition-delay: 1s
.router-enter, .router-leave-to
  transform: translateX(100%)
  opacity: 0

@keyframes rotate
  from
    transform: rotate(0)
  to
    transform: rotate(360deg)

ul
  list-style: none
</style>
