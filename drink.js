$(document).ready(function(){
    // Add jQuery functionality to slider
    makeSlider();

    // Adds jQuery functionality to selectable recipe list  
    makeSelectable();

    // Adds Draggable and Droppable jQuery functionality to the custom menu  
    dragAndDrop();
 
    
    $('#custom-button').click(customCup);
    $('#recipe-button').click(recipeCup);
    
});

// Slider fucntionality to choose drink size between 0 and 12 ounces
function makeSlider(){
    $( "#slider-range-max" ).slider({
        range: "max",
        min: 0,
        max: 12,
        value: 10,
        slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
        }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
}

// Selectable functionality for the recipe list
function makeSelectable(){
    $( "#selectable" ).selectable();
    
}

// Droppable and Draggabe functionality for the custom menu
function dragAndDrop() {
    $(".option").draggable({ 
        revert:  function(dropped) {
            // return an item back to its old position if its not dropped
            return !dropped;
         } 
     }).each(function() {
         var top = $(this).position().top;
         var left = $(this).position().left;
         $(this).data('orgTop', top);
         $(this).data('orgLeft', left);
    });

    $(".selection").droppable({
        activeClass: 'ui-state-hover',
        hoverClass: 'ui-state-active',
        drop: function(event, ui) {
            $(ui.draggable).addClass("dropped");
            $(this).addClass("droppedOn");
        },
        out: function(event, ui) {
            ui.draggable.mouseup(function () {
                var top = ui.draggable.data('orgTop');
                var left = ui.draggable.data('orgLeft');
                ui.position = { top: 0, left: 0 };
            });
        }
    });
}

// Brew selected cup
function brew(){
    var temp;
    var drinkType;
    var flavor;
    var milkType;
    var droppedList = $('#customize-menu').find(".dropped");

    // Loop through to assign values to all the chosen dropped elements
    for(var i = 0; i < droppedList.length; i++){
        var id = droppedList[i].id;
        switch(id){
            case "temp":
                temp = droppedList[i].innerText;
                break;
            case "drinkType":
                drinkType = droppedList[i].innerText;
                break;
            case "flavor":
                flavor = droppedList[i].innerText;
                break;
            case "milkType":
                milkType = droppedList[i].innerText;
                break;
            default :
                break;
        }
    }
    var options = [temp, drinkType, flavor, milkType];
    return options;
}
function customCup(){
    var options = brew();
    var temp = options[0];
    var type = options[1];
    var flavor = options[2];
    var milk = options[3];

    
    //Hot or cold?
    if(temp == "Hot"){
        if(type == "Coffee"){
            dripCoffee();
        }else if(type == "Green Tea"){
            greenTea();
        }else if(type == "Black Tea"){
            blackTea();
        }else if(type == "Espresso"){
            if(flavor == "Vanilla"){
                vanillaLatte();
            }else if(flavor == "Hazelnut"){
                hazelnutLatte();
            }else if(flavor == "Chocolate"){
                chocolateLatte();
            }
        }
    }else{
        if(type == "Coffee"){
            icedCoffee();
        }else if(type == "Green Tea"){
            icedGreenTea();
        }else if(type == "Black Tea"){
            icedBlackTea();
        }else if(type == "Espresso"){
            if(flavor == "Vanilla"){
                icedVanillaLatte();
            }else if(flaor == "Hazelnut"){
                icedHazelnutLatte();
            }else if(flavor == "Chocolate"){
                icedChocolateLatte();
            }
        }
    }
}
function recipeCup(){
    var selected = $('#recipe-menu').find('ui-selected').value;
    console.log(selected);

}

function hazelnutLatte(){
    clear();
    $('#cup').removeClass("hidden").addClass("hazelnut-latte");
    $('.drink-area #handle').removeClass("hidden");
}
function chocolateLatte(){
    clear();
    $('#cup').removeClass("hidden").addClass("chocolate-latte");
    $('.drink-area #handle').removeClass("hidden");
}
function vanillaLatte(){
    clear();
    $('#cup').removeClass("hidden").addClass("vanilla-latte");
    $('.drink-area #handle').removeClass("hidden");
}
function icedHazelnutLatte(){
    clear();
    $('#glass').removeClass("hidden").addClass("hazelnut-latte");
    $('#ice-cubes').removeClass("hidden");
    $('#straw').removeClass("hidden");
}
function icedChocolateLatte(){
    clear();
    $('#glass').removeClass("hidden").addClass("chocolate-latte");
    $('#ice-cubes').removeClass("hidden");
    $('#straw').removeClass("hidden");
}
function icedVanillaLatte(){
    clear();
    $('#glass').removeClass("hidden").addClass("vanilla-latte");
    $('#ice-cubes').removeClass("hidden");
    $('#straw').removeClass("hidden");
}
function icedLatte(){
    clear();
    $('#glass').removeClass("hidden").addClass("latte");
    $('#ice-cubes').removeClass("hidden");
    $('#straw').removeClass("hidden");
}

function icedGreenTea(){
    clear();
    $('#glass').removeClass("hidden").addClass("green-tea");
    $('#ice-cubes').removeClass("hidden");
    $('#straw').removeClass("hidden");
}
function icedBlackTea(){
    clear();
    $('#glass').removeClass("hidden").addClass("black-tea");
    $('#ice-cubes').removeClass("hidden");
    $('#straw').removeClass("hidden");
}
function greenTea(){
    clear();
    $('#cup').removeClass("hidden").addClass("green-tea");
    $('.drink-area #handle').removeClass("hidden");
}
function blackTea(){
    clear();
    $('#cup').removeClass("hidden").addClass("black-tea");
    $('.drink-area #handle').removeClass("hidden");
}
function latte(){
    clear();
    $('#cup').removeClass("hidden").addClass("latte");
    $('.drink-area #handle').removeClass("hidden");
}
function icedCoffee(){
    clear();
    $('#glass').removeClass("hidden").addClass("iced-coffee");
    $('#ice-cubes').removeClass("hidden");
    $('#straw').removeClass("hidden");
}
function dripCoffee(){
    clear();
    $('#cup').removeClass("hidden").addClass("drip-coffee");
    $('.drink-area #handle').removeClass("hidden");
}
function americano(){
    clear();
    $('#cup').removeClass("hidden").addClass("americano");
    $('.drink-area #handle').removeClass("hidden");
}
function clear(){
    $('#cup').removeClass().addClass("hidden");
    $('#glass').removeClass().addClass("hidden");
    $('.drink-area #handle').addClass("hidden");
    $('#ice-cubes').addClass("hidden");
    $('#straw').addClass("hidden");
}