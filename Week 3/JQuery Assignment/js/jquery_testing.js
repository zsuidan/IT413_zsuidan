$(document).ready(function() {

    $("body").append("<br><img id=\"other_sloth_image\" src=\"images/sloth2.jpg\">");

    $("#other_sloth_image").css("border-radius", "50%");
    $("#other_sloth_image").css("width", "50%");
    $("#other_sloth_image").css("height", "50%");

    $("body").append("<ul>" + 
    
    "<li>Sloths have an extremely low metabolic rate, which means they move at a languid, sluggish pace through the trees. On average, sloths travel 41 yards per day.</li>" + 
    "<li>Sloths snooze for about 15 hours per day. That leaves only nine hours to lumber through the trees. They maintain a low body temperature of about " + 
    "86-93 F and move in and out of shade to regulate their body temperature.</li>" + 
    "<li>Surprisingly, sloths are strong swimmers. They will sometimes drop down from their treetop perches into water and use their extended arms to propel through the water.</li>" + 
    
    "</ul>");

    $("#text_change_button").click(function() {
        $("#first_heading").html("Sloths are very cool");
    })

    $("#image_hide_button").click(function() {
        $("#sloth_image").fadeOut(500);
    })

    $("#paragraph_style_button").click(function() {
        $(".normal").css("font-family", "Arial");
        $("#first_paragraph").css("color", "red");
        $("#second_paragraph").css("color", "green")
        $("#third_paragraph").css("color", "blue")
    })
})