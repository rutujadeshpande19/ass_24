$(document).ready(function(){
    // click event for hide dashboard div and show timeline div after clicking on Timeline menu from the sidebar
    $("#timeline").click(function(){
      $("#timeline").addClass("sidebar_menu_active");
      $("#dashboard").removeClass("sidebar_menu_active");
      $(".dashboard_div").css("display","none");
      $("#timeline_div").css("display","block");
  });
   // click event for hide timeline div and show dashbaord div after clicking on Dashbaord menu from the sidebar
  $("#dashboard").click(function(){
      $("#timeline").removeClass("sidebar_menu_active");
      $("#dashboard").addClass("sidebar_menu_active");
      $(".dashboard_div").css("display","block");
      $("#timeline_div").css("display","none");
  });
  
  });