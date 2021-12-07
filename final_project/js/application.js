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

    //Add task click function
    $("#add_task_button").click(function(){

        $("#edit_task_state").hide();
        $("#add_task_state").toggle("fade");
    })

    //Back to select click function
    $("#back_to_select_button").click(function(){

        $("#select_project_state").toggle("fade");
        $("#view_task_state").hide();
        $("#add_task_state").hide();
        $("#edit_task_state").hide();
    })

    //Edit task click function
    $("#edit_task_button").click(function(){

        $("#edit_task_state").toggle("fade");
        $("#add_task_state").hide();
    })

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

        $("#login_state").toggle("fade");
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

        $("#login_state").toggle("fade");
        $("#select_project_state").hide();
        $("#view_task_state").hide();
        $("#add_task_state").hide();
        $("#edit_task_state").hide();
    })

    //View tasks click function
    $("#view_tasks_button").click(function(){

        getTasks();
        $("#select_project_state").hide();
        $("#view_task_state").toggle("fade");
    })

});
//End document ready functionality


//Begin getProjects function
function getProjects()
{
    //Calls the get_projects function from dataretriever.php and fills project_selector with the entries in the database 
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
    //Calls the get_tasks function using the value of the project_selector to determine what project needs to have its tasks shown
    var retriever_command = "get_tasks";
    var proj_num = $("#project_selector").val();

    $.post('dataretriever.php', {command: retriever_command, project_number: proj_num}, function(data) {

        //Clears task_list and task_selector to get rid of any previously added tasks
        $("#task_list").empty();
        $("#task_selector").empty();

        //Sets up task_list table headers
        $("#task_list").append("<tr><td>Task ID</td><td>Task Description</td><td>Task Status</td></tr>");
        
        //Goes through list of tasks for selected project and adds them to the task_list and task_selector 
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

//Begin statusChangeCallback function
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
//End statusChangeCallback function

//Begin validateUser function
function validateUser()
{
    //Calls the validate_user function from dataretriever.php using the username and password values entered by the user
    var retriever_command = "validate_user";
    var entered_user = $("#login_username").val();
    var entered_password = $("#login_password").val();

    $.post('dataretriever.php', {command: retriever_command, submitted_user: entered_user, submitted_password: entered_password}, function(data) {

        //If verification was successful, obtains projects for project_selector and shows select_project_state
        if(data)
        {
            $("#login_state").hide();

            //Obtains project information from database for select_project_state
            getProjects();

            $("#select_project_state").toggle("fade");
        }

        //If verification was unsuccessful, performs a shake effect on the login form
        else
        {
            $("#login_form").effect( "shake", "slow" );
        }

    });
}
//End validateUser function