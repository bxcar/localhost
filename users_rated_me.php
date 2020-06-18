<?php
/* (C) Websplosion LTD., 2001-2014

IMPORTANT: This is a commercial software product
and any kind of using it must agree to the Websplosion's license agreement.
It can be found at http://www.chameleonsocial.com/license.doc

This notice may not be removed from the source code. */

$area = 'login';
include('./_include/core/main_start.php');

if (!Common::isOptionActive('photo_rating_enabled')) {
    Common::toHomePage();
}

CProfilePhoto::setNotNewUsersRatedMePhoto();

$fromAddCustom = '';
$isAjaxRequest = get_param('ajax');
$id = get_param('id');
if ($isAjaxRequest && $id) {
    $fromAddCustom = ' AND pr.id < ' . to_sql($id, 'Number');
}

$from_add = 'LEFT JOIN user_block_list AS ubl1 ON (ubl1.user_to = u.user_id
    AND ubl1.user_from = ' . to_sql($g_user['user_id'], 'Number') . ')
LEFT JOIN user_block_list AS ubl2 ON (ubl2.user_from = u.user_id
    AND ubl2.user_to = ' . to_sql($g_user['user_id'], 'Number') . ')
JOIN photo_rate AS pr ON u.user_id=pr.user_id AND pr.visible=1
    AND pr.photo_user_id = ' . to_sql($g_user['user_id'], 'Number') . $fromAddCustom;

$where = 'ubl1.id IS NULL AND ubl2.id IS NULL AND u.user_id != ' . to_sql($g_user['user_id'], 'Number');
$order = 'pr.id DESC';

$page = Users_List::show($where, $order, $from_add, 'users_list_base.html');

include("./_include/core/main_close.php");