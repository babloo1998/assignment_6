var a=function(){
      $(document).ready(function() {
        console.log("Hello world")
    });
    }

var b=function(){
	$(document).ready(function() {
      $('#test').addClass('load');
});
}

var c=function(){
$(document).ready(function(){
	$('p[id$="-new"]').css("color", "DodgerBlue") 
});
}

var d=function () {
	$(document).ready(function(){

		$("#btn").prop('disabled', true);
	});
}

var e= function(){
	$(document).ready(function(){
       $("#main>.target").css("color", "DodgerBlue") 
	});
}


var f= function () {
	$(document).ready(function(){
		$("div.container").replaceWith("<p>HI</p>")
	});
}




  $(document).ready(function()
  {
  	$("#btn1").click(function()
  	{
    	$("#test1").append("<b>Appended text</b>");
	    
	})
});

  $("#btn1").css("width","150px");



$(document).ready(function()
{
      $("#btn2").on("click", function()
      {
          alert("Alert!!!");
      })
});


$(document).ready(function(){
  $("a").click(function(event){
    event.preventDefault();
  });
});



$(document).ready(function(){
  $("#btn3").click(function(){
    alert("Height of div: " + $("div").height());
  });
});

$(document).ready(function(){

	$("a").css("margin-left","25px");
});





