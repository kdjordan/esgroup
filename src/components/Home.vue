<template>
  <div class="container">
      <Slider />
      <div class="container__inner">
        <section class="welcome">
        <h1>Sculptural Arts in the Willamette Valley</h1>
            <p>The Eugene Sculpture Group exists to expose and promote the artistry of three Eugene artists working in one sculpture studio.<br />
                By sharing our experience and skills, we enliven each others artwork.<br />
                Our unique personalities and accumulated knowledge boost our collective enthusiasm.<br />
                Together and individually, we create sculpture that enhances Life.
            </p>
            <h3>&lt;&nbsp;RESIDENT ARTISTS&nbsp;&gt;</h3>
            <div class="welcome__artists">
                MARK ANDREW :: CEDAR CAREDIO :: RANDY ORTIZ
            </div>
        </section>
      </div>

        <div class="container__inner">
            <section class="symbiosis">
                <h2>Symbiosis</h2>
                <p>Symbiosis is the latest collaboration to emerge from the ESG Studio.<br /> 
                Completed in August of 2019, it currently resides in Puyallup, Washington in front of City Hall.<br />
                It is available for purchase :: you can contact us <span class="symbiosis__contact"><a href="mailto:masstudio@earthlink.net">here</a></span>
                </p>
                <div class="symbiosis__inner">
                    <div class="symbiosis__inner--left">
                        <img src="../assets/symbiosis/symbiosis-md.jpg" alt="">
                    </div>
                    <div class="symbiosis__inner--middle">
                        <img src="../assets/symbiosis/symbiosis-md-1.jpg" alt="">
                    </div>
                    <div class="symbiosis__inner--right">
                        <img src="../assets/symbiosis/symbiosis-md-2.jpg" alt="">
                    </div>
                </div>
            </section>
    </div>

    <div class="container__inner">
        <section class="artist">
            <div class="artist__inner">
                <div class="artist__inner--left">
                    <img src="../assets/mark/babeinhand1.jpg" alt="">
                </div>
                <div class="artist__inner--right">
                    <div class="artist__inner--right--profile-img">
                        <h2>Mark Andrew</h2>
                        <img src="../assets/mark/mark-profile-sm.jpg" alt="">
                    </div>
                    <div>
                        <h3>::&nbsp;MATERIALS&nbsp;::</h3>
                        <div class="artist__inner--right--materials">
                            <div class="artist__inner--right--materials-list">
                            CAST BRONZE<br />CARVED STONE<br />CARVED WOOD
                            </div>
                        </div>
                    </div>
                    
                    <router-link to="/mark" class="artist-button">SEE MARK'S WORK</router-link>
                        
                </div>
            </div>
        </section>
    </div>

    <div class="container__inner">
        <section class="artist">
            <div class="artist__inner row-reverse">
                <div class="artist__inner--left">
                    <img src="../assets/cedar/owl-copy.jpg" alt="">
                </div>
                <div class="artist__inner--right">
                    <div class="artist__inner--right--profile-img">
                        <h2>Cedar Caredio</h2>
                        <img src="../assets/cedar/cedar-profile-sm.jpg" alt="">
                    </div>
                    <div>
                        <h3>::&nbsp;MATERIALS&nbsp;::</h3>
                        <div class="artist__inner--right--materials">
                            <div class="artist__inner--right--materials-list">
                            CARVED STONE<br />CARVED WOOD
                            </div>
                        </div>
                    </div>
                    
                    <router-link to="/cedar" class="artist-button">SEE CEDAR'S WORK</router-link>
                        
                </div>
            </div>
        </section>
    </div>

    <div class="container__inner">
        <section class="artist">
            <div class="artist__inner">
                <div class="artist__inner--left">
                    <img src="../assets/randy/randy-flowers.jpg" alt="">
                </div>
                <div class="artist__inner--right">
                    <div class="artist__inner--right--profile-img">
                        <h2>Randy Ortiz</h2>
                        <img src="../assets/randy/randy-profile-sm.jpg" alt="">
                    </div>
                    <div>
                        <h3>::&nbsp;MATERIALS&nbsp;::</h3>
                        <div class="artist__inner--right--materials">
                            <div class="artist__inner--right--materials-list">
                            SCULPTURAL STEEL<br />CARVED STONE
                            </div>
                        </div>
                    </div>
                    
                    <router-link to="/randy" class="artist-button">SEE RANDY'S WORK</router-link>
                        
                </div>
            </div>
        </section>
    </div>

    <Footer />
      
  </div>
</template>

<script>
import Slider from './Slider'
import Footer from './Footer'
export default {
    components: {
        Slider,
        Footer
    },
    mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss">
@import '../scss/views/home.scss';

</style>