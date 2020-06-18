<?php
/* (C) Websplosion LTD., 2001-2014

IMPORTANT: This is a commercial software product
and any kind of using it must agree to the Websplosion's license agreement.
It can be found at http://www.chameleonsocial.com/license.doc

This notice may not be removed from the source code. */

$area = "login";
include("./_include/core/main_start.php");
require_once("./_include/current/events/tools.php");

function do_action()
{
	global $g_user;

	$event_id = intval(get_param('event_id'));

	if($event_id){
        CEventsTools::delete_event($event_id);
	}
    $ajax = get_param_int('ajax');
    if ($ajax) {
        die(getResponseDataAjaxByAuth(true));
    } else {
        redirect('events_calendar.php');
    }
}

do_action();

include("./_include/core/main_close.php");