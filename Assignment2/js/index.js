$(function() {
    // load the xml file
    $.getJSON("cat_data/cat_data.json",displaycats);
});
function displaycats(data) {
    let $table = $("<table></table>");
    $table.appendTo("main");
    let cats = data.breeds;
    cats.forEach(function (breed, index) {
            $table.append(
                `<tr> 
                <td>
                    <a href="details.html" data-index="${index}">
                     <img src="images/${breed.pictures.small}" 
                        alt="${breed.name}" class="thumb">
                    </a> 
                </td> 
                <td>
                    <span class="cat_label">${breed.name}</span>&nbsp;&nbsp;
                    <span class="cat_price">${breed.origin}</span><br>
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
