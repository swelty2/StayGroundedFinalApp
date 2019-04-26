
<template>
    <b-container fluid>
        <a name="top"></a>
        <!-- NAVBAR -->
        <nav>
            <ul>
                <li><a role="navigation"><router-link to="/home/" role='button' tabindex='0'>Home</router-link></a></li>
                <li><a role="navigation"><router-link to="/buildDrink" class="active" role='button' tabindex='0'>Brewmaker 1.0</router-link></a></li>
                <li><a role="navigation"><router-link to="/lexbot" role='button' tabindex='0'>Voice Order</router-link></a></li>
                <li><a role="navigation"><router-link to="/menu" role='button' tabindex='0'>Explore Drinks</router-link></a></li>
                <li><a role="navigation"><router-link to="/data" role='button' tabindex='0'>Fun Facts</router-link></a></li>
            </ul>
        </nav>
        
        
        <div id="centerContainer">
            <div id="design-content">
                <h1>Do you want to choose a recipe or create a custom cup?</h1>
                <!-- BEAN DATA -->
                <div class="btn btn-outline-danger option">
                    <a href="#recipe-content" role='button' tabindex='0' aria-pressed="false" onClick="document.location.reload(true)">
                    <img src="../assets/list.png" alt="'Icon to choose a recipe">
                    <h2>Choose Recipe</h2>
                    </a>
                 </div> 
                
                <!-- BUILD A DRINK -->  
                <div class="btn btn-outline-success option">
                    <a href="#build-content" role='button' tabindex='0' aria-pressed="false" onClick="document.location.reload(true)">
                    <img src="../assets/cup.png" alt="'Icon to customize your drink">
                    <h2>Custom Cup</h2>
                    </a>
                 </div> 

            </div>
            <hr>

            <!-- RECIPE CONTENT -->
            <div class="brew-content" id="recipe-content">
                <h2>Choose a Drink Recipe</h2>
                <div id="recipe-menu">
                    <ol id="selectable">
                        <li class="ui-widget-content" value="latte">Latte</li>
                        <li class="ui-widget-content" value="mocha-latte">Mocha Latte</li>
                        <li class="ui-widget-content" value="iced-coffee">Iced Coffee</li>
                        <li class="ui-widget-content" value="coffee">Coffee</li>
                        <li class="ui-widget-content" value="green-tea">Green Tea</li>
                        <li class="ui-widget-content" value="black-tea">Black Tea</li>
                        <li class="ui-widget-content" value="iced-latte">Iced Latte</li>
                        <li class="ui-widget-content" value="iced-green-tea">Iced Green Tea</li>
                        <li class="ui-widget-content" value="iced-black-tea">Iced Black Tea</li>
                    </ol>
                    <button role='button' tabindex='0' aria-pressed="false">
                        <a href="#brew-content">
                            <h2>Brew My Drink!</h2>
                        </a>
                    </button>
                </div>    
            </div>
            <hr>
    
                

            <!-- CUSTOM CUP CONTENT -->
            <div class="brew-content" id="build-content">
                <div id="customize-menu">
                    <div class="left">
                            <h2>Customize your drink!</h2>
                        <!-- OUNCES/AMOUNT -->
                        <p>
                            <label for="amount">How many ounces would you like?</label>
                            
                        </p>
                        <div id="slider-range-max"></div>

                        <h2>Drag and Drop to make the following selections:</h2>

                        <!-- HOT OR ICED -->
                        <p>What is the drink temperature?</p>
                        <div class="option hot" id="temp"><p>Hot</p></div>
                        <div class="option cold" id="temp"><p>Iced</p></div>

                        
                        <!-- ESPRESSO, COFFEE, TEA -->
                        <p>What type of drink would you like?</p>
                        <div class="option espresso" id="drinkType"><p>Espresso</p></div>
                        <div class="option coffee" id="drinkType"><p>Coffee</p></div>
                        <div class="option greenTea" id="drinkType"><p>Green Tea</p></div>
                        <div class="option blackTea" id="drinkType"><p>Black Tea</p></div>
                        
                        <!-- FLAVORS -->
                        <p>Do you want a flavoring?</p>
                        <div class="option vanilla" id="flavor"><p>Vanilla</p></div>
                        <div class="option hazelnut" id="flavor"><p>Hazelnut</p></div>
                        <div class="option chocolate" id="flavor"><p>Chocolate</p></div>

                        <!-- MILK TYPE -->
                        <p>What's your preferred milk type?</p>
                        <div class="option skim" id="milkType"><p>Skim Milk</p></div>
                        <div class="option whole" id="milkType"><p>Whole Milk</p></div>
                        <div class="option almond" id="milkType"><p>Almond Milk</p></div>
                        <div class="option cream" id="milkType"><p>Half and Half</p></div>

                        <!-- BREW BUTTON -->
                        <button role='button' tabindex='0'aria-pressed="false" >
                            <a href="#brew-content">
                                <h2>Brew My Drink!</h2>
                            </a>
                        </button>
                    </div>
                    <div class="right">
                        <h2> Selections</h2>
                        <div class="selection" id="amountArea"><p>Amount (oz.) </p><input type="text" id="amount"></div>
                        <div class="selection" id="tempDrop"><p>Drink Temperature</p></div>
                        <div class="selection" id="drinkTypeDrop"><p>Drink Type</p></div>
                        <div class="selection" id="flavorDrop"><p>Flavor</p></div>
                        <div class="selection" id="milkTypeDrop"><p>Milk Type</p></div>

                    </div>
                    
                    
                </div>
            </div>
            <hr>
            <div class="brew-content" id="brew-content">
                <h1>Your Drink!</h1>
                <div class="p5">
                    <p id="brewing-text"></p>
                    <vue-p5 @sketch="sketch" @setup="setup" @draw="draw"></vue-p5>
                    <div id="handle" class="vue"></div>
               



                </div>
                
                
                
                <div class="drink-area">
                    <div id="cup" class="hidden"></div>
                    <div id="handle" class="hidden"></div>
                    <div id="glass" class="hidden"></div>
                    <div id="ice-cubes" class="hidden">
                        <div id="ice-cube-1"></div>
                        <div id="ice-cube-2"></div>
                        <div id="ice-cube-3"></div>
                        <div id="ice-cube-4"></div>
                        <div id="ice-cube-5"></div>
                    </div>
                    <div id="straw" class="hidden"></div>
                    
                </div>
            </div>

            
        </div>
        
    </b-container>
</template>

<script>
    export default {
        name: "p5-example",
        components: {
            "vue-p5": VueP5
        },
        data: () => ({
            yoff : 0,
            xoff : 0,
            width : 400,
            height : 400,
        }),
        methods: {
            sketch(sketch) {
                sketch.draw = () => {
                    sketch.background(255);
                    

                };
            },
            setup(sketch) {
                sketch.createCanvas(this.width, this.height);
                
            },
            draw(sketch) {
                
                this.xoff = 5;
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
                for (let x = 0; x <= this.width; x += 10) {
                    // Calculate a y value according to noise, map to
                    // 2D Noise
                    let y = sketch.map(sketch.noise(this.xoff, this.yoff), 0, 1,5,50);
                    // Set the vertex
                    sketch.vertex(x, y);
                    // Increment x dimension for noise
                    this.xoff += 0.01;
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


<style scoped>

</style>
