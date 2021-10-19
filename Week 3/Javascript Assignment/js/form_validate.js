function validateForm()
    {
        var return_value = true;
        var error_string = "";

        if(document.forms["contact_form"].first_name.value == "")
        {
            error_string += "Please fill in your First Name.\n";
            return_value = false;
        }

        if(document.forms["contact_form"].first_name.value !== "" && (document.forms["contact_form"].first_name.value.length < 3 
            || document.forms["contact_form"].first_name.value.length > 10))
        {
            error_string += "First Name value must be 3-10 characters long.\n";
            return_value = false;
        }
        
        if(document.forms["contact_form"].last_name.value == "")
        {
            error_string += "Please fill in your Last Name.\n";
            return_value = false;
        }

        if(document.forms["contact_form"].last_name.value !== "" && (document.forms["contact_form"].last_name.value.length < 2 
            || document.forms["contact_form"].last_name.value.length > 15))
        {
            error_string += "Last Name value must be 2-15 characters long.\n";
            return_value = false;
        }

        if(document.forms["contact_form"].address.value != "" && (document.forms["contact_form"].address.value.length < 8 
            || document.forms["contact_form"].address.value.length > 25))
        {
            error_string += "Address value must be 8-25 characters long.\n";
            return_value = false;
        }

        if(document.forms["contact_form"].phone.value == "")
        {
            error_string += "Please fill in your Phone Number.\n";
            return_value = false;
        }

        if(document.forms["contact_form"].phone.value != "" && document.forms["contact_form"].phone.value.length != 10 
            && document.forms["contact_form"].phone.value.length != 12)
        {
            error_string += "Phone Number value must be either 10 or 12 characters long.\n";
            return_value = false;
        }

        if(document.forms["contact_form"].text_to_submit.value == "")
        {
            error_string += "Please fill in your Inquiry.\n";
            return_value = false;
        }

        if (error_string != "")
        {
            alert(error_string);
        }

        return return_value;
    }