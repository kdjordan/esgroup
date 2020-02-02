<template>
<div>
  <div class="artist" v-if="modalActive">
      <h2 class="artist__title">Randy Ortiz</h2>
      <div class="artist__contact">
        <h4>CONTACT</h4>
        <div class="artist__contact--container">
            <a href="mailto:ortizmetals@gmail.com" class="artist__contact--email">ortizmetals@gmail.com</a>
            <div class="artist__contact--site"><a href="http://ortizmetals.com">ortizmetals.com</a></div>
            <div class="artist__contact--phone">541.510.2182</div>
          </div>
          </div>
      <div class="artist__top">
        <div class="artist__top--left">
          <p>
            Randy Ortiz is a Eugene based, Southern California native, who received his Fine and Applied Arts degree from the University of Oregon in 2003.<br />
            <br>
            Trained in the classical drawing and sculptural methods passed down over millennia, Randy has amassed extensive knowledge of long-established design principals and techniques trusted throughout humanities’ imaginative evolution. Working apace with contemporary building trends in wide ranging mediums has allowed Randy to successfully envision a channel between modern design esthetics and those of antiquity.<br />
            <br /> 
            His pieces can be found in both private and public collections throughout the Willamette valley and beyond.
           
          </p>
        </div>
        <div class="artist__top--right">
          <img src="../assets/randy/r-profile.jpg" alt="randy ortiz eugene sculpture group">
        </div>
      </div>
    </div>

    <GalleryModal 
        :imgArr="imgArr" :rowStops="rowStops" 
        v-on:modal-open="modalActive = !modalActive" 
    />

    <Footer v-if="modalActive"  />
      
  </div>
</template>

<script>
import Footer from './Footer'
import GalleryModal from './GalleryModal'

export default {
  components: {
    Footer,
    GalleryModal
  },
  data() {
    return {
      modalActive: true,
      imgArr: [
        {
          src: require('../assets/randy/figure-front2-1024x576.jpg'),
          alt: 'randy ortiz eugene sculpture group',
          order: 0
        },
        {
          src: require('../assets/randy/randy3-620x422.jpg'),
          alt: 'randy ortiz eugene sculpture group',
          order: 1
        },
        {
          src: require('../assets/randy/randy-table-500x500.png'),
          alt: 'randy ortiz eugene sculpture group',
          order: 2
        },
        {
          src: require('../assets/randy/randy-4-300x200.jpg'),
          alt: 'randy ortiz eugene sculpture group',
          order: 3
        },
        {
          src: require('../assets/randy/randy-flowers.jpg'),
          alt: 'randy ortiz eugene sculpture group',
          order: 4
        },
        {
          src: require('../assets/randy/r-ortiz1-1.jpg'),
          alt: 'randy ortiz eugene sculpture group',
          order: 5
        },
        {
          src: require('../assets/randy/randy-bench.jpg'),
          alt: 'randy ortiz eugene sculpture group',
          order: 6
        },
        {
          src: require('../assets/randy/flower-gate-1024x716.jpg'),
          alt: 'randy ortiz eugene sculpture group',
          order: 7
        }
      ],
      rowStops:[[0,3],[3,5],[5,6],[6,8]]
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
     
}

</script>

<style lang="scss">

@import '../scss/artist.scss';



</style>