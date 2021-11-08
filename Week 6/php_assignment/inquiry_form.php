<?php
    //Imports validation_lib.php functions
    include("validation_lib.php");

    //Obtains information from form
    $submitted_first_name = trim($_POST["first_name"]);
    $submitted_last_name = trim($_POST["last_name"]);
    $submitted_address = trim($_POST["address"]);
    $submitted_phone = trim($_POST["phone"]);
    $submitted_inquiry = trim($_POST["inquiry"]);

    $first_name_message = "";
    $last_name_message = "";
    $address_message = "";
    $phone_message = "";
    $inquiry_message = "";
    $form_message = "";

    $form_has_errors = false;

    //First name validation and message creation

    if(validateFirstName($submitted_first_name) == "empty")
    {
        $first_name_message = "Please enter your first name";
        $form_has_errors = true;
    }
    elseif(validateFirstName($submitted_first_name) == "valid")
    {
        $first_name_message = "Ok!";
    }
    elseif(validateFirstName($submitted_first_name) == "invalid")
    {
        $first_name_message = "First name must be between 3-10 characters and cannot contain @, #, $, \", {, }, or %";
        $form_has_errors = true;
    }


    //Last name validation and message creation

    if(validateLastName($submitted_last_name) == "empty")
    {
        $last_name_message = "Please enter your last name";
        $form_has_errors = true;
    }
    elseif(validateLastName($submitted_last_name) == "valid")
    {
        $last_name_message = "Ok!";
    }
    elseif(validateLastName($submitted_last_name) == "invalid")
    {
        $last_name_message = "Last name must be between 2-15 characters and cannot contain @, #, $, \", ^, &, *, or %";
        $form_has_errors = true;
    }

    //Address validation and message creation

    if(validateAddress($submitted_address) == "valid")
    {
        $address_message = "Ok!";
    }
    elseif(validateAddress($submitted_address) == "invalid")
    {
        $address_message = "Address must be between 8-25 characters";
        $form_has_errors = true;
    }

    //Phone validation and message creation

    if(validatePhone($submitted_phone) == "empty")
    {
        $phone_message = "Please enter your phone number";
        $form_has_errors = true;
    }
    elseif(validatePhone($submitted_phone) == "valid")
    {
        $phone_message = "Ok!";
    }
    elseif(validatePhone($submitted_phone) == "invalid")
    {
        $phone_message = "Phone number must be either 10 or 12 characters";
        $form_has_errors = true;
    }

    //Inquiry validation and message creation
   
    if(validateInquiry($submitted_inquiry) == "empty")
    {
        $inquiry_message = "Please enter your inquiry";
        $form_has_errors = true;
    }
    elseif(validateInquiry($submitted_inquiry) == "valid")
    {
        $inquiry_message = "Ok!";
    }

    //Informs user that the form was submitted or that the form has errors
    if(!$form_has_errors)
    {
        $form_message = "Your inquiry has been submitted!";
    }
    else
    {
        $form_message = "Your inquiry contains errors! Please fix them and submit again.";
    }
   
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>
    <h1>Contact Us</h1>

    <form method="post" name="contact_form">
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="first_name" class="form-label">First name</label>
                <input type="text" class="form-control" placeholder="First Name" name="first_name" value="<?php echo($submitted_first_name);?>" />
                <div><?php echo($first_name_message)?></div>

            </div>

            <div class="col-md-4 mb-3">
                <label for="last_name" class="form-label">Last name</label>
                <input type="text" class="form-control" placeholder="Last Name" name="last_name" value="<?php echo($submitted_last_name);?>" />
                <div><?php echo($last_name_message)?></div>

            </div>

            <div class="col-md-4 mb-3">
                <label for="address" class="form-label">Address (optional)</label>
                <input type="text" class="form-control" placeholder="Address" name="address" value="<?php echo($submitted_address);?>" />
                <div><?php echo($address_message)?></div>

            </div>

        </div>

        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" placeholder="Phone Number" name="phone" value="<?php echo($submitted_phone);?>" />
                <div><?php echo($phone_message)?></div>

            </div>

            <div class="col-md-4 mb-3">
                <label for="inquiry" class="form-label">Inquiry</label>
                <textarea class="form-control" name="inquiry" placeholder="Enter your inquiry"><?php echo($submitted_inquiry);?></textarea>
                <div><?php echo($inquiry_message)?></div>

            </div>

            <button class="btn btn-primary btn-sm" type="submit">Submit inquiry</button>
        </div>
    </form>

    <p><br><?php echo($form_message)?></p>
    <!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>