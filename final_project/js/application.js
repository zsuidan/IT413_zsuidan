//Begin document ready functionality
$(document).ready(function() {

    $.ajaxSetup({ cache: true });
    $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
        FB.init({
        appId: '423105989371828',
        version: 'v2.7'
        });

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    });

    //Login button click function
    $("#login_button").click(function() {

        validateUser();
        return false;
    })

    //Facebook login click function 
    $("#login_fb").click(function() {
        FB.login(function(response) {
            statusChangeCallback(response);

        });
        
    })

    //Logout button click function
    $("#project_logout_button").click(function(){
        FB.logout(function(response) {
            statusChangeCallback(response);
        })

        $("#login_state").show();
        $("#select_project_state").hide();
        $("#view_task_state").hide();
        $("#add_task_state").hide();
        $("#edit_task_state").hide();
    })

    //Logout button click function
    $("#task_logout_button").click(function(){
        FB.logout(function(response) {
            statusChangeCallback(response);
        })

        $("#login_state").show();
        $("#select_project_state").hide();
        $("#view_task_state").hide();
        $("#add_task_state").hide();
        $("#edit_task_state").hide();
    })

    //View tasks click function
    $("#view_tasks_button").click(function(){

        getTasks();
        $("#select_project_state").hide();
        $("#view_task_state").show();
    })

    //Back to select click function
    $("#back_to_select_button").click(function(){

        $("#select_project_state").show();
        $("#view_task_state").hide();
        $("#add_task_state").hide();
        $("#edit_task_state").hide();
    })

    //Add task click function
    $("#add_task_button").click(function(){

        $("#add_task_state").show();
        $("#edit_task_state").hide();
    })

    //Edit task click function
    $("#edit_task_button").click(function(){

        $("#edit_task_state").show();
        $("#add_task_state").hide();
    })

});
//End document ready functionality


//Begin getProjects function
function getProjects()
{
    var retriever_command = "get_projects";

    $.post('dataretriever.php', {command: retriever_command}, function(data) {

        var count = 0;

        $("#project_selector").empty();

        while(count < data.list_of_projects.length)
        {
            $("#project_selector").append("<option value='" + data.list_of_projects[count].project_number + "'>" + data.list_of_projects[count].project_full_name + "</option>");
            count++;
        }//End while loop

    }, "json").fail(function(){alert("Web Service Call Failed");});
}
//End getProjects function

//Begin getTasks function
function getTasks()
{
    var retriever_command = "get_tasks";
    var proj_num = $("#project_selector").val();

    $.post('dataretriever.php', {command: retriever_command, project_number: proj_num}, function(data) {

        $("#task_list").empty();
        $("#task_selector").empty();
        $("#task_list").append("<tr><td>Task ID</td><td>Task Description</td><td>Task Status</td></tr>");
        
        var count = 0;

        while(count < data.list_of_tasks.length)
        {
            $("#task_list").append("<tr>" 
            + "<td>" + data.list_of_tasks[count].task_number + "</td>" 
            + "<td>" + data.list_of_tasks[count].task_description + "</td>" 
            + "<td>" + data.list_of_tasks[count].task_status + "</td></tr>");

            $("#task_selector").append("<option value='" + data.list_of_tasks[count].task_number + "'>" + data.list_of_tasks[count].task_description + "</option>");

            count++;
        }//End while loop

    }, "json").fail(function(){alert("Web Service Call Failed");});
}
//End getTasks function

//Begin validateUser function
function validateUser()
{
    var retriever_command = "validate_user";
    var entered_user = $("#login_username").val();
    var entered_password = $("#login_password").val();

    $.post('dataretriever.php', {command: retriever_command, submitted_user: entered_user, submitted_password: entered_password}, function(data) {

        if(data)
        {
            $("#login_state").hide();

            //Obtains project information from database for select_project_state
            getProjects();
            $("#select_project_state").show();
        }
        else
        {
            $("#login_form").effect( "shake", "slow" );
        }

    });
}
//End validateUser function

function statusChangeCallback(response)
{
    if(response.status === "connected")
    {
        $("#login_state").hide();
        getProjects();
        $("#select_project_state").show();
    }
    else
    {
        console.log("Please log in");
    }

    console.log(response)
}