
<template>
  <b-container fluid>
    <!-- NAVBAR -->
    <nav>
      <ul>
        <li><a role="navigation"><router-link to="/home/">Home</router-link></a></li>
        <li><a role="navigation"><router-link to="/buildDrink">Brewmaker 1.0</router-link></a></li>
        <li><a role="navigation"><router-link to="/lexbot">Voice Order</router-link></a></li>
        <li><a role="navigation"><router-link to="/menu" class="active">Explore Drinks</router-link></a></li>
        <li><a role="navigation"><router-link to="/data">Fun Facts</router-link></a></li>
      </ul>
    </nav>

    <div id="centerContainer">
      <div id="design-content">

        <!-- MENU OPTIONS -->
        <h1>Explore Drinks</h1>
        <!-- LATTE -->
        <div class="btn btn-outline-danger option" role="button">
          <a href="#latte-content">
            <img src="../assets/latte-2.jpg">
            <h2>Latte</h2>
            <p class="drinkDesc">Espresso and microfoam</p>
          </a>
        </div>

        <!-- AMERICANO -->
        <div class="btn btn-outline-success option" role="button">
          <a href="#americono-content">
            <img src="../assets/americano-2.jpg">
            <h2>Americano</h2>
            <p class="drinkDesc">Espresso and hot water</p>
          </a>
        </div>

        <!-- GREEN TEA -->
        <div class="btn btn-outline-primary option" role="button">
          <a href="#green-content">
            <img src="../assets/green-tea-2.jpg">
            <h2>Green Tea</h2>
            <p class="drinkDesc">China Green Jade Tea</p>
          </a>
        </div>

        <!-- HOT CHOCOLATE-->
        <div class="btn btn-outline-primary option" role="button">
          <a href="#hot-content">
            <img src="../assets/hot-chocolate-2.jpg">
            <h2>Hot Chocolate</h2>
            <p class="drinkDesc">Microfoam Milk with chocolate sauce</p>
          </a>
        </div>
      </div>

      <!-- MENU INFO -->
      <div class="brew-content" id="latte-content">
        <h1>Latte</h1>
        <div>
          <b-table striped hover :items="latte"></b-table>
            <img id="menuImages" thumbnail fluid src="../assets/latteNutr.png">
        </div>
      </div>

      <div class="brew-content" id="americono-content">
        <h1>Americono</h1>
        <div>
          <b-table striped hover :items="americono"></b-table>
          <img id="menuImages" thumbnail fluid src="../assets/americanoNutr.png">
        </div>
      </div>

      <div class="brew-content" id="green-content">
        <h1>Green Tea</h1>
        <div>
          <b-table striped hover :items="green"></b-table>
          <img id="menuImages" thumbnail fluid src="../assets/greenNutr.png">
        </div>
      </div>

      <div class="brew-content" id="hot-content">
        <h1>Hot Chocolate</h1>
        <div>
          <b-table striped hover :items="hotChocolate"></b-table>
          <img id="menuImages" thumbnail fluid src="../assets/hotchocNutr.png">
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
    export default {
        data() {
            return {
                latte: [
                    { Expresso: "1 shot", Creamer: "2oz"}

                ],
                americono: [
                    { Expresso: "1 shot", Creamer: "2oz",  HotWater: 1, SugarCube: 1}

                ],
                green: [
                    { MatchaPowder: "1 tsp", HotWater: "6oz" }

                ],
                hotChocolate: [
                    { CocoaPowder: "2 tsp", Milk: "1cup",  Sugar: "2 tsp " }

                ]

            }
        }
    }
</script>
<style scoped>

</style>
<style scoped>

</style>

