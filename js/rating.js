
clicked = false;

$(".rating").mouseover(function () {
    $(this).css('cursor', 'pointer');
    if (!clicked) {
        var id = $(this).attr('id');
        var id_splited = id.split('-')
        var index = id_splited[1];
        for (i = index; i >= 0; i--)
            $('#rat-' + i).removeClass('glyphicon-star-empty').addClass("glyphicon-star");
    }
});

$(".rating").mouseleave(function () {
    if (!clicked) {
        var id = $(this).attr('id');
        var id_splited = id.split('-');
        var value = id_splited[1];

        $(this).removeClass('glyphicon-star').addClass("glyphicon-star-empty");

        var val = parseInt(value) + 1;

        for (m = val; m <= 5; m++)
            $('#rat-' + m).removeClass('glyphicon-star').addClass("glyphicon-star-empty");

    }
});

$("#ratin-div").mouseleave(function () {
    if (!clicked) {
        for (i = 1; i <= 5; i++)
            $('#rat-' + i).removeClass('glyphicon-star').addClass("glyphicon-star-empty");
    }
});


$(".rating").click(function () {
    clicked = true

    $("#ratin-div").css('border', '');
    $("#id_rat").css('display', 'none');
    

    var id = $(this).attr('id');
    var id_splited = id.split('-')
    var value = id_splited[1];

    $("#rat-value").val(value);
    
    if ( value == "1")
        $("#rating-label").text('Thank you! you gave me: '+ value +' star :-( ');
    else if ( value == "2" | value == "3" )
        $("#rating-label").text('Thank you! you gave me: '+ value +' stars :-| ');
    else
        $("#rating-label").text('Thank you! you gave me: '+ value +' stars :-) ');

    for (i = 1; i <= value; i++)
        $('#rat-' + i).removeClass('glyphicon-star-empty').addClass("glyphicon-star");

    var val = parseInt(value) + 1;

    for (m = val; m <= 5; m++)
       $('#rat-' + m).removeClass('glyphicon-star').addClass("glyphicon-star-empty");
});



