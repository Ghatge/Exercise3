
$(document).ready(function(form){

    let cat_type = $("input[name=cat]:checked").val();
    let cat_msg = $("input[name=urgent]").prop("checked");

    let data={cat_type,cat_msg};
    console.log(data);

    localStorage["data"] = JSON.stringify(data);
    form.submit();
    });



