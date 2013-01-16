// Set imageurl to the path where the nubbin.png image is located

var imageurl = "";

$(document).ready(function(){
			
	var mouseX = 0;
	var mouseY = 0;
	$().mousemove( function(e) {
		mouseX = e.pageX; 
		mouseY = e.pageY;
	});
	 
	$(".jttip").hover(
		function () {
			id = $(this).attr('id');
			
			split = id.split('-', 2)
			number = split[1];
			
			clearTimeout(window['ta' + number]);
			$('#'+id).show();

			
		}, 
		function () {
			
			id = $(this).attr('id');
			$('#'+id).fadeOut('fast');
			
		}
	);
	 
	$(".jttip").each(function (i) {
		var prepend$$i = 0;
		
		$("#jttrigger-"+i).hover(
	      function () {
			
			if(prepend$$i == 0)
			{
				$("#jttip-"+i).prepend('<img class="nubbin" src="'+imageurl+'nubbin.png" alt="arrow" height="13" width="27">');
				prepend$$i = "done";
			}
			
			var triggerPos = $("#jttrigger-"+i).position();
			var jttipPos = $("#jttip-"+i).position();
			var triggerHeight = $("#jttrigger-"+i).height();
			var triggerWidth = $("#jttrigger-"+i).width();
			
	      	var jttipWidth = $("#jttip-"+i).width();
	      	
	      	var offsetX = triggerWidth-jttipWidth;
	      	
	      	$("#jttip-"+i).css('top',triggerPos.top+triggerHeight);
	      	
	      	if(offsetX > 0)
	      	{
	      		$("#jttip-"+i).css('left',triggerPos.left-(offsetX/2));
	      	}
	      	else
	      	{
	      		$("#jttip-"+i).css('left',triggerPos.left+(offsetX/2));
	      	}
	      	
	      	window['t' + i] = setTimeout(function() { $("#jttip-"+i).fadeIn('fast'); },300);
	        
	      }, 
	      function () {
				
				clearTimeout(window['t' + i]);

				if($("#jttip-"+i).css("display") == 'block')
				{
					window['ta' + i] = setTimeout(function() { $("#jttip-"+i).hide(); },300);
				}

	      });
	      
		});
	
});