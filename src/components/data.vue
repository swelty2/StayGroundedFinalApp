<script src="../router/index.js"></script>
<template>

  <div id="brewTable">
    <!-- NAVBAR -->
    <nav>
      <ul>
        <li><a role="navigation"><router-link to="/home/">Home</router-link></a></li>
        <li><a role="navigation"><router-link to="/buildDrink">Brewmaker 1.0</router-link></a></li>
        <li><a role="navigation"><router-link to="/lexbot">Voice Order</router-link></a></li>
        <li><a role="navigation"><router-link to="/menu">Explore Drinks</router-link></a></li>
        <li><a role="navigation"><router-link to="/data" class="active">Fun Facts</router-link></a></li>
      </ul>
    </nav>

    <div id = "dataContent">
      <!-- D3 COFFEE CHART -->
      <div class="intbox leftBottomBox">
        <coffee-chart></coffee-chart>
      </div>

      <!-- D3 TEA CHART -->
      <div class="intbox rightBottomBox">
        <tea-chart></tea-chart>
      </div>
      
    </div>
  </div>

</template>


<script>
  import VueP5 from "vue-p5";
  import coffeeChart from '../components/coffee-chart'
  import teaChart from '../components/tea-chart'
  export default {
    name: "p5-example",
    components: {
      "vue-p5": VueP5,
      coffeeChart,
      teaChart
    },
    data: () => ({
      yoff : 0.0,
      xoff : 0,
      width : 310,
      height : 400
    }),
    methods: {
      sketch(sketch) {
        sketch.draw = () => {


        };
      },
      setup(sketch) {
        sketch.createCanvas(this.width, this.height);
        sketch.fill(255);
        sketch.stroke(200);
      },
      draw(sketch) {
        sketch.beginShape();
        let c = sketch.color('brown');
        sketch.fill(c);
        // Iterate over horizontal pixels
        for (let x = 0; x <= this.width; x += 10) {
          // Calculate a y value according to noise, map to
          // 2D Noise
          let y = sketch.map(sketch.noise(this.xoff, this.yoff), 0, 1, 100,200);
          // Set the vertex
          sketch.vertex(x, y);
          // Increment x dimension for noise
          this.xoff += 0.05;
        }
        // increment y dimension for noise
        this.yoff += 0.01;
        sketch.vertex(this.width, this.height);
        sketch.vertex(0, this.height);
        sketch.endShape(sketch.CLOSE);
      }
    }
  };
</script>

