<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__left">
          <div class="footer__left--nav">
            <router-link to="/" class="links">Home</router-link>
            <router-link to="/mark" class="links">Mark</router-link>
            <router-link to="/cedar" class="links">Cedar</router-link>
            <router-link to="/randy" class="links">Randy</router-link>
          </div>
      </div>
      <div class="footer__right">
          <a href="mailto:masstudio@earthlink.net" class="links">CONTACT</a>
      </div>
    </div>
    <div class="footer__bottom">
          <div>&copy;2020 Eugene Sculpture Group</div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/footer.scss';

</style>