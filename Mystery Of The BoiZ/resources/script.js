var triangle = document.getElementById("triangle")
console.log (triangle);

$('.book_pics').click(wise_doggo);

function wise_doggo()
{
alert("HALLOOO! IT IZ I AGAIN< YOUNG PADAWAN;;; AM SPEAGINZ TO YOU FROM INSIDE BOOK;;;;; BOOK VERRY TASTY. BUT B4OAR THAT. I IZ HAZ QUESTIONINGS FOR YOU.");

    let such_prompt = prompt("What is an orange?", "Orange");

    if(such_prompt != "Orange")
    {
        alert("OH NOEWS YOU IZ RUINING MY GREAT SCRIPTZ! I ASK YOU AGAIN WITH PAITTIENCE. UwU");
        alert("MUST OF THE COURSE DO THE GREAT INTRODUCTZIONZ AGAIN!!");
        alert("AHEM UwU");

        wise_doggo();
    }
    else
    {
        alert("GOOD. NOW FOAR YOU LAST TEST!!! *GASP* YOU MUST BE THE SIGNING UP FOAR NEWSLETTER FOAR BOOKS!");
        alert("BUT WHAT IS YOARS NAME????");
        alert("AHH >>> PADAWAN YOUS MUST BE IS DOING THE LOOKING FOR THAT!!! HAH!");
        alert("TO FIND YOAR NAME<< YOUS MUST BE RISING ABOVE A NEW WAVE OF THOUGHT, HELLO, AND WELCOME!!");
        alert("AND OCNE YOUZ IS DOING THAT, ASK YOURSELF::: HOW MANY PENGUIZ ARE THEAR??? OwO");
        alert("GO PADAWAN I IZ BELIEF IN YOU!");
        alert("WUF WUF -w-");
    }
}

$('#bananas').click(function()
{
    console.log ("HELLO!");
    $('#bananas').attr("fill", "#000000");
    $('body').css("color", "blue");
    for(let x = 0; x < 100; x++)
    {
        bedazzle("p");
    }
    //bedazzle("p");
    //document.body.style.color = "red";
    console.log ("BYE!");

    $("#phased_doge").css("background-image", "url(\"resources/doge.jpeg\")")
    $("#phased_doge").css("background-size", "50px 100%")

    $('#surprise_text3').html("HEWWO YOUNG PADAWAN. I IZ THE DOGE WHICH IZ PHAZED THRU LES DIMENSIONS. I IZ MOVING PAST U IN DA TIME AND IN DA SPACE ALSO. PLEASE READ SOME BOOKS. UwU");
    $('#surprise_text3').css("background-color", "red");
})

function bedazzle(elem)
{
    for(let x = 0; x < 100; x++)
    {
        $(elem).css("background-color", "green");
        $(elem).css("background-color", "blue");
        $(elem).css("background-color", "red");
        $(elem).css("background-color", "purple");
        $(elem).css("background-color", "white");
        $(elem).css("background-color", "yellow");
        $(elem).css("background-color", "black");
        $(elem).css("background-color", "green");
    }
}

/*
$('.number_button').click(function()
{
    console.log($(this).html());
    $('#happy_calculator').html($(this).html());
})
*/


$('.number_button').click(function()
{
    console.log($(this).html());
    switch($(this).html())
    {
        case "ONE":
            $('#happy_calculator').append("1 ");
            break;
        case "TWO":
            $('#happy_calculator').html("");
            break;
        case "THREE":
            $('#happy_calculator').append("3 ");
            break;
        case "FOUR":
            $('#happy_calculator').append("- ");
            break;
        case "FIVE":
            $('#happy_calculator').append("5 ");
            break;
        case "SIX":
            $('#happy_calculator').append("+ ");
            break;
        case "SEVEN":
            $('#happy_calculator').append("7 ");
            break;
        case "EIGHT":
            $('#happy_calculator').append("* ");
            break;
        case "NINE":
            $('#happy_calculator').append("/ ");
            break;
        case "HELLO":
            $('#happy_calculator').append("( ");
            break;
        case "0":
            $('#happy_calculator').append("ZERO ");
            break;
        case "BYEBYE":
            $('#happy_calculator').append(") ");
            break;
    }
})

var KAKA_number = 0;
$('#calc_submit').click(function()
{
    try
    {
        let call = math.evaluate($('#happy_calculator').html());
        $('#calc_submission').html(call);
        KAKA_number = call;
    }
    catch(err)
    {
        $('#calc_submission').html("You gone dun GOOF'd boI. Why don'tcha call our gud BoI KAKA? He's number iz 88.")

    }

    if (KAKA_number == 88)
    {
        $('#surprise_text1').html("HI IMMA KAKA BOI");
        $('#surprise_img').attr("width", "300px");
        $('#surprise_img').attr("src", "resources/doge.jpeg");
        $('#surprise_text2').html("IMMA A HELPIN YOU BUTA U MUSTA FURSTA THE HELPINGZ OF THE MR SIR EINSTEIN MAN... JUST FOLLOW HIS GREAT ADVICE UP THEAR!!! *YAP YAP*");
    }
})

$("#such_form").submit(function()
{
    if ($("#registration").val() != 'much')
    {
        return false;
        alert('ACCESS DENIED');
    }
})