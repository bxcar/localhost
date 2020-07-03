<?php
if(!isset($_COOKIE['test_done'])) {
    setcookie(
        "test_done",
        "true",
        time() + (10 * 365 * 24 * 60 * 60),
        '/'
    );
}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Результаты теста</title>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
    <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>


    <style>
        html, body {
            margin: 0;
            padding: 0;
        }
        body {
            background: url(/test/img/test_bg.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }

        .container {
            width: 100%;
            padding-left: 5%;
            padding-right: 5%;
            box-sizing: border-box;
        }

        .test-result-title {
            text-align: center;
            font: 46px Tahoma, Arial, Verdana, sans-serif;
        }

        .test-result-description {
            text-align: justify;
            font: 22px Tahoma, Arial, Verdana, sans-serif;
            margin-bottom: 50px;
        }

        .back-to-profile {
            font: 22px Tahoma, Arial, Verdana, sans-serif;
            /*color: #279046;*/
            color: #000;
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        .back-to-profile img {
            margin-right: 10px;
            width:25px;
        }

        .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .popup-buttons {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        .popup-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 50px;
            background: #279046;
            border-radius: 50px;
            color: #fff;
            text-decoration: none;
            font: 18px Tahoma, Arial, Verdana, sans-serif;
        }

        #hidden-content p {
            text-align: center;
            font: 22px Tahoma, Arial, Verdana, sans-serif;
        }
    </style>
</head>
<body>
<div class="container">
    <h1 class="test-result-title">Ваш психологический портрет</h1>
    <p class="test-result-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur distinctio dolore doloremque ducimus eius eligendi, eum explicabo facere incidunt inventore iusto mollitia necessitatibus nesciunt, nisi nobis odit officia pariatur quas, quidem quod repellendus reprehenderit sequi tempora temporibus unde vel. Dolorem id illum ipsam molestias nostrum quaerat, quam sed? Fuga illo laudantium quidem repellendus vitae. A ad dolores, error est expedita ipsa maxime, placeat possimus quo repellat soluta unde veritatis voluptatem? A deleniti harum ipsam laboriosam nostrum nulla quis repudiandae soluta sunt voluptas. Alias, culpa dolore et ex, explicabo, facere ipsum itaque nemo possimus quidem sint soluta vitae. Labore, vero!</p>
    <div class="bottom">
        <a class="back-to-profile" href="/m/profile_view.php"><img src="/test/img/left-arrow.png">Вернуться в профиль</a>
        <a class="back-to-profile" data-fancybox data-src="#hidden-content" href="javascript:;">Пройти повторно</a>
    </div>
</div>

<div style="display: none;" id="hidden-content">
    <p>Вы уже проходили тест.<br>Уверены, что хотите пройти еще раз?</p>
    <div class="popup-buttons">
        <a class="popup-button" href="/cards?card_last=true">Да</a>
        <a class="popup-button" href="#" onclick="$.fancybox.close();">Нет</a>
    </div>
</div>
</body>
</html>
