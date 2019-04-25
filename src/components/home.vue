<script src="../router/index.js"></script>
<template>

   <b-container fluid>
      <!-- NAVBAR -->
      <nav>
          <ul>
            <li><a role="navigation"><router-link to="/home/" class="active">Home</router-link></a></li>
            <li><a role="navigation"><router-link to="/buildDrink">Brewmaker 1.0</router-link></a></li>
            <li><a role="navigation"><router-link to="/lexbot">Voice Order</router-link></a></li>
            <li><a role="navigation"><router-link to="/menu">Explore Drinks</router-link></a></li>
            <li><a role="navigation"><router-link to="/data">Fun Facts</router-link></a></li>
          </ul>
      </nav>
      <div id= 'centerContainer'>
         <!-- LOGO -->
         <div class="content-row">
           <div id="logo">
             <img src="../assets/logo.png">
           </div>
         </div>
        <div id="home-content">
            <!--<h1>Choose from the following options:</h1>-->

            <!-- BUILD A DRINK -->
            <router-link class="btn btn-outline-success option" to="/buildDrink" role="button" aria-pressed="false">
                <img src="../assets/coffee-maker.png">
                <!--<img src="../assets/coffee-maker-w.png" class="hover" style="display: none;">-->
                <h2>Brewmaker 1.0</h2>
            </router-link>

            <!-- LEXBOT -->
            <router-link class="btn btn-outline-primary option" to="/lexbot" role="button" aria-pressed="false">
                <img src="../assets/microphone.png" class="normal">
                <!--<img src="../assets/microphone-w.png" class="hover" style="display: none;">-->
                <h2>Voice Order</h2>
            </router-link>

            <!-- LEXBOT -->
            <router-link class="btn btn-outline-primary option" to="/menu" role="button" aria-pressed="false">
                <img src="../assets/coffee.png">
                <!--<img src="../assets/coffee-w.png" class="hover" style="display: none;">-->
                <h2>Explore Drinks</h2>
            </router-link>

            <router-link class="btn btn-outline-danger option" to="/data" role="button" aria-pressed="false">
                <img src="../assets/data.png">
                <!--<img src="../assets/data-w.png" class="hover" style="display: none;">-->
                <h2>Fun Facts </h2>
            </router-link>
  
        </div>
      </div>
   </b-container>

</template>
<script>
  import users from '../data/users'
  export default {
    name: "home",
    data() {
      return {
        title_home: 'Home screen',
        drinks: {},
        user: {},
        error: {}
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>

