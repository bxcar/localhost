<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "chameleon";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
$lang = $_COOKIE['_localhost_set_language_mobile'];

$sql1 = "SELECT text FROM info WHERE page='card_1' AND lang='$lang'";
$sql2 = "SELECT text FROM info WHERE page='card_2' AND lang='$lang'";
$sql3 = "SELECT text FROM info WHERE page='card_3' AND lang='$lang'";
$sql4 = "SELECT text FROM info WHERE page='card_4' AND lang='$lang'";
$result1 = mysqli_query($conn, $sql1);
$result2 = mysqli_query($conn, $sql2);
$result3 = mysqli_query($conn, $sql3);
$result4 = mysqli_query($conn, $sql4);

$card_1 = mysqli_fetch_assoc($result1);
$card_2 = mysqli_fetch_assoc($result2);
$card_3 = mysqli_fetch_assoc($result3);
$card_4 = mysqli_fetch_assoc($result4);

?>
<!doctype html>
<html dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>Stencil Component Starter</title>
    <link rel="modulepreload" href="./build/p-5a291771.js">
    <link rel="modulepreload" href="./build/p-xprey2vg.entry.js">
    <script nomodule="" src="./build/swipi-cards.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Nunito:100,400,700&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>* {
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        /*background-color: #424250;*/
        background-color: #254c8e;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        color: white;
        width: 100%;
        text-align: center;
    }

    h2 {
        text-align: center;
    }

    h3 {
        color: indianred;
        padding: 1em 2em;
        border-radius: 40px;
        border: 2px solid indianred;
    }

    rg-swipi-cards {
        width: 350px;
        /*height: 300px;*/
        height: 420px;
        align-items: center;
        justify-content: center;
    }

    rg-swipi-card,
    .last-swipe-card {
        width: 100%;
    }

    .last-swipe-card {
        top: 0em;
        position: absolute;
    }

    rg-swipi-card h2,
    .last-swipe-card h2 {
        line-height: 1em;
        margin: 0;
        font-size: 1em;
    }

    rg-swipi-card img,
    .last-swipe-card img {
        border-radius: 20px;
        margin: 1em 0;
    }

    rg-swipi-card p,
    .last-swipe-card p {
        margin: 0;
    }

    rg-swipi-card.customized h2,
    .last-swipe-card.customized h2 {
        color: #de7878;
    }

    .right-arrow {
        text-align: right;
    }

    .right-arrow img {
        width: 40px;
        margin: 0;
    }

    .card-text {
        font-weight: bold;
        font-size: 22px;
        color: #000;
        font-style: italic;
    }

    .last-buttons {
        display: flex;
        align-content: center;
        justify-content: space-between;
        padding-bottom: 15px;
    }

    .last-buttons button {
        color: #22B14C;
        padding: 1em 2em;
        border-radius: 40px;
        border: 2px solid #22B14C;
        outline: none;
        background: none;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }

    .last-buttons button.last-button_later {
        color: #424250;
        border: 2px solid #424250;
    }

    .last-swipe-card .card {
        cursor: grab;

        display: flex;
        flex-direction: column;
        color: rgb(94, 102, 128);
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px;
        font-family: Nunito, sans-serif;
        position: relative;
        cursor: grab;
        padding: 2em;
        padding-left: 1em;
        padding-right: 1em;
        padding-bottom: 0;
        border-radius: 20px;
        border-bottom: 4px solid transparent;
        height: 420px;
        justify-content: space-between;
    }

    rg-swipi-cards {
        display: none;
    }</style>
</head>
<body> <!--  <h1>Swipi Card Stack!</h1>-->
<rg-swipi-cards stack-offset-y="0.3">
    <?php
    if(!isset($_GET['card_last'])) { ?>
    <rg-swipi-card left-color="#BB377D" right-color="#C9FFBF"><h2>1 из 4</h2>
        <p class="card-text"><?= $card_1['text'] ?></p>
        <div class="right-arrow"><img src="./img/right-arrow.png"></div>
    </rg-swipi-card>
    <rg-swipi-card left-color="#BB377D" right-color="#C9FFBF"><h2>2 из 4</h2>
        <p class="card-text"><?= $card_2['text'] ?></p>
        <div class="right-arrow"><img src="./img/right-arrow.png"></div>
    </rg-swipi-card>
    <rg-swipi-card left-color="#BB377D" right-color="#C9FFBF"><h2>3 из 4</h2>
        <p class="card-text"><?= $card_3['text'] ?></p>
        <div class="right-arrow"><img src="./img/right-arrow.png"></div>
    </rg-swipi-card>
    <?php  }
    ?>
    <div class="last-swipe-card" left-color="#BB377D" right-color="#C9FFBF">
        <div class="card" style="box-sizing: content-box;"><h2>4 из 4</h2>
            <p class="card-text"><?= $card_4['text'] ?></p>
            <div class="last-buttons">
                <button onclick="window.location.href = '/m'" class="last-button_later">Позже</button>
                <button onclick="window.location.href = '/test'" class="last-button_start">Начать</button>
            </div>
        </div>
    </div> <!--<rg-swipi-card left-color="red" right-color="green">
      <h2>Hello i'm another card</h2>
      <img src="https://api.adorable.io/avatars/280/imacardtoo.png"/>
      <p>Notice my swipe colors changed</p>
    </rg-swipi-card>
    <rg-swipi-card left-color="blue" right-color="violet" class="customized">
      <h2>Hello i'm a customized card</h2>
      <img src="https://api.adorable.io/avatars/280/imacustomizedcard.png"/>
      <p>I can be whatever you want</p>
    </rg-swipi-card>
    <rg-swipi-card left-color="blue" right-color="violet" class="customEventCard">
      <h2>Hello i'm a custom event card</h2>
      <img src="https://api.adorable.io/avatars/280/imacustomeventcard.png"/>
      <p>I say ouch! when you swipe me right</p>
    </rg-swipi-card>--> <!--    <h3>Stack Finished</h3>--> </rg-swipi-cards>
<script>const component = document.querySelector('rg-swipi-cards');
component.addEventListener('scSwipeRight', (x) => console.log(x))
component.addEventListener('scSwipeLeft', (x) => console.log(x))

const customEventCard = document.querySelector('.customEventCard')
// customEventCard.addEventListener('scSwipeRight', (x) => alert('ouch!'))

window.onload = function () {
    document.getElementsByTagName("rg-swipi-cards")[0].style.display = "block";
}</script>
<script type="module" data-resources-url="/cards/build/" data-stencil-namespace="swipi-cards">import {
    p as r,
    b as t
} from "/cards/build/p-5a291771.js";

r().then(r => t([["p-xprey2vg", [[1, "rg-swipi-card", {
    rightColor: [1, "right-color"],
    leftColor: [1, "left-color"],
    cardState: [32]
}], [1, "rg-swipi-cards", {stackOffsetY: [2, "stack-offset-y"], currentCard: [32], children: [32]}]]]], r));</script>
</body>
</html>
