<template>
<div>
  <div class="artist" v-if="modalActive">
      <h2 class="artist__title">Mark Andrew</h2>
      <div class="artist__contact">
        <h4>CONTACT</h4>
      <div class="artist__contact--container">
        <a href="mailto:masstudio@earthlink.net" class="artist__contact--email">masstudio@earthlink.net</a>
        <div class="artist__contact--site"><a href="http://markandrewstudio.com">markandrewstudio.com</a></div>
        <div class="artist__contact--phone">541.343.1557</div>
      </div>
      </div>
      <div class="artist__top">
        <div class="artist__top--left">
          <p>
            Mark grew up in New York State, then moved to France for high school where he became hooked on the artwork he experienced there.  To him, art was the handwork from which beauty blooms, and it became the only profession worth pursuing.<br/>
            <br/>
            As a college student at the University of Oregon, Mark studied under the well-known Pacific Northwest sculptor, Paul Buckner, and began by carving wood.  He invested in a complete set of Swiss made carving chisels, and experimented with an abundance of different types of Oregon wood.  After university, he studied with Florida wildlife artist, Daniel DeMendoza, and learned how to add technique in realistic wood-carving.  A move to Carmel, California, put him in an artistic community where he accepted an increasingly diverse range of commissions which challenged him to refine and expand his skills.  During this period, he worked in the studio of Richard McDonald, noted figure sculptor, and collaborated with fine furniture maker, Tom Ocampo, of Carmel Valley.<br />
            <br/>
            In 1995, Mark returned to Oregon and built a large studio at his new rural home.  Since then, he has completed many new pieces:  human figure and wildlife carvings in stone, wood, and bronze; landscape murals in wood and stone; a variety of castings in bronze; and a diverse body of work for public art installations, gardens, and landscapes.<br />
            <br/>
            He also joined the Northwest Stone Sculptors’ Association, and carves and teaches at various symposia as well as private lessons.<br />
            <br />
            Now Mark has joined with Randy Ortiz and Cedar Caredio to create new collaborations in new media, and works with them out of a renovated warehouse in West Eugene, Oregon.
          </p>
        </div>
        <div class="artist__top--right">
          <img src="../assets/mark/mark-profile-lg.jpg" alt="mark andrew eugene sculpture group">
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
          src: require('../assets/mark/babeinhand1.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 0
        },
        {
          src: require('../assets/mark/canby-install.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 1
        },
        {
          src: require('../assets/mark/bench.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 2
        },
        {
          src: require('../assets/mark/disc-close.png'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 3
        },
        {
          src: require('../assets/mark/SmallSteelheadFront.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 4
        },
        {
          src: require('../assets/mark/doors.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 5
        },
        {
          src: require('../assets/mark/hunter1.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 6
        },
        {
          src: require('../assets/mark/mark-leaves.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 7
        },
        {
          src: require('../assets/mark/mark-standingstone.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 8
        },
        {
          src: require('../assets/mark/mark-upstream.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 9
        },
        {
          src: require('../assets/mark/na2.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 10
        },
        {
          src: require('../assets/mark/native2.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 11
        },
        {
          src: require('../assets/mark/otterboy.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 12
        },
        {
          src: require('../assets/mark/Otters-4.jpg'),
          alt: 'mark andrew eugene oregon sculpture',
          order: 13
        }
      ],
      rowStops:[[0,5],[5,8],[8,11],[11,14]]
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