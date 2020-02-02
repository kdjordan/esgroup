<template>
<div>
  <div class="gallery" v-if="!modalState">
        <h2 class="gallery--title">Gallery</h2>
          <div class="row">
            <div v-for="(n, index) in rowStops.length" :key="index" class="column">
                <div v-for="(img, index) in imgArr.slice(rowStops[index][0], rowStops[index][1])" :key="index">
                    <img :src="img.src" :id="img.order" alt="mark andrew eugene sculpture group" @click="modal">
                </div>
            </div>
        </div>
      </div>

  <transition name="fade">
        <div v-if="modalState" class="modal-container">
          <div class="modal-container__inner">
            <div>
              <img src="../assets/svg/close.svg" class="close" @click="closeModal">
            </div>
            
            <div class="modal-container__img">
              <transition name="fade" mode="out-in">
                <img :src="imgArr[currentIndex].src" :alt="imgArr[currentIndex].alt" :key="this.currentIndex">
              </transition>
            </div>
            <div class="modal-container__controls">
              <div>
                <img src="../assets/svg/left.svg" class="icon" @click="minusIndex">
              </div>
              <div :class="{'slideActive': slideShowActive}" class="modal-container__btn" @click="playSlideShow('go')">SLIDESHOW</div>
              <div>
                <img src="../assets/svg/right.svg"  class="icon" @click="plusIndex">
              </div>
            </div>

          </div>
          
        </div>
      </transition>
</div>
</template>
<script>
export default {
    props: ['imgArr', 'rowStops'],
    data() {
        return {
            slideShowActive: false,
            currentIndex: 0,
            intervalId: 0,
            modalState: false

        }
    },
    methods: {
         modal(el) {
            this.$emit('modal-open');
            console.log(el.srcElement.id)
            this.modalState = true;
            this.currentIndex = el.srcElement.id;
      },
      plusIndex() {
        if(this.currentIndex == this.imgArr.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      },
      minusIndex() {
        if(this.currentIndex == 0) {
          this.currentIndex = this.imgArr.length - 1;
        } else {
          this.currentIndex--;
        }
      },
      playSlideShow(state) {        
        if(state == 'go' && this.slideShowActive == false) {
        this.slideShowActive = true;
          this.intervalId = setInterval(() => {
            this.plusIndex();
          },  3000);
          return;
        } 
        this.slideShowActive = false;
        clearInterval(this.intervalId);
        
      },
      closeModal() {
        this.$emit('modal-open');
        this.modalState = false;
        this.playSlideShow('stop');
      }
    }

}
</script>

<style lang="scss">
@import '../scss/variables.scss';

 .gallery {
      margin: 4rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    

      &--title {
        color: $color1;
        text-transform: uppercase;
        font-size: 3rem;
        margin-bottom: 2rem;
      }

      & img {
        transition: all .4s ease;

       &:hover {
         filter: opacity(50%);
       } 
      }
}

.modal-container {
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background:black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  &__inner {

    width: 90%;
    max-width: 1000px;
    height: auto;
  }


  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    
    & img {
      max-width: 100%;
      width: auto;
      max-height: 80vh;
      height: auto;
      margin-bottom: 1rem;
    }

  }

  &__controls  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 500px;
    margin: 0 auto;

  }

  &__btn {
    cursor: pointer;
    text-align: center;
    border: 1px solid $color1;
    border-radius: 5px;
    width: 10rem;
    color: $color1;
    padding: .5rem 1rem;

    &:hover, &:active {
      filter: opacity(50%);
    }
  }  
}

.icon {
  padding: .5rem;
  width: 64px;
  height: 64px;
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    filter: opacity(50%);
  } 
}

.close {
    position: relative;
    top: 0;
    left: 80%;
    cursor: pointer;
    width: 64px;
    height: 64px;
    padding: 0.5rem;
    padding-left: 1rem;
    
    &:hover {
      filter: opacity(50%);
    } 
  }

  .slideActive {
    filter: opacity(50%);
  }


.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>