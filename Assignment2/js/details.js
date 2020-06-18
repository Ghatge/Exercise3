$(function() {

    let breed = JSON.parse(localStorage["breed"]);
    $("span.breed_name").text(breed.name);
    $("img.breed_image")
        .attr("src",`images/${breed.pictures.large}`)
        .attr("alt",breed.name);
    $("span.breed_text").text(breed.text);
    $("span.breed_link").html(breed.link);
});