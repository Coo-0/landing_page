<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can perform further validation and processing here

    // Assuming you want to save the data to a text file
    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";
    file_put_contents("contact_data.txt", $data, FILE_APPEND);
}
?>
