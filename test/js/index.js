
$(document).ready(function() {
	


    $("#back").hide();
    $("#next").hide();
    $("#startagain").hide();
    $("#score").hide();
    $("#bar10").hide();
    $("#result").hide();
    $("#resultbad").hide();
    
    
    $("#start").on('click', function() {
        $("#start").hide();
        $('#h4Start').hide(1000);
		 $("#vsevoprosi").show(1000);
		 $("#panel-footer1").show(1000);
		 $("#bar").width('3%');

    });
	
	$('input').on('click', function() {
	var totalprogress = 0, totalbar = 0, totalvorposov = 31;
	totalprogress = $(this).closest("div").attr('id');
	totalbar = totalprogress/totalvorposov*100;
	$("#bar").width(totalbar+'%');
	$(this).closest("div").hide(500);
	if (totalprogress != totalvorposov){
    $(this).closest("div").next("div").show(500);
	} else {
	$("#wait").show();
	$("#form").submit();
	}
	
	});

      $("#startagain").on('click', function() {
        
       location.reload();
    });
    });