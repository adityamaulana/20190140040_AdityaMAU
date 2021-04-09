document.getElementById('nama').innerHTML = 'Aditya Maulana';

document.getElementById('nim').innerHTML = '20190140040';

$(function() {

    console.log("Holla");

});

$("#hide").on("click", function() {

    $("#nama").hide();

});

$("#show").on("click", function() {

    $("#nama").show();

});

$("#toggle").on("click", function() {

    $("#nama").toggle();

});

$("#fadeIn").on("click", function() {

    $("#tanggal").fadeIn();

});

$("#fadeOut").on("click", function() {

    $("#tanggal").fadeOut();

});

$("#fadeToggle").on("click", function() {

    $("#tanggal").fadeToggle();

});

$("#slideUp").on("click", function() {

    $("#img").slideUp();

});

$("#slideDown").on("click", function() {

    $("#img").slideDown();

});

$("#slideToggle").on("click", function() {

    $("#img").slideToggle();

});