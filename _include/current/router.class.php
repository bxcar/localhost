<?php

/* (C) Websplosion LTD., 2001-2014

  IMPORTANT: This is a commercial software product
  and any kind of using it must agree to the Websplosion's license agreement.
  It can be found at http://www.chameleonsocial.com/license.doc

  This notice may not be removed from the source code. */

class Router {

    static function getIncludePage($nameSeo = null, $checkEnabledGroup = false){
        global $g;

        if ($nameSeo === null) {
            $nameSeo = get_param('name_seo');
        }

        if (!$nameSeo) {
            return '';
        }

        if ($checkEnabledGroup && get_param_int('group_id') && !Common::isOptionActiveTemplate('groups_social_enabled')) {
            return '';
        }

        $page = '';
        $uid = 0;
        $groupInfo = Groups::getInfoFromNameSeo($nameSeo);

        if ($groupInfo) {//Groups
            $nameSeo = User::getNameSeoFromUid($groupInfo['user_id']);
            if ($nameSeo) {

                Groups::isBan($groupInfo['group_id']);

                $uid = $groupInfo['user_id'];
                $_GET['name_seo'] = $nameSeo;
                $_GET['group_id'] = $groupInfo['group_id'];

                $_GET['view'] = $groupInfo['page'] ? 'group_page' : 'group';
                $_GET['type_group'] = $groupInfo['page'] ? 'page' : 'group';
            }
        } else {//Users
            $uid = User::getUidFromNameSeo($nameSeo);
        }

        if ($uid && $g['router']['page']) {
            $_GET['display'] = 'profile';
            $page = $g['router']['page'];
            if (!$groupInfo && $page === 'groups_social_subscribers') {
                $page = '';
            }
        }

        return $page;
    }

    /* Name SEO */
    static function getUniqueNameSeo($name)	{
        $sql = 'SELECT `name_seo`
				  FROM `groups_social`
                 WHERE `name_seo` LIKE \'' . to_sql($name, 'Plain') . '-%\'' ;
		$allNameSeo = DB::column($sql);

        $sql = 'SELECT `name_seo`
				  FROM `user`
                 WHERE `name_seo` LIKE \'' . to_sql($name, 'Plain') . '-%\'' ;
		$allNameSeoUser = DB::column($sql);

        $allNameSeo = array_merge($allNameSeo, $allNameSeoUser);
        $nameSeo = self::getIndexNameSeo($name, $allNameSeo);
        return $nameSeo;
    }

    static function getIndexNameSeo($name, $allNameSeo)	{
        $i = 0;
        do {
            $i++;
            $nameSeo = "{$name}-{$i}";
        } while(in_array($nameSeo, $allNameSeo) && $i < 1000000);
        return $nameSeo;
    }

    static function prepareNameSeo($name){
        return mb_strtolower(str_replace(array(' ', '?', '*', '|', '>', '<'), '_', $name), 'utf-8');
    }

    static function getNameSeo($name, $id = 0, $type = 'group', $getUnique = true) {
        $name = self::prepareNameSeo($name);
        $sql = 'SELECT `group_id` FROM `groups_social` WHERE `name_seo` = ' . to_sql($name);
        if ($id && $type == 'group') {
            $sql .= ' AND `group_id` != ' . to_sql($id);
        }
        $isNameExists = DB::result($sql, 0, DB_MAX_INDEX);
        if (!$isNameExists) {
            $sql = 'SELECT `user_id` FROM `user` WHERE `name_seo` = ' . to_sql($name);
            if ($id && $type == 'user') {
                $sql .= ' AND `user_id` != ' . to_sql($id);
            }
            $isNameExists = DB::result($sql, 0, DB_MAX_INDEX);
        }
        $nameSeo = '';
        if ($isNameExists) {
            if ($getUnique) {
                $nameSeo = self::getUniqueNameSeo($name);
            }
        } else {
            $nameSeo = $name;
        }
        return $nameSeo;
    }
    /* Name SEO */

}