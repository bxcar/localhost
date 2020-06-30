<?php

/* (C) Websplosion LTD., 2001-2014

IMPORTANT: This is a commercial software product
and any kind of using it must agree to the Websplosion's license agreement.
It can be found at http://www.chameleonsocial.com/license.doc

This notice may not be removed from the source code. */

include('./_include/core/pony_start.php');

$servername = "localhost";
$username = "root";
$password = "";
$db = "chameleon";

$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$lang = $_COOKIE['_localhost_set_language_mobile'];

$sql = '';

$page = get_param('page');
if ($page == 'priv_policy') {
    global $sql;
    $sql = "SELECT title FROM info WHERE page='priv_policy' AND lang='$lang'";
//    $l[$p]['page_title'] = l('privacy_policy');
} elseif ($page == 'term_cond') {
    global $sql;
    $sql = "SELECT title FROM info WHERE page='term_cond' AND lang='$lang'";
//    $l[$p]['page_title'] = l('terms');
} elseif ($page == 'important_information') {
    global $sql;
    $sql = "SELECT title FROM info WHERE page='important_information' AND lang='$lang'";
//    $l[$p]['page_title'] = l('Важная информация');
} elseif ($page == 'patents') {
    global $sql;
    $sql = "SELECT title FROM info WHERE page='patents' AND lang='$lang'";
//    $l[$p]['page_title'] = l('Патенты');
}

$result = mysqli_query($conn, $sql);
$title = mysqli_fetch_assoc($result);
$l[$p]['page_title'] = $title['title'];

$g['to_head'][] = '<link rel="stylesheet" href="'.$g['tmpl']['url_tmpl_mobile'].'css/main.css" type="text/css" media="all"/>';
$page = new PageInfo('', $g['tmpl']['dir_tmpl_mobile'] . 'info.html');
$page->parseBanner = true;

$header = new CHeader('header', $g['tmpl']['dir_tmpl_mobile'] . "_header.html");
$page->add($header);
$footer = new CFooter('footer', $g['tmpl']['dir_tmpl_mobile'] . "_footer.html");
$page->add($footer);

loadPageContentAjax($page);

include('./_include/core/main_close.php');
