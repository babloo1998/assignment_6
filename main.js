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



$(document).ready(function ()
{
$(".btn4").click(function()
{
   bid=$(this).attr("id");
   bid="#row"+bid;
   $(bid).remove();    
});
});




$(document).ready(function(){
  $("#btn5").click(function(){
$.ajax({
        url: "https://api.myjson.com/bins/1gnq6u",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res)
        }
    });
})
})


$('#table1 td').each(function()
  {
  var td = $(this).text();
  if(td>10)
  {
  $(this).css("background-color", "slateBlue");
  }
  });




