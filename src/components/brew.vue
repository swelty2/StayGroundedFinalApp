<template>
  <b-container>
    <!-- NAVBAR -->
    <nav>
      <ul>
        <li><a><router-link to="/home/" class="active">Home</router-link></a></li>
        <li><a><router-link to="/brew">Brewmaker 1.0</router-link></a></li>
        <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
        <li><a><router-link to="/builddrink">Explore Drinks</router-link></a></li>
        <li><a><router-link to="/data">Fun Facts</router-link></a></li>
      </ul>
    </nav>

    <div>
      <h2>Your Drink Is Brewing</h2>
          <vue-p5 @sketch="sketch" @setup="setup" @draw="draw"></vue-p5>
    </div>
  </b-container>

</template>

<script>
    export default {
        name: "p5-example",
        components: {
            "vue-p5": VueP5
        }/*
        data: () => ({
            yoff : 0.1,
            xoff : 0.1,
            width : 200,
            height : 300,
            drinkWidth : 125,
            drinkHeight : 225,
        }),
        methods: {
            sketch(sketch) {
                sketch.draw = () => {
                    sketch.background(160,82,45, 0.35);
                    sketch.textSize(25);
                    sketch.text('Stir your drink', 15, 30);
                };
            },
            setup(sketch) {
                sketch.createCanvas(this.width, this.height, this.WEBGL);
                sketch.stroke(200);
            },
            draw(sketch) {
                let noiseScale=0.01;
                for (let x=1; x < sketch.width; x++) {
                    let noiseVal = sketch.noise((sketch.mouseX+x)*noiseScale, sketch.mouseY*noiseScale);
                    sketch.stroke(noiseVal*182);
                    let c = sketch.color(150, 75, 0);
                    sketch.fill(c);
                    sketch.line(x, sketch.mouseY+noiseVal*100, x, sketch.height);
                }
                //Changes color
                let barWidth = 0.2 ;
                let lastBar = -1;
                sketch.colorMode(sketch.HSB,this.width,this.height,40);
                let whichBar = sketch.mouseX / barWidth;
                if (whichBar !== lastBar) {
                    let barX = whichBar * barWidth;
                    sketch.fill(barX, sketch.mouseY, 10);
                    lastBar = whichBar;
                }
                sketch.beginShape();
                // Iterate over horizontal pixels
                for (let x = 2; x <= this.width; x += 3) {
                    // Calculate a y value according to noise, map to
                    // 2D Noise
                    let y = map(sketch.noise(this.xoff, this.yoff), 1, 3,160,220);
                    // Set the vertex
                    sketch.vertex(x, y);
                    // Increment x dimension for noise
                    this.xoff += 0.5;
                }
                // increment y dimension for noise
                this.yoff += 0.51;
                sketch.vertex(this.width, this.height);
                sketch.vertex(0, this.drinkHeight);
                sketch.endShape(sketch.CLOSE);
            }
        }*/
    };
</script>