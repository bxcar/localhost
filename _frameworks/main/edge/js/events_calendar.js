var CEventsCalendar = function(guid, uid) {

    var $this=this;

    this.guid=guid*1;
    this.uid=uid*1;

    this.setData = function(data){
        for (var key in data) {
           $this[key] = data[key];
        }
    }

    this.initEdit = function(calendarData, editEventDate, editEventTime){
        $(function(){
            $this.initEditItem(calendarData, editEventDate, editEventTime)
        })
    }

    this.initEditItem = function(calendarData, editEventDate, editEventTime){

        $this.$blFrmAdd = $('#bl_events_new_frm');

        $this.eventId=$jq('#event_id').val();
        $this.eventPhotoId=$jq('#event_photo_id').val()*1;
        $this.$upPhotoBl=$jq('#event_photo_upload_bl');
        $this.$upPhotoImg=$jq('#event_photo_upload_img');
        $this.$upPhotoBtn=$('#event_photo_upload');
        $this.$upPhotoBtnDelete=$('#event_photo_upload_delete');

        $this.$upPhotoBtnDelete.prop('disabled',!$this.eventPhotoId)

        $this.upPhotoImgId=0;

        $this.$title=$jq('#event_title');
        $this.$description=$jq('#event_description').autosize({isSetScrollHeight:false,callback:function(){}});

        $this.$showListFriend=$jq('#event_friends_show, #event_to_user').click(function(){
            $this.$showListFriendBl.stop().slideToggle(400);
        })
        $this.$showListFriendBl=$jq('#event_friends_list');


        $this.$date=$('#event_date').datetimepicker({

            lang: 'custom',
            i18n:{
                custom:calendarData
            },
            timepicker: false,
            format: editEventDate,
            minDate: '2000/01/01',
            // showAnim: 'slideDown',
            closeOnDateSelect: true,
            sel: $('#event_date').closest('.field'),
            fnAnimateIn: 'fadeIn',
            fnAnimateOut: 'fadeOut',
            fnAnimateDelay: 300
        })

        $this.$time=$('#event_time').datetimepicker({
            datepicker: false,
            format: editEventTime,
            step: 30,
            sel: $('#event_time').closest('.field'),
            fnAnimateIn: 'fadeIn',
            fnAnimateOut: 'fadeOut',
            fnAnimateDelay: 300
        })

        $this.$access=$jq('#event_access');

        var isSubmit=false;
        function setDisabledSave() {
            var disabled=false,isHideError=false;
            $jq('.field_required', $this.$blFrmAdd).each(function(){
                var val=trim(this.value)
                var isError=!val,msgError=l('required_field');
                if(isError){
                    if(isSubmit)showError($(this), msgError, isHideError, isHideError);
                    isHideError=true;
                    disabled=true;
                } else {
                    hideError($(this));
                }
            })

            disabled = disabled||$this.isProcessUpload;
            if (isSubmit) {
                //$this.$btnAdd.prop('disabled', disabled);
                $this.$btnAdd.removeClass('disabled');
            } else {
                $this.$btnAdd[disabled?'addClass':'removeClass']('disabled');
            }

            return disabled;
        }


        $('.field_required', $this.$blFrmAdd).on('change propertychange input', setDisabledSave)
        .on('focus',function(){focusError($(this))})
        .on('blur',function(){blurError($(this))});

        $this.$btnAdd=$('#event_add').click(function(){
            isSubmit=true;
            if(setDisabledSave())return false;

            var fnDisabledControls=function(disabled){
                $('input, textarea, select, button', $this.$blFrmAdd).prop('disabled', disabled);
                if (disabled) {
                    addChildrenLoader($this.$btnAdd);
                } else {
                    removeChildrenLoader($this.$btnAdd);
                }
            }

            fnDisabledControls(true);

            var data={
                ajax: 1,
                event_id:$this.eventId,
                event_photo_id:$this.eventPhotoId,
                event_private:1,
                event_title:trim($this.$title.val()),
                event_description:trim($this.$description.val()),
                event_date:trim($this.$date.val()),
                event_time:$this.$time.val(),
                event_access:$this.$access.val(),
                event_photo_id:$this.upPhotoImgId
            };

            $.post('events_event_edit.php?cmd=save',data,function(res){
                var data=checkDataAjax(res), resError=true;
                if(data){
                    resError=false;
                    if (data.redirect) {
                        redirectUrl(data.redirect);
                    } else {
                        resError=true;
                    }
                }
                if (resError) {
                    alertServerError();
                    fnDisabledControls(false);
                }
            })
        })

    }

    this.isProcessUpload=false;
    this.clickUploadPhoto = function($file) {
        $file.next('input[type=reset]').click();
    }

    this.changeUploadPhoto = function($file) {
        $file.parent('form').find('input[type=submit]').click();
    }

    this.submitUploadPhoto = function($frm) {
        $this.$btnAdd.prop('disabled', true);
        var file = $frm.find('input[type=file]'),
            fileName = file.attr('name'),
            url = url_ajax +
                  '?cmd=upload_temp_photo_event',
            formData = new FormData(),
            error = '',
            acceptTypes='image/jpeg,image/png,image/gif';
        $.each(file[0].files, function(i, file){
            var tpp = file.type;
            if (acceptTypes.indexOf(tpp) === -1) {
                error = l('accept_file_types');
                return false;
            } else if (file.size > (clProfilePhoto.maxphotoFileSize*1024*1024)) {
                error = clProfilePhoto.maxphotoFileSizeLimit;
                return false;
            }
            formData.append(fileName, file);
        });

        if (error) {
            alertCustom(error);
            return false;
        }

        $this.$upPhotoBtnDelete.prop('disabled',true);
        addChildrenLoader($this.$upPhotoBtn.prop('disabled',true));
        $this.isProcessUpload=true;

        var fnRes=function(){
            removeChildrenLoader($this.$upPhotoBtn.prop('disabled',false));
            $this.isProcessUpload=false;
        }

        //return false;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if(xhr.status == 200) {
                    var data=xhr.responseText,
                        res=checkDataAjax(data);
                    if (typeof res=='object') {

                        if (res.error) {
                            alertCustom(res.error);
                            fnRes();
                        } else {
                            $this.upPhotoImgId=res.id;
                            var url=urlFiles+res.image;
                            img=new Image();
                            img.onload = function(){
                                $this.$upPhotoImg[0].src=url;
                                $this.$upPhotoBtnDelete.prop('disabled',false);
                                fnRes();
                                $this.$upPhotoBtn.find('.btn_title').text(l('use_another'));
                            }
                            img.src=url;
                        }
                    }else{
                        alertServerError(true);
                        fnRes();
                    }
                    $this.$btnAdd.prop('disabled', false);
                }
            }
        };
        xhr.send(formData);
        return false;
    }

    this.deleteUploadPhoto = function() {
        if($this.isProcessUpload)return;

        $this.$upPhotoImg[0].src=url_tmpl_images+'event_clock_b.png';
        $this.upPhotoImgId=0;
        $this.$upPhotoBtn.find('.btn_title').text(l('choose_an_image'));
        $this.eventPhotoId=0;
        $upPhotoBtnDelete.prop('disabled',true);
    }

    this.getHtmlEventItem=function(eventId, userName, userUrl, userPhoto, userOnline, title, description, time, eventsNum, urlCreateItem, uidEvent, eventEditUrl){
        eventsNum *=1;
        urlCreateItem=urlCreateItem||'';
        title=title||'';
        uidEvent=uidEvent||0;
        var html='';
        if (urlCreateItem) {
            if (title) {
                html ='<span class="event_no_item">'+title+'</span>';
            }
            if (eventsNum) {
                var numberMoreEvent=l('show_more_events').replace('{number}',eventsNum);
                html +='<div class="event_num_bl">'+
                        '<span class="event_num" data-page="1" data-number="'+eventsNum+'" onclick="clEventsCalendar.loadMoreEventsDay($(this))">'+
                            '<span class="icon_fa"><i class="fa fa-angle-double-down" aria-hidden="true"></i></span>'+
                            '<span class="event_num_title">'+numberMoreEvent+'</span>'+
                        '</span>'+
                        '</div>';
            }
            html +='<button onclick="redirectUrlLoader($(this),\''+urlCreateItem+'\')" class="btn btn-block btn_add_page btn-success">'+
                        '<span class="icon_fa" data-cl-loader="header_menu_loader_more"></span>'+
                        '<span><span class="fa fa-plus"></span> '+l('add_new_task')+'</span>'+
                   '</button>';
            return html;
        }

        if(userPhoto||userName||time){
            html +='<span class="event_info_bl">';
            if (userPhoto) {
                var online='';
                if (userOnline*1) {
                    online='<div class="event_user_online"></div>';
                }
                html +='<div class="event_user_photo">'+
                            '<a href="'+userUrl+'" onclick="clEventsCalendar.goToProfileFromPhoto($(this)); return false;" class="pic" style="background-image:url('+urlFiles+userPhoto+');"></a>'+
                       online+
                       '</div>';
            }

            html +='<span class="event_info">';
            if (userName) {
                html +='<span class="event_user_name"><a href="'+userUrl+'">'+userName+'</a></span>';
            }

            if (time) {
                html +='<span class="event_time">'+time+'</span>';
            }

            var menuEvent='<span class="event_more_menu" data-toggle="collapse" data-target="#task_more_menu_'+eventId+'" aria-expanded="false">'+
                        '<span class="icon_chevron_down">'+
                            '<svg viewBox="0 0 48 48"><path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/></svg>'+
                        '</span>'+
                        '<ul id="task_more_menu_'+eventId+'" class="more_menu_collapse more_menu_right1 collapse">'+
                            '<li>'+
                                '<a href="#" onclick="redirectUrlLoader($(this),\''+eventEditUrl+'\'); return false;">'+
                                    '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                                    '<span>'+l('edit')+'</span>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#" onclick="clEventsCalendar.deleteEvent($(this),\''+eventId+'\'); return false;">'+
                                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                                    '<span>'+l('delete')+'</span>'+
                                '</a>'+
                            '</li>'+
                        '</ul>'+
                    '</span>';

            if($this.guid!=uidEvent){
                menuEvent='';
            }

            html +=menuEvent+'</span>';
            html +='</span>';
        }



        html +='<span class="event_title">'+title+'</span>';

        if (description) {
            html +='<span class="event_description">'+
                        '<span class="event_description_content">'+description+'</span>'+
                        '<span class="event_description_shadow"></span>'+
                    '</span>'+
                    '<span class="event_description_more down" onclick="clEventsCalendar.showEventDayDesc($(this));">'+
                        '<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>'+
                        '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>'+
                    '</span>';
        }

        return html;
    }

    this.eventsLoad = function(next,callBack) {
        next=next||false;
        var month=this.selectMonth - 1, year=this.selectYear;
        if(next){
            month=this.selectMonth + 1, year=this.selectYear;
        }

        $('.event_loader').addChildrenLoader();
        $.post(urlMain+'events_calendar_ajax.php?upload_page_content_ajax=1&calendar_month=' + month + '&calendar_year=' + year,{},function(res){
            var data = checkDataAjax(res);
            if(data){
                var $script=$(data).filter('script');
                if($script[0]){
                    $jq('#events_calendar_data').append($script);
                    month=''+month;
                    if(month.length==1)month='0'+month;
                    $this.replaceUrl(year+'-'+month+'-01');
                    if (typeof callBack=='function') {
                        callBack();
                    }
                } else {
                    alertServerError(true)
                }
            } else {
                alertServerError(true)
            }
            $('.event_loader').removeChildrenLoader();
        })

        return false;
    }

    this.replaceUrl = function(date){
        var pageUrl=$this.urlPage;
        if(~pageUrl.indexOf('php')){
            pageUrl+='?date='+date;
        }else{
            pageUrl+='/'+date;
        }
        replaceUrl(pageUrl);
    }

    this.event_delete={};
    this.deleteEvent = function($icon, eventId){
        if(this.event_delete[eventId])return;
        this.event_delete[eventId]=1;
        confirmCustom(l('this_action_can_not_be_undone'),function(){
            $icon.addChildrenLoader();
            $.post(urlMain+'events_event_delete.php?ajax=1',{event_id:eventId},function(res){
                var data = checkDataAjax(res);
                if(data){
                    $icon.closest('.event').slideUp(200,function(){
                        $(this).remove();
                    });
                } else {
                    alertServerError(true);
                    this.event_delete[eventId]=0;
                }
                $icon.removeChildrenLoader();
            })
        })
    }

    this.event_load_day={};
    this.event_load_day_page={};
    this.loadMoreEventsDay = function($el){
        if($el.is('.loaded'))return;

        var page=$el.data('page')+1,
            date=$el.closest('.details').data('current_day');
        if(!date){
            return;
        }

        $el.addClass('loaded');
        addChildrenLoader($el);

        $.post('events_calendar_ajax.php',
                {upload_page_content_ajax:1,
                 event_day_load_more:date,
                 event_calendar_day_page:page},
                function(res){
                var data=checkDataAjax(res);
                if(data){
                    var $data=$(data);
                    $data.filter('.script_events_items').appendTo('#update_server');

                    $el.data('page',page);

                    //var $vents=$el.closest();
                    $el.removeClass('loaded');
                    removeChildrenLoader($el);
                } else {
                    $el.removeClass('loaded');
                    removeChildrenLoader($el);
                    alertServerError();

                }
        })
    }

    this.getHeightContDesc = function($contDesc){
        return $contDesc.height()+25;
    }

    this.prepareEventResize = function(){
        $('.events.in', '#events_calendar').each(function(){
            var $el=$(this);
            $el.find('.event').each(function(){
                var $event=$(this),
                    $desc=$event.find('.event_description'),
                    $contDesc=$event.find('.event_description_content');
                if($desc.data('down')===undefined){
                    $this.prepareEventOneDay($event);
                } else {
                    $desc.css({height:'',maxHeight:''});
                    if($contDesc.height()>$desc.outerHeight()){
                        $el.find('.event_description_more, .event_description_shadow').show();
                    }else{
                        $el.find('.event_description_more, .event_description_shadow').hide();
                    }
                    var h1=$desc.outerHeight(),
                        h=h1,
                        h2=0;
                    $desc.data({h1:h1,h2:h2}).attr({'data-h1':h1,'data-h2':h2});
                    if(!$desc.data('down')){
                        h2=$this.getHeightContDesc($contDesc);
                        $desc.data('h2',h2).attr({'data-h2':h2});
                        h=h2;
                    }
                    $desc.css({height:h,maxHeight:h});
                }
            })
        })
    }

    this.prepareEventOneDay = function($el){
        var $desc=$el.find('.event_description');
        if(!$desc[0])return;
        var $contDesc=$el.find('.event_description_content');
        if($contDesc.height()>$desc.outerHeight()){
            $el.find('.event_description_more, .event_description_shadow').show();
            $desc.data({h1:$desc.outerHeight(), down:1}).attr({'data-h1':$desc.outerHeight(), 'data-down':1});
        } else {
            $el.find('.event_description_more, .event_description_shadow').hide();
        }
    }

    this.prepareEventDay = function($el){
        setTimeout(function(){
            $this.prepareEventOneDay($el);
        },10)
    }

    this.showEventDayDesc = function($el){
        var $event=$el.closest('.event'),
            $desc=$event.find('.event_description'),
            $contDesc=$event.find('.event_description_content'),
            h1=$desc.data('h1'),
            h2=$desc.data('h2'),
            h=h1;

        if($desc.data('down')){
            if(!h2){
                h2=$this.getHeightContDesc($contDesc);
                $desc.data('h2',h2).attr('data-h2',h2);
            }
            h=h2;
            $desc.data('down',0).attr('data-down',0)
        } else {
            $desc.data('down',1).attr('data-down',1)
        }

        $desc.stop().animate(
            {height:h+'px',maxHeight:h},
            {duration:400,
            step:function(){},
            complete:function(){
                $el.removeClass('down');
                $el[$desc.data('down')?'addClass':'removeClass']('down');
            }
        })
    }

    this.goToProfileFromPhoto = function($el){
        if(!notLoaderIos)$el.addChildrenLoader();
        redirectUrl($el[0].href);//getPrepareUrl($el[0].href)
    }


    $(function(){
        setWndResizeEvent($this.prepareEventResize);
    })
    return this;
}