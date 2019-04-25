$(document).ready(function(){

    $( function() {
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

        
      } );
      $( function() {
        $( "#selectable" ).selectable();
      } );

      
    dragAndDrop();
    brew();   
    
});

function dragAndDrop() {
    $(".option").draggable({ 
        revert:  function(dropped) {
            
            
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
function brew(){
    var dropped = document.getElementsByClassName("dropped");
    var drinkType = "";
    for(var i=0; i< dropped.length; i++){
        
    }
}

function latte(){
    clear();
    $('#cup').removeClass("hidden").addClass("latte");
    $('#handle').removeClass("hidden");
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
    $('#handle').removeClass("hidden");
}
function americano(){
    clear();
    $('#cup').removeClass("hidden").addClass("americano");
    $('#handle').removeClass("hidden");
}
function clear(){
    $('#cup').removeClass().addClass("hidden");
    $('#glass').removeClass().addClass("hidden");
    $('#handle').addClass("hidden");
    $('#ice-cubes').addClass("hidden");
    $('#straw').addClass("hidden");
}