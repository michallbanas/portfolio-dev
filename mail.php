<?php
//get data from form  
$meno = $_POST['meno'];
$email = $_POST['email'];
$správa= $_POST['správa'];
$to = "banas.michal@icloud.com";
$subject = "skuska";
$txt ="Meno = ". $meno . "\r\n  Správa =" . $správa;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
    mail($to,$subject,$txt,$headers);
//redirect
header("Location:thankyou.html");
?>