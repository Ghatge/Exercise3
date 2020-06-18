"use strict";


$(function() {

    let cat = JSON.parse(localStorage["breed"]);
    $("span.cat_text").text(cat.text);
    $("span.cat_link").text(flower.price);
    $("img.flower_image")
        .attr("src",`images/flowers/${flower.pictures.large}`)
        .attr("alt",flower.label);
    $("p.flower_info").text(flower.text);
});