<?php

function validateFirstName($passed_first_name)
{
    if(strlen($passed_first_name) === 0)
    {
        return false;
    }

    elseif(strlen($passed_first_name) > 0 && strlen($passed_first_name) > 2 && strlen($passed_first_name) < 11 && !hasBadChars(["!", "@", "#", "4"], $passed_first_name))
    {
        return true;
    }

    else
    {
        return false;
    }
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