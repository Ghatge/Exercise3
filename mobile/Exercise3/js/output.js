$(document).ready(function(){
    let data = JSON.parse(localStorage["data"]);
    $("#cat_type").text(data.cat_type);
    $("#urgent").text(data.cat_msg?"yes":"no");

});