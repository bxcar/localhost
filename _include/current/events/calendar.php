<?php
/* (C) Websplosion LTD., 2001-2014

IMPORTANT: This is a commercial software product
and any kind of using it must agree to the Websplosion's license agreement.
It can be found at http://www.chameleonsocial.com/license.doc

This notice may not be removed from the source code. */

require_once('tools.php');

class CEventsCalendar extends CHtmlBlock
{
	var $m_need_container = true;
        var $length_title_one = 40; // Длинна названия если событие одно
        var $length_title_more = 20; // Длинна названия если событий несколько

	function parseBlock(&$html)
	{
		global $g_user;
		global $l;

        $isCalendarSocial = Common::isOptionActiveTemplate('event_social_enabled');
        $day_time = intval(get_param('day_time'));
        $eventDayLoadMore = get_param('event_day_load_more');

        if ($day_time){
            $this->parse_day($html, $day_time);
        } elseif ($eventDayLoadMore){
            $this->parse_day($html, strtotime($eventDayLoadMore));
        } else {
            $calendar_month = intval(get_param('calendar_month', date("n")));
			$calendar_year = intval(get_param('calendar_year', date("Y")));

            $calendarDate = get_param('date');
            if ($calendarDate) {
                $d = DateTime::createFromFormat('Y-m-d', $calendarDate);
                if ($d && $d->format('Y-m-d') == $calendarDate) {
                    $calendar_day = intval(date('j', strtotime($calendarDate)));
                    $calendar_month = intval(date('n', strtotime($calendarDate)));
                    $calendar_year = intval(date('Y', strtotime($calendarDate)));

                    $html->setvar('calendar_init_day', $calendar_day);
                    $html->setvar('calendar_init_date', $calendarDate);
                }
            }

			$need_container = get_param('need_container', $this->m_need_container);

			if($calendar_month > 12)
			{
	            $calendar_month = $calendar_month - 12;
	            $calendar_year++;
			}
	        if($calendar_month < 1)
	        {
	            $calendar_month = $calendar_month + 12;
	            $calendar_year--;
	        }

			$html->setvar('calendar_month', $calendar_month);
			$html->setvar('calendar_month_title', l(date("F", strtotime('2010-'.$calendar_month.'-01'))));
			$html->setvar('calendar_year', $calendar_year);

			if($need_container)
			{
				$html->parse('container_header');
				$html->parse('container_footer');
			}
            $html->parse('table_header');
            $html->parse('table_footer');

			$day_time = strtotime($calendar_year.'-'.$calendar_month.'-01');

			while(intval(date("n", $day_time)) == $calendar_month)
			{
				$this->parse_day($html, $day_time);

	            $day_time += 24 * 60 * 60;
			};
		}

        if ($isCalendarSocial) {
            if ($eventDayLoadMore) {
                $html->parse('add_events', false);
            } else {
                $html->parse('set_events', false);
            }
        }

		parent::parseBlock($html);
	}

	function parse_day(&$html, $day_time)
	{

        $optionTmplName = Common::getTmplName();
        $isCalendarSocial = Common::isOptionActiveTemplate('event_social_enabled');
        $eventDayLoadMore = get_param('event_day_load_more');
        $guid = guid();

        $html->clean('day_action');
        $html->clean('event');
        $html->clean('pager');
        $calendar_day = Common::dateFormat($day_time,'calendar_day',false);

        $today = date("Ymd", $day_time) == date("Ymd");

        $html->setvar('calendar_day', $calendar_day);
        $html->setvar('day_time', $day_time);
        $html->setvar('calendar_day_title', l(date("D", $day_time)));

        if ($isCalendarSocial) {
            $vars = array(
                'datetime_day' => date("j", $day_time)
            );
            $html->assign('event', $vars);
        }

        $html->setvar('calendar_datetime', Common::dateFormat($day_time,'calendar_datetime', false, false, true));


        $sql_base = CEventsTools::events_by_calendar_day($day_time);
        #print_r($sql_base);
        $n_results = CEventsTools::count_from_sql_base($sql_base);

        if ($n_results == 1) {
            $html->setvar('empty', 'one_');
        } elseif ($n_results > 1) {
            $html->setvar('empty', 'full_');
        } else {
            $html->setvar('empty', 'empty_');
        }

        if ($n_results != 1) {
            $html->setvar('calendar_day_value', Common::dateFormat($day_time,'calendar_day_value', false, false, true));
            $html->parse('set_day');
        }

        if(date("N", $day_time) > 5) {
            if($today) {
                $html->parse('holiday_today', false);
                $html->clean('holiday_not_today');
            } else {
                $html->parse('holiday_not_today', false);
                $html->clean('holiday_today');
            }

            $html->parse('holiday', false);
            $html->clean('not_holiday');
        } else {
            if($today) {
                $html->parse('today', false);
                $html->clean('not_today');
            } else {
                $html->parse('not_today', false);
                $html->clean('today');
            }

            $html->parse('not_holiday', false);
            $html->clean('holiday');
        }

        $n_results_per_page = 2;
        $nResultsPerPageTemplate = Common::getOption('number_calendar_item', "{$optionTmplName}_events_settings");
        if ($nResultsPerPageTemplate !== null && $nResultsPerPageTemplate) {
            $n_results_per_page = $nResultsPerPageTemplate;
        }

        if ($n_results > $n_results_per_page) {
            $html->setvar('events_num', $n_results - $n_results_per_page);
            $html->parse('block_events_num', false);
        } else {
            $html->setvar('events_num', 0);
            $html->clean('block_events_num');
        }

        if($n_results) {

            $page = intval(get_param('event_calendar_day_page', 1));
            $n_pages = ceil($n_results / $n_results_per_page);
            $page = max(1, min($n_pages, $page));

            $html->setvar('page', $page);

            $events = CEventsTools::retrieve_from_sql_base($sql_base, $n_results_per_page, ($page - 1) * $n_results_per_page);

            foreach($events as $event) {

                    /* Edge */
                    if ($html->varExists('event_id')) {
                        $html->setvar('event_id', $event['event_id']);
                    }

                    $userInfo = User::getInfoBasic($event['user_id']);
                    if ($html->varExists('event_user_name_js') && Common::isOptionActive('calendar_item_show_name_user', "{$optionTmplName}_events_settings")) {
                        $html->setvar('event_user_name_js', toJs($userInfo['name']));
                    }

                    if ($html->varExists('event_user_photo') && Common::isOptionActive('calendar_item_show_photo_user', "{$optionTmplName}_events_settings")) {
                        $html->setvar('event_user_photo', User::getPhotoDefault($event['user_id'], 'm'));

                        $html->setvar('event_user_is_online', intval(User::isOnline($event['user_id'], $userInfo)));
                    }

                    if ($html->varExists('event_user_url')){
                        $html->setvar('event_user_url', User::url($event['user_id'], $userInfo));
                    }

                    if ($html->varExists('event_user_uid')) {
                        $html->setvar('event_user_uid', $event['user_id']);
                    }
                    if ($html->varExists('event_edit_url')) {
                        $html->setvar('event_edit_url', Common::pageUrl('edit_task', 0, $event['event_id']));
                    }

                    if ($html->varExists('event_title_js')) {
                        $html->setvar('event_title_js', toJs($event['event_title']));
                    }
                    if ($html->varExists('event_description_js') && Common::isOptionActive('calendar_item_show_description', "{$optionTmplName}_events_settings")) {
                        $html->setvar('event_description_js', toJs($event['event_description']));
                    }
                    if ($html->blockExists('my_event_class')) {
                        $html->subcond($event['user_id'] == $guid, 'my_event_class', 'other_event_class');
                    }
                    /* Edge */

                    if ($n_results == 1) {
                        $html->setvar('calendar_day_value', $event['event_id']);
                        $html->setvar('event_title', strcut(to_html($event['event_title']), $this->length_title_one));
                        $html->parse('set_day');
                    }else{
                        $html->setvar('event_title', strcut(to_html($event['event_title']), $this->length_title_more));
                    }
	                $html->setvar('event_id', $event['event_id']);

	                $html->setvar('event_title_full', to_html($event['event_title']));
                    if(!$event['event_private']) {
                        $html->setvar('event_n_guests', $event['event_n_guests']);
                        $html->parse('guests',false);
                    } else {
                        $html->setblockvar('guests',"");
                    }

                    $isParseTime = true;
                    if ($isCalendarSocial) {
                        $isParseTime = Common::isOptionActive('calendar_item_show_time', "{$optionTmplName}_events_settings");
                    }
                    if ($isParseTime) {
                        $html->setvar('event_time', to_html(Common::dateFormat($event['event_datetime'],'event_time')));
                    }

                    $isParseImage = true;
                    if ($isCalendarSocial) {
                        $isParseImage = false;//Common::isOptionActive('calendar_item_show_image', "{$optionTmplName}_events_settings");
                    }
                    if ($isParseImage) {
                        $random = true;
                        if ($isCalendarSocial) {
                            $random = false;
                        }
                        $images = CEventsTools::event_images($event['event_id'], $random);
                        $html->setvar("image_thumbnail", $images["image_thumbnail"]);
                    }

                    $html->parse('event');
	            }

	            if($n_pages > 1)
	            {
		            if($page > 1)
		            {
		                $html->setvar('page_n', $page-1);
		                $html->parse('pager_prev');
		            }
		            else
		            {
		                $html->parse('pager_prev_inactive');
		            }

		            if($page < $n_pages)
		            {
		                $html->setvar('page_n', $page+1);
		                $html->parse('pager_next');
		            }
		            else
		            {
		                $html->parse('pager_next_inactive');
		            }

		            $html->parse('pager');
	            }
            } else {
            	//$html->clean('event');
            }

            if ($isCalendarSocial && !$eventDayLoadMore) {
                $actionTitle = '';
                if (!$n_results) {
                    $actionTitle = toJsL('no_task');
                }
                $html->setvar('event_title_js', $actionTitle);
                $html->setvar('url_create_new_item', Common::pageUrl('create_task', 0, date('Y-m-d', $day_time)));
                $html->parse('day_action', false);
            }
            $html->parse('day');
	}
}

