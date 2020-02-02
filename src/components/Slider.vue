<template>
  <hooper :itemsToShow="1" :hoverPause="false" :centerMode="false" pagination="no" 
        :autoPlay="true" :playSpeed="4000" :transition="800" style="height: auto; outline: none; margin-bottom:0;" 
        :wheelControl="false">
    <slide>
      <img src="../assets/images/hero/hero-symbiosis.jpg" @click="showSymbiosis">
    </slide>
    <slide>
      <img src="../assets/images/hero/hero-bear.jpg">
    </slide>
    <slide>
      <img src="../assets/images/hero/hero-wood.jpg">
    </slide>
    <slide>
      <img src="../assets/images/hero/hero-doors.jpg">
    </slide>
    <slide>
      <img src="../assets/images/hero/hero-slabs.jpg">
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  },
  methods: {
      showSymbiosis() {
          console.log('calle')
      }
  }
};
</script>

<style scoped>

</style>