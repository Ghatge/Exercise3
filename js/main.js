//preload images
const images=[];
for(let i=1;i<=6;i++){
    let image=new Image();
    image.src=imageSrc(1);
    images.push(image)

}
function rand6() {
    return Math.floor(1 + 6 * Math.random());
}
function imageSrc(rand) {
    return `image/dice/side_${rand}.png`;
}
let $image;
let $value;



function showDie(rand) {
    let file = imageSrc(rand);
    $image.attr("src", file);
    $image.attr("alt", `side_${rand}`);
    $value.text(rand);
}

$(document).ready(function () {
    console.log("The page is ready");
     $image = $("#die_image");
     $value = $(".number_value");

    $("#roll_button").click(function () {

        let rand =rand6();
        showDie(rand);
    });
});