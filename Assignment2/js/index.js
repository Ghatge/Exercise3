"use strict";

$(function() {
    // load the xml file
    $.getJSON("cat_data/cat_data.json",displaycats);
});
function displaycats(data) {
    let $table = $("<table></table>");
    $table.appendTo("main");
    let cats = data.breeds;
    breeds.forEach(function (breed, index) {
            $table.append(
                `<tr> 
                <td>
                    <a href="index.html" data-index="${index}">
                     <img src="images/${cats.pictures.small}" 
                        alt="${breed.name}" class="thumb">
                    </a> 
                </td> 
                <td>
                    <span class="cat_label">${breed.label}</span>&nbsp;&nbsp;
                    <span class="cat_price">${breed.price}</span><br>
                    ${breed.text}
                </td>
            </tr>`
            );
        }
    );
    $("table a").click(function(){
        let index = $(this).data("index");
        localStorage["breed"] = JSON.stringify(breeds[index]);
    });
}
