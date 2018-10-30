$(document).ready(function() {

    $("#divinicio").show();
    $("#divcv").hide();
    $("#divcontato").hide();

    $("#menuinicio").click(() => { 
        $("#divcv").hide();
        $("#divcontato").hide();
        $("#divinicio").fadeIn();
        $('.navbar-toggle').click();
    });

    $("#menucv").click(() => { 
         openCV();
         $('.navbar-toggle').click();
    });

    $("#menucontato").click(() => { 
        $("#divcv").hide();
        $("#divinicio").hide();
        $("#divcontato").fadeIn();
        $('.navbar-toggle').click();
    });

    function openCV() {
        $("#divcontato").hide();
        $("#divinicio").hide();
        $("#divcv").fadeIn();  
    }

    $("#buttonOpenCV").click(() => {
        openCV();
    });

});