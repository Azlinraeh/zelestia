$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

$(document).ready(function(){
  $("#hamburger1").click(function(){
    $("#hamburger1").attr("class").includes("is-active")?
      $('.target').show("swing"):
      $('.target').hide("swing");
   });
});