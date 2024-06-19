<?php

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "my1db";


$con = mysqli_connect($servername, $username, $password, $database);

if(!$con)
{
    echo "not connected";
}

$name = $_POST['name'];
$email =$_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO `info`(`id`, `name`, `email`, `message`) VALUES ('[value-1]','$name','$email','$message')";

$result = mysqli_query($con, $sql);

if($result)
{
    echo "data submitted";
}
else
{
    echo "not sumbitted";
}

?>
