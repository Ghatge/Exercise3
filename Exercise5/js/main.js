$(document).ready(function () {
    $("#data").submit(saveInfo);
})
function saveInfo(form){
    let dogName= $(`input[name=dogName]`).val();
    let ownerName= $(`input[name=ownName]`).val();

    let vaccinated= $(`input[name=vaccinate]`).prop("checked");

    let dog={dogName,ownerName,vaccinated};

    localStorage["dog"]=JSON.stringify(dog);
}