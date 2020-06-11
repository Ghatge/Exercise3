$(document).ready(function () {
    $("#main").submit(Data);
});

function Data(main)
{
    let name=$("input[name=name]").val();

    let width=$("input[name=width]").val();

    let length=$("input[name=length]").val();

    let color=$("input[name=color]").val();

    let paint_cans=$("select[name=paint_cans]").val();

    let detail= {name, width, length, color, paint_cans};

    localStorage["detail"]= JSON.stringify(detail);

    main.submit();

}