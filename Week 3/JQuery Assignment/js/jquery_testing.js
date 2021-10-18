$(document).ready(function() {

    $("body").append("<br><img id=\"other_sloth_image\" src=\"images/sloth2.jpg\">");

    $("#other_sloth_image").css("border-radius", "50%")
    $("#other_sloth_image").css("width", "50%")
    $("#other_sloth_image").css("height", "50%")

    $("#text_change_button").click(function() {
        $("#first_heading").html("Sloths are very cool");
    })

    $("#image_hide_button").click(function() {
        $("#sloth_image").fadeOut(500);
    })

    $("#paragraph_style_button").click(function() {
        $(".normal").css("color", "purple");
        $(".normal").css("font-family", "Arial");
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