<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{count}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- <router-link to="/login/exact">login exact</router-link> -->
    <!-- <Todo></Todo> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a"/> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // console.log(this.$route)
  },
  computed: {
    ...mapState(['count']),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters(['fullName'])
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  }
  #cover{
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity 0.9
    z-index -1
    }
</style>

