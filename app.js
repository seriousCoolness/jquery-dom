$( document ).ready(function (){
    console.log("Let’s get ready to party with jQuery!")
});

$('article').children('img').addClass('image-center');
$('article').children('p').last().remove();

const rand = Math.floor(Math.random() * 100);
$('#title').css('font-size', `${rand}px`);

$('ol').append('<li>Cool List Element Dot Com Dot Exe Not A Virus</li>');

$('aside').empty().append('<p>hey there was a list here but that was really dumb and stupid so uh heres an ascii cat instead. sorry. <br>|\\---/|<br>| o_o |<br>\\_^_/</p>');

let r = 0;
let g = 0;
let b = 0;
$('.form-control').on("input", function() {
    console.log("changed");
    r = $('input').eq(0).val();
    g = $('input').eq(1).val();
    b = $('input').eq(2).val();
    $('body').css('background-color', `rgb(${r},${g},${b})`);
});

$('img').click(function() {
    $('img').remove();
});