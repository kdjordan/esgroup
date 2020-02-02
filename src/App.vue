<template>
  <div id="app">
    <Header />
      <div class="page-view">
        <transition name="testfade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
         
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import './scss/reset.scss';
@import './scss/transitions.scss';



</style>
