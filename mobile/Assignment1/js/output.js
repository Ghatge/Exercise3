$(document).ready(function ()
{
    let detail= JSON.parse(localStorage["detail"]);

    $("#name").text(detail.name);
    $("#width").text(detail.width);
    $("#length").text(detail.length);
    $("#color").css('background-color',detail.color);

    let width=detail.width;
    let length=detail.length;
    let paint_cans=detail.paint_cans;

    let price= ((width*length)/400)*paint_cans*0.13;

    $("#paint_cans").text(price.toFixed(2));
});