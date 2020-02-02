<template>
<div>
  <div class="artist" v-if="modalActive">
      <h2 class="artist__title">Cedar Caredio</h2>
      <div class="artist__contact">
        <h4>CONTACT</h4>
      <div class="artist__contact--container">
        <a href="mailto:cedarcaredio@gmail.com" class="artist__contact--email">cedarcaredio@gmail.com</a>
        <div class="artist__contact--site"><a href="http://cedarcaredio.com">cedarcaredio.com</a></div>
      </div>
      </div>
      <div class="artist__top">
        <div class="artist__top--left">
          <p>
            While he is essentially a self-taught artist, from 1989-1992 Cedar studied periodically with renowned woodcarver Dudley Carter in Redmond, Washington. Already in his 90’s, Carter was looking for an apprentice; Cedar was his man. With Carter as his mentor, Cedar learned the techniques of using hand tools and found deep inspiration in woodcarving.<br />
            <br/>
            Cedar enjoys the creative challenge of working in three dimensions. He begins with image drawings until he “hits upon it.” Then he searches for the right piece of wood to fit the figure. He chisels away the wood to reveal the shape inside. Often the grain of the particular wood modifies his original concept. He prefers working with different types of Northwest cedar Woods, particularly western red, yellow, and white ‘Port Orford’. Inlays of carved marble, stones, shells, or gems complete many of the pieces. Working in stone has been a relatively recent endeavor. Limestone, marble, slate and alabaster are the main types of stone he uses.<br />
            <br/>
            Both his Celtic heritage and his life in the Northwest guide Cedar to interpretations of myths with stylized creatures or designs. Influences include Northwest coastal Native Americans (totem images), Western European mysteries (like fairies), and Scottish wood and stone carving. Tying together these elements with dreams and spirituality has led him to his own unique style. He focuses on defining lines rather than minute details.<br />
          </p>
        </div>
        <div class="artist__top--right">
          <img src="../assets/cedar/profile.jpg" alt="mark andrew eugene sculpture group">
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
          src: require('../assets/cedar/lotus-slab.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 0
        },
        {
          src: require('../assets/cedar/solar-eagle.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 1
        },
        {
          src: require('../assets/cedar/mask-colored.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 2
        },
        {
          src: require('../assets/cedar/raven.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 3
        },
        {
          src: require('../assets/cedar/stone-owl.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 4
        },
        {
          src: require('../assets/cedar/new-salmon.png'),
          alt: 'cedar caredio eugene sculpture group',
          order: 5
        },
        {
          src: require('../assets/cedar/home-entrance.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 6
        },
        {
          src: require('../assets/cedar/totem-outside-tall.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 7
        },
        {
          src: require('../assets/cedar/crane-disk.png'),
          alt: 'cedar caredio eugene sculpture group',
          order: 8
        },
        {
          src: require('../assets/cedar/long-salmon.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 9
        },
        {
          src: require('../assets/cedar/owl-copy.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 10
        },
        {
          src: require('../assets/cedar/entrance.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 11
        },
        {
          src: require('../assets/cedar/bear-head.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 12
        },
        {
          src: require('../assets/cedar/bear-eagle-tall.jpg'),
          alt: 'cedar caredio eugene sculpture group',
          order: 13
        },
      ],
      rowStops:[[0,3],[3,6],[6,11],[11,14]]
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