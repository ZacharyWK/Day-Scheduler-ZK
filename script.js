const currentHour = +moment().format("H");

let Timer = moment().format("MMMM Do YYYY, h:mm a");
let timerSpace = $('#currentDay');
timerSpace.text(Timer);

console.log(currentHour);
$(".time-block").each(function(){
    const hour = $(this).attr("id").split("-")
    console.log(hour)
})

$(".time-block").each(function () {
  const hour = $(this).attr("id").split("-").pop();
  console.log(hour);
  if (currentHour == hour){
    $(this).addClass("present")
  }
  else if (currentHour<hour){
    $(this).addClass("future")
  }
  else {$(this).addClass("past")
  }
  });

$('#hour-9').find("textarea").val(localStorage.getItem("hour-9"));
$('#hour-10').find("textarea").val(localStorage.getItem("hour-10"));
$('#hour-11').find("textarea").val(localStorage.getItem("hour-11"));
$('#hour-12').find("textarea").val(localStorage.getItem("hour-12"));
$('#hour-13').find("textarea").val(localStorage.getItem("hour-13"));
$('#hour-14').find("textarea").val(localStorage.getItem("hour-14"));
$('#hour-15').find("textarea").val(localStorage.getItem("hour-15"));
$('#hour-16').find("textarea").val(localStorage.getItem("hour-16"));
$('#hour-17').find("textarea").val(localStorage.getItem("hour-17"));

$('#hour-9').find("button").on("click",function()
{localStorage.setItem("hour-9", JSON.stringify
($("#hour-9").find("textarea").val()
))}) 

$('#hour-10').find("button").on("click",function()
{localStorage.setItem("hour-10", JSON.stringify
($("#hour-10").find("textarea").val()
))}) 

$('#hour-11').find("button").on("click",function()
{localStorage.setItem("hour-11", JSON.stringify
($("#hour-11").find("textarea").val()
))}) 

$('#hour-12').find("button").on("click",function()
{localStorage.setItem("hour-12", JSON.stringify
($("#hour-12").find("textarea").val()
))}) 

$('#hour-13').find("button").on("click",function()
{localStorage.setItem("hour-13", JSON.stringify
($("#hour-13").find("textarea").val()
))}) 

$('#hour-14').find("button").on("click",function()
{localStorage.setItem("hour-14", JSON.stringify
($("#hour-14").find("textarea").val()
))}) 

$('#hour-15').find("button").on("click",function()
{localStorage.setItem("hour-15", JSON.stringify
($("#hour-15").find("textarea").val()
))}) 

$('#hour-16').find("button").on("click",function()
{localStorage.setItem("hour-16", JSON.stringify
($("#hour-16").find("textarea").val()
))}) 

$('#hour-17').find("button").on("click",function()
{localStorage.setItem("hour-17", JSON.stringify
($("#hour-17").find("textarea").val()
))}) 