<template>
  <b-container>
    
    <div id="welcome-content">
    <!-- 
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="600"
        img-height="280"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        
        <b-carousel-slide src="../assets/IMG_2638.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="../assets/IMG_2640.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="../assets/IMG_2642.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="../assets/IMG_2644.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="../assets/IMG_2645.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="../assets/IMG_2646.jpg"></b-carousel-slide>
    </b-carousel>-->
    
    
    <!-- LOGO -->
    <div class="content-row">
      <div id="logo-welcome">
        <img src="../assets/logo.png">
      </div>
    </div>

    <h5> A Curated Coffee Experience</h5>
    <br/>

    <div class="content-row" id="login-info">



    </div>
    <div class="content-row" id="explore">
      <router-link class="explore-button"  to="/home">Click to Explore</router-link>
    </div>
    </div>
  </b-container>

</template>

<script>
  export default {
    name: "welcome",
    data() {
      return {
        userName: '',
        title : 'Stay Grounded - A unique experience'
      }
    }
  }
</script>

<style scoped>
</style>
