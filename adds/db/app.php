<?php
if(isset($_POST['submit'])){
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $phone = trim($_POST['phone']);

        if(!empty($name) && !empty($email) && !empty($phone)){
            if(FILTER_VAR($email, FILTER_VALIDATE_EMAIL)){
            $from = "$email";
            $to = "roska.butkus@gmail.com";
            $subject = "nauja zinute";
            $autorius = 'Nuo: ' . $name . $email;
            $zinute = $phone;
            // mail($to, $subject, $autorius, $zinute, $from);
            // echo "<script>alert('message sent!')</script>";
            }    
        }

        include('db.php');}
