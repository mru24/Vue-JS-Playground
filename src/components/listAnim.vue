<template>
  <div class="listAnim">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <transition>
          <div class="item" v-if="show">
            <h4>{{ item.name }}</h4>

          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      list: [
        {
          name: 'Item 1',
          link: 'link1'
        },
        {
          name: 'Item 2',
          link: 'link2'
        },
        {
          name: 'Item 3',
          link: 'link3'
        },
        {
          name: 'Item 4',
          link: 'link4'
        },
        {
          name: 'Item 5',
          link: 'link5'
        }
      ]
    }
  },
  created () {
    var vm = this
    setTimeout(function() {
      vm.show = true
    }, 1000)
  }
}
</script>

<style lang="sass">
button
  padding: 10px 30px
  background: #e78502
  color: white
  border: none
  display: block
  margin: 20px auto
  cursor: pointer
.listAnim
  ul
    display: flex
    justify-content: center
    flex-direction: row
    flex-wrap: wrap
    li
      .item
        width: 130px
        height: 180px
        padding: 10px
        border: 1px solid #888
        margin: 5px

.v-enter-active, .v-leave-active
  transition: all 2s ease-in-out
.v-enter, .v-leave-to
  transform: translateY(100px)
  opacity: 0

@keyframes anim
  from
    opacity: 0
  to
    opacity: 1
</style>
