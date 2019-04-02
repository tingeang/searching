$('input:text').focus(
    function(){
        $(this).val('');
    });

////////


$(".realbar").each(function () {
    var randomtop = Math.floor(Math.random() * 5) - 7 + '%';
    var randomleft = Math.floor(Math.random() * 50) + 5 + '%';
    $(this).css({
        "top": randomtop,
        "left": randomleft,
    });
});
$( function() {
    $( ".realbar" ).draggable({stack: ".realbar", scroll: false});
  } );

////////

$(".anotherbar").each(function () {
    var randomtop = Math.floor(Math.random() * 5 ) - 10 + '%';
    var randomleft = Math.floor(Math.random() * 60) + 10 + '%';
    $(this).css({
        "top": randomtop,
        "left": randomleft,
        "position": 'relative',
    });
});
$( function() {
    $( ".anotherbar" ).draggable({stack: ".anotherbar", scroll: false});
  } );
