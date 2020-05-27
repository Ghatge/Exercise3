function green_light() {
    return `images/traffic_light/green_light.jpg`;
}

function yellow_light() {
    return `images/traffic_light/yellow_light.jpg`;
}

function red_Light() {
    return `images/traffic_light/red_light.jpg`;
}

$(document).ready(function(){
    const $img=$("#traffic_img");

    $("#red_button").click(function () {
        let red_img=red_Light();
        $img.attr("src",red_img);

    });

    $("#yellow_button").click(function () {
        let yellow_img = yellow_light();
        $img.attr("src",yellow_img);
    });

    $("#green_button").click(function () {
        let green_img = green_light();
        $img.attr("src",green_img);
    });
});