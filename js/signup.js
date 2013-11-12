//js for datepicker
$("#test_default").trigger('click');
$("#bdayDiv").trigger('click');
$("#tbEmail").keypress(function(){
	appearClearbtn("tbEmail");
});
	   $(function() {
	   
            var curr = new Date().getFullYear();
            var opt = {

            }

            opt.date = {preset : 'date'};
	/*opt.datetime = { preset : 'datetime', minDate: new Date(2012,3,10,9,22), maxDate: new Date(2014,7,30,15,44), stepMinute: 5  };
	opt.time = {preset : 'time'};
	opt.tree_list = {preset : 'list', labels: ['Region', 'Country', 'City']};
	opt.image_text = {preset : 'list', labels: ['Cars']};
	opt.select = {preset : 'select'};*/
	//<!--Script-->

            //$('#test_default').bind('click', function() {
                var demo = "date";
                //$(".demos").hide();
                if (!($("#demo_"+demo).length))
                    demo = 'default';

                $('#test_'+demo).val('').scroller('destroy').scroller($.extend(opt['date'], { theme: "ios", mode: "scroller", display: "bottom", lang: "" }));
		
        });
 //end of js for date picker

 $(document).ready(function(){
//----changing label color when value is set
	$(document.body).click(function (){
		labelSet();
	});	
//---- end changing label color when value is set
	$("#tbEmail").keyup(function(){
		appearClearbtn("tbEmail");
	});
	$("#tbPassword").keyup(function(){
		appearClearbtn("tbPassword");
	});
	$("#tbRePassword").keyup(function(){
		appearClearbtn("tbRePassword");
	});
	$("#tbFname").keyup(function(){
		appearClearbtn("tbFname");
	});$("#tbLname").keyup(function(){
		appearClearbtn("tbLname");
	});
	$("#tbNname").keyup(function(){
		appearClearbtn("tbNname");
	});
	$("#test_default").keyup(function(){
		appearClearbtn("test_default");
	});
	$("#tbGender").keyup(function(){
		appearClearbtn("tbGender");
	});
});


function appearClearbtn(tbId){
	if($("#"+tbId).val() != "")
		$("#"+tbId+"Clear").removeAttr("hidden");
	else
		$("#"+tbId+"Clear").attr("hidden", true);
	labelSet();
}

function labelSet(){
		if($("#tbEmail").val()!="")
			$("#emailDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#emailDiv").css({'color': 'lightgray'});
			
		if($("#tbPassword").val()!="")
			$("#passwordDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#passwordDiv").css({'color': 'lightgray'});
			
		if($("#tbRePassword").val()!="")
			$("#repasswordDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#repasswordDiv").css({'color': 'lightgray'});
			
		if($("#tbFname").val()!="")
			$("#fnameDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#fnameDiv").css({'color': 'lightgray'});
		
		if($("#tbLname").val()!="")
			$("#lnameDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#lnameDiv").css({'color': 'lightgray'});
			
		if($("#tbNname").val()!="")
			$("#nnameDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#nnameDiv").css({'color': 'lightgray'});
			
		if($("#test_default").val()!="")
			$("#bdayDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#bdayDiv").css({'color': 'lightgray'});
			
		if($("#tbGender").val()!="")
			$("#genderDiv").css({'color': 'rgb(126, 118, 118)'});
		else
			$("#genderDiv").css({'color': 'lightgray'});
}