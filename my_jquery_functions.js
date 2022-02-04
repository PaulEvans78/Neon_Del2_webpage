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
    $(".topnav a.icon").click(function(){
      $("#myLinks").slideToggle("slow");
  });
});

$(document).ready(function(){
    $("#hireBooking1").click(function(){
      alert("This Page is not built yet try another!");
  });
    $("#theScreens1").click(function(){
      alert("This Page is not built yet try another!");
});
    $("#bookTable1").click(function(){
      alert("This Page is not built yet try another!");
  });
    $("#tickets1").click(function(){
      alert("This Page is not built yet try another!");
});
    $("#theScreens2").click(function(){
      alert("This Page is not built yet try another!");
  });
    $("#tickets2").click(function(){
      alert("This Page is not built yet try another!");
});
    $("#theScreens3").click(function(){
      alert("This Page is not built yet try another!");
  });
    $("#bookTable2").click(function(){
      alert("This Page is not built yet try another!");
  });
    $("#hireBooking2").click(function(){
      alert("This Page is not built yet try another!");
  });
    $("#theScreens4").click(function(){
      alert("This Page is not built yet try another!");
  });
});

