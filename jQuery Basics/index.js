$(".bro").addClass("big-title margin-50");

$("h1").click( function() {
    $('h1').addClass('purple');
})

$("button").click(function () {
    $('h1').slideUp().slideDown().animate({opacity: "20%"});
})

$("input").on( "keypress", function(e) {
    $("h1").text(e.key)
})