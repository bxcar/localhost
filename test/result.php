<?
//начало проверки, чтобы в ключе запроса были только 1,10,cheb  - защита от взлома
$allow = array("1", "10", "cheb");
foreach($_GET as $param => $value){
   if(!in_array($value, $allow)){
        header("HTTP/1.0 404 Not Found");
        exit;
    } 
}
//конец проверки

//начало подсчета типа и дуала
if ($_GET && isset($_GET['tip']) && $_GET['tip'] === "cheb") {
$rrr=$_GET['r1']+$_GET['r2']+$_GET['r3']+$_GET['r4']+$_GET['r5']+$_GET['r6']+$_GET['r7'];
$lll=$_GET['l1']+$_GET['l2']+$_GET['l3']+$_GET['l4']+$_GET['l5']+$_GET['l6']+$_GET['l7'];
$sss=$_GET['s1']+$_GET['s2']+$_GET['s3']+$_GET['s4']+$_GET['s5']+$_GET['s6']+$_GET['s7'];
$eee=$_GET['e1']+$_GET['e2']+$_GET['e3']+$_GET['e4']+$_GET['e5']+$_GET['e6']+$_GET['e7'];
if (($rrr > "40") && ($lll > "40") && ($sss > "40") && ($eee > "40")){
$tip="lse";
$dual="eii";
}
if (($rrr > "40") && ($lll > "40") && ($sss > "40") && ($eee < "40")){
$tip="lsi";
$dual="eie";
}
if (($rrr > "40") && ($lll > "40") && ($sss < "40") && ($eee > "40")){
$tip="lie";
$dual="esi";
}
if (($rrr > "40") && ($lll > "40") && ($sss < "40") && ($eee < "40")){
$tip="lii";
$dual="ese";
}
if (($rrr > "40") && ($lll < "40") && ($sss > "40") && ($eee > "40")){
$tip="ese";
$dual="lii";
}
if (($rrr > "40") && ($lll < "40") && ($sss > "40") && ($eee < "40")){
$tip="esi";
$dual="lie";
}
if (($rrr > "40") && ($lll < "40") && ($sss < "40") && ($eee > "40")){
$tip="eie";
$dual="lsi";
}
if (($rrr > "40") && ($lll < "40") && ($sss < "40") && ($eee < "40")){
$tip="eii";
$dual="lse";
}
if (($rrr < "40") && ($lll > "40") && ($sss > "40") && ($eee > "40")){
$tip="sle";
$dual="iei";
}
if (($rrr < "40") && ($lll > "40") && ($sss > "40") && ($eee < "40")){
$tip="sli";
$dual="iee";
}
if (($rrr < "40") && ($lll > "40") && ($sss < "40") && ($eee > "40")){
$tip="ile";
$dual="sei";
}
if (($rrr < "40") && ($lll > "40") && ($sss < "40") && ($eee < "40")){
$tip="ili";
$dual="see";
}
if (($rrr < "40") && ($lll < "40") && ($sss > "40") && ($eee > "40")){
$tip="see";
$dual="ili";
}
if (($rrr < "40") && ($lll < "40") && ($sss > "40") && ($eee < "40")){
$tip="sei";
$dual="ile";
}
if (($rrr < "40") && ($lll < "40") && ($sss < "40") && ($eee > "40")){
$tip="iee";
$dual="sli";
}
if (($rrr < "40") && ($lll < "40") && ($sss < "40") && ($eee < "40")){
$tip="iei";
$dual="sle";
}

if ($_GET && isset($_GET['pol1']) && $_GET['pol1'] === "10") {
// Если Мужчина то к типу прибавляем m, а к дуалу w
$tip = 'm'.$tip;
$dual = 'w'.$dual;
}
elseif 	($_GET && isset($_GET['pol1']) && $_GET['pol1'] === "1") {
// Если Женщина то к url типа прибавляем w, а к дуалу m
$tip = 'w'.$tip;
$dual = 'm'.$dual;
}
//перенаправляем на полученный url тип+дуал.html в той же папке где и скрипт result.php
$host  = $_SERVER['HTTP_HOST'];
$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
$extra = $tip.$dual.'.html';
header("Location: http://$host$uri/$extra");
exit;
}
//конец подсчета типа и дуала
?>