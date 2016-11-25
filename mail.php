<?php

$recepient = "komoff.nice@yandex.ru";
$sitename = "Education";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$city = trim($_POST["city"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $city";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
