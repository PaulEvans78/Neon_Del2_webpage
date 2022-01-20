$(document).ready(function(){
    $("#cinema-img").fadeTo(1000, 1);
    $("#restuarant-img").fadeTo(2000, 1);
    $("#bar-img").fadeTo(2500, 1);
    $("#cinema-img").hover(function(){
      $(this).css("opacity", "0.8");
      }, function(){
      $(this).css("opacity", "1");
  });
    $("#restuarant-img").hover(function(){
      $(this).css("opacity", "0.8");
      }, function(){
      $(this).css("opacity", "1");
  });
    $("#bar-img").hover(function(){
      $(this).css("opacity", "0.8");
      }, function(){
      $(this).css("opacity", "1");
  });
});

$(document).ready(function(){
    $(".topnav").click(function(){
      // $("#myLinks").slideDown("slow");
      $("#myLinks").slideToggle("slow");
  });
});


    