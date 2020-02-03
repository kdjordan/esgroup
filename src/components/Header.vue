<template>
  <div class="header">
      <div class="header__left">
          <a href="/"><img src="~../assets/svg/esg-logo.svg" alt="eugene sculpure group logo" class="logo"></a>
          
          
      </div>
      <div class="header__right">
          <router-link to="/mark" class="links">Mark Andrew</router-link>
          <router-link to="/cedar" class="links">Cedar Caredio</router-link>
          <router-link to="/randy" class="links">Randy Ortiz</router-link>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/typography.scss';

.logo {
    margin-left: 1.3rem;
    transition: all .4s ease;

    &:hover {
        filter: opacity(50%);
    }

}

.header {
    position: relative;
    z-index:4;
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-family: 'Doppio One', sans-serif;
    letter-spacing: 1.5px;
    padding: 2rem;
    width: 100%;
    height: 7rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 8px -4px rgba(0,0,0,0.75); 

    @media(min-width: 1600px) {
        
       flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: .5rem;

    }
    

    @media(max-width: 700px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: .5rem;
    }
    
    &__left {
        & img {
            width: 100%;
            margin: 0 auto;

            @media(max-width: 700px) {
                width: 100%;
                margin: 0;
                padding: 0;
            }
            
        }
    }

    &__right {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        @media(max-width: 700px) {
                display: flex;
                justify-content: space-evenly;
                width: 90%;
                margin: 0 auto;
                margin-top: 1rem;
        }
    }
}

.links {
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 1rem;
    color: $grey;
    transition: all .4s;

    @media(min-width: 700px) and (max-width: 800px) {
        font-size: .9rem;
        white-space: nowrap;
        margin-right: .5rem;
        
    }

    @media(max-width: 700px) {
        font-size: .7rem;
        white-space: nowrap;
        margin-right: 0;
    }


    &:hover {
        filter: opacity(50%);
    }

    & img {
        transition: all .4s ease;

        &:hover {
             filter: opacity(50%);
        }
    }
}

</style>