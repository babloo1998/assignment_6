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

		$("#btn").attr('disabled', 'disabled');
	});
}

var e= function(){
	$(document).ready(function(){
       $("#main>.target").css("font-size", "50px") 
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
    	$("#test1").append("<b>Click</b>");
      $("#test1").css("color","DodgerBlue")
	    
	})
});

  $("#btn1").css("width","150px");



$(document).ready(function(){
$("#test6").click(function(){
var append1=$("<p/>",{class:'class1',id:'id1',text:'hello world'});
$("#test6").append(append1);
});

$(".class1").on("click", function(){
alert("alert key working!");
});
});

$(document).ready(function(){
  $("a").click(function(event){
    event.preventDefault();
  });
});


$(document).ready(function () {

var imageArray = ["https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"]

$("#test7"). click(function () {
var image = $("#test7-img");
image.animate({ opacity: 0 }, 500, function () {
var random = imageArray[Math.floor(Math.random() * imageArray.length)];
image.attr("src", random);
image.css('opacity', 1);
$("#test7").html(image);
})
})
});



$(document).ready(function(){
  $("#btn3").click(function(){
    var a = $("#test").height();
    var b = $("div").height();
    if(a>b){
      alert(a);
    }
    else{
      alert(b);
    }
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


$(function(){
$('select').on('change',function()
{
$("#main2").append(this.value); 
});
});

$(function(){
$('ul#open').hide();
$(".dropdown").hover(function() {
$('ul#open').show();
},
function() {
$('ul#open').hide();
});
});

$(function(){
$("#parent").click(function(e){
$("#parent").append("from click function parent");
});
$("#child").click(function(e){
$("#child").append("from click function child");
e.stopPropagation();
});
});






$(document).ready(function(){
  $("#btn5").click(function(){
$.ajax({
        url: "https://api.myjson.com/bins/1gnq6u",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            $('#jsondata').text(JSON.stringify(res));
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




