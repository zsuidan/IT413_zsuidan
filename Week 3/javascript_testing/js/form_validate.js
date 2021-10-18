function validateForm()
    {
        var return_value = true;
        var error_string = "";

        if(document.forms["my_form"].first_name.value == "")
        {
            error_string += "Please Fill in the First Name Value\n";
            return_value = false;
        }

        if(document.forms["my_form"].first_name.value !== "" && document.forms["my_form"].first_name.value.length < 3)
        {
            error_string += "First Name Value must be at least 3 characters.\n";
            return_value = false;
        }
        
        if(document.forms["my_form"].last_name.value == "")
        {
            error_string += "Please Fill in the Last Name Value\n";
            return_value = false;
        }

        if (error_string != "")
        {
            alert(error_string);
        }

        return return_value;
    }