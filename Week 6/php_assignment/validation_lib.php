<?php

function validateFirstName($passed_first_name)
{

    if(strlen($passed_first_name) === 0)
    {
        $validation_outcome = "empty";
    }

    elseif(strlen($passed_first_name) > 0 && strlen($passed_first_name) >= 3 && strlen($passed_first_name) <= 10 && !hasBadChars(["@", "#", "$", "\"", "{", "}", "%"], $passed_first_name))
    {
        $validation_outcome = "valid";
    }

    else
    {
        $validation_outcome = "invalid";
    }

    return $validation_outcome;
}

function validateLastName($passed_last_name)
{

    if(strlen($passed_last_name) === 0)
    {
        $validation_outcome = "empty";
    }

    elseif(strlen($passed_last_name) > 0 && strlen($passed_last_name) >= 2 && strlen($passed_last_name) <= 15 && !hasBadChars(["@", "#", "$", "\"", "^", "&", "*","%"], $passed_last_name))
    {
        $validation_outcome = "valid";
    }

    else
    {
        $validation_outcome = "invalid";
    }

    return $validation_outcome;
}

function validateAddress($passed_address)
{

    if(strlen($passed_address) === 0 || (strlen($passed_address) >= 8 && strlen($passed_address) <= 25))
    {
        $validation_outcome = "valid";
    }
    else
    {
        $validation_outcome = "invalid";
    }

    return $validation_outcome;
}

function validatePhone($passed_phone)
{

    if(strlen($passed_phone) === 0)
    {
        $validation_outcome = "empty";
    }

    elseif(strlen($passed_phone) == 10 || strlen($passed_phone) == 12)
    {
        $validation_outcome = "valid";
    }

    else
    {
        $validation_outcome = "invalid";
    }

    return $validation_outcome;
}

function validateInquiry($passed_inquiry)
{

    if(strlen($passed_inquiry) === 0)
    {
        $validation_outcome = "empty";
    }
    else
    {
        $validation_outcome = "valid";
    }

    return $validation_outcome;
}

function hasBadChars($passed_characters, $passed_value)
{
    $bar_chars_found = false;
    $char_count = 0;

    while($char_count < sizeof($passed_characters))
    {
        if(strpos($passed_value, $passed_characters[$char_count]) !== false)
        {
            $bar_chars_found = true;
        }
        $char_count ++;
    }

    return $bar_chars_found;
}

?>