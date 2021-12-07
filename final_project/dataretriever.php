<?php

//include database access class
include("db_mysql.php");

//declare the database instance
$db = new DB_Sql;

$function=$_POST['command'];


//if we need to get the list of available projects, return the appropriate XML data
if($function=="get_projects")
{
		//array containing the list of projects
		$project_list = array();

		//the query to get the list of available projects
		$query="SELECT * FROM Projects";

		//do the query
		$db->query($query);

		while($db->next_record())
		{
			//store the database columns as variables
			$project_num=$db->f("project_num");
			$project_name=$db->f("project_name");
			
			//push the data onto the array that we intend to return
			array_push($project_list, array("project_number" => $project_num, "project_full_name" => $project_name));
				
		}//end while, all available projects are pushed onto the project_list array	

		//return the data in JSON format
		echo json_encode(array("status" => "Success", "list_of_projects" => $project_list));
		
}//end if we need the list of current projects in the database

//if we need to get the list of tasks by project, return the appropriate XML data
if($function=="get_tasks")
{		
		//get the variables we need to run the query and verify them
		$project_num=trim($_POST["project_number"]);

		if(numOK($project_num))
		{
			//array containing the list of projects
			$task_list = array();

			//the query to get the list of tasks for the project
			$query="SELECT * FROM Tasks WHERE Project_Num=$project_num";

			//do the query
			$db->query($query);

			while($db->next_record())
			{
				//store the database columns as variables
				$task_num=$db->f("task_num");
				$description=$db->f("Description");
				$status=$db->f("Status");
				
				//push the data onto the array that we intend to return
				array_push($task_list, array("task_number" => $task_num, "task_description" => $description, "task_status" => $status));
						
			}//end while, all available tasks for the specified project are pushed onto the task_list array	

			//return the data in JSON format
			echo json_encode(array("status" => "Success", "list_of_tasks" => $task_list));
		}

}//end if we need the list of tasks


//if we need to validate a user, checks that username and password against the database
if($function=="validate_user")
{
		$valid_user = false;

		//collects data needed for verification
		$submitted_user = trim($_POST["submitted_user"]);
		$submitted_password = trim($_POST["submitted_password"]);

		//verifies the data was formatted correctly
		if(userOK($submitted_user) && passOK($submitted_password))
		{
			//the query to get the list of available users
			$query="SELECT * FROM users";

			//do the query
			$db->query($query);

			//check the username and password combinations to ensure the user credentials are correct
			while($db->next_record())
			{
				$user_name=$db->f("username");
				$user_password=$db->f("password");

				//if the entered credentials match, sets $valid_user to true
				if($submitted_user == $user_name && $submitted_password == $user_password)
				{
					$valid_user = true;
					break;
				}

			}
		
		}

		//returns true/false depending on if credentials matched database values
		echo($valid_user);

}//end if we need to validate a user


//Verifies that the posted project number is valid
function numOK($passed_num)
{
	if(ctype_digit($passed_num))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//Verifies that the posted password is valid
function passOK($passed_password)
{
	if(ctype_alnum($passed_password))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//Verifies that the posted username is valid
function userOK($passed_user)
{
	if(ctype_alnum($passed_user))
	{
		return true;
	}
	else
	{
		return false;
	}
}


?>
