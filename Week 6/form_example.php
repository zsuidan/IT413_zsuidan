<?php
    include("validation_lib.php");

    $first_name_submitted = trim($_POST["first_name"]);

    if(validateFirstName($first_name_submitted))
    {
        echo($first_name_submitted);
    }
    else
    {
        echo("First name must be between 3-10 characters");
    }
   
?>

<html>
    <body>
        <form action="form_example.php" method="post">

            <input type="text" name="first_name" value="<?php echo($first_name_submitted); ?>"><br>
            <input type="submit" value="Submit">

        </form>
    </body>
</html>