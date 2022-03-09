
$(document).ready(function(){
    // Au click sur la div.menu, nous activerons et désactiverons la classe .active pour la nav mais aussi pour la div.menu
    $(".menu").click(function() {
        $(".menu").toggleClass("active");
        $(".nav").toggleClass("active");
        });
});