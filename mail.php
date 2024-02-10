<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

    # FIX: Replace this email with recipient email
    $to = "theme.junction.live@gmail.com";

    $subject = $subject;
    $txt = "You have a new message from your Nasiha website contact form\n=============================\n" . "Name: " . $name."\nPhone: " .$phone. "\nEmail: ".$email."\nMessage:\n" .$message;
    
    $headers = 'From: email@mywebsite.com' . "\r\n" .
    "Reply-To:" . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  
    if(mail($to,$subject,$txt,$headers))
    {
        echo "Y";
    }
    else{
        echo "N";
    }
    
?>