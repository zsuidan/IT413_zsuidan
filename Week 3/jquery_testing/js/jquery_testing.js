$(document).ready(function() {

    $(".normal").css("color", "blue");
    $("#second_paragraph").css("font-family", "Arial");

    $("#second_paragraph").html("This text has been changed");

    $("body").append("<img id=\"my_image\" src=\"images/sloth.jpg\">");

    $("#effect_button").click(function() {
        $("#my_image").toggle();
    })
});

function validateForm()
{
    var first_name_value = $("#first_name").val();

    if(first_name_value != "")
    {
        return true
    }
    else
    {
        alert("The First Name Field Cannot be Empty")
    }
}