/*
$(document).ready(function() {
    $("h1").css("color", "red");
}
)
*/
//$("h1").css("color", "red");

$("h1").addClass("big-title new-color")


$("button").click(function() {
    $("button").css("color", "blue")
})


$("input").keypress(function(event) {
    console.log(event.key);
})

$(document).keypress(function(event) {
   // console.log(event.key)
    $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "pink");
})


$("h1").before("<button>haha</button>")

$("button").click(function() {
    $("h1").animate({opacity: 0.5})
})