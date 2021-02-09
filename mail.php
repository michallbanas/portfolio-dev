<?php 
if(isset($_POST['submit'])){
    $to = "banas.michal@icloud.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['meno'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $správa = $name . " " . "\n\n" . $_POST['správa'];
    $správa2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['správa'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$správa,$headers);
    mail($from,$subject2,$správa2,$headers2); // sends a copy of the message to the sender
    header("Location:thankyou.html");
    }
?>