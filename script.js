$("iframe").hide();

$(document).ready(function() {
    $(".Button2").hover(function() {
        $(this).css("color", "black");
      },
    function() {
        $(this).hide();

    });


$(".Button1").click(function() {
    alert("I am glad you're here - lets get things done!");
})
$("iframe").click(function(ev) {
$("iframe")[0].src +="&autoplay=1";
ev.preventDefault();
});

setTimeout(function() {
    $("iframe").trigger('click');
}, 4000);

});

$(".Button").click(function(){
    $(section).animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });

  $(document).ready(function(){
      $(".harklogo").fadeIn("slow");
    });
  
    $(document).ready(function(){
        $("button").click(function(){
          $("#div1").fadeIn(2000);
          $("#div2").fadeIn(3000);
          $("#div3").fadeIn(4000);
        });
      });

      $(document).ready(function(){
        $("button").click(function(){
          $("#div1").fadeToggle(4000);
          $("#div2").fadeToggle(3000);
          $("#div3").fadeToggle(2000);
        });
      });
 
