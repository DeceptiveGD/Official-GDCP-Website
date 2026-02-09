
function firstPage()
{
    console.log("javascript")
    let htmlHeader = "";
    var body = document.getElementById("container");

    fetch("./framework/header.html")
    .then(response => {
    return response.text();
    })
    .then(htmlText => {
        htmlHeader = htmlText;
        body.innerHTML = htmlHeader;
    });
}