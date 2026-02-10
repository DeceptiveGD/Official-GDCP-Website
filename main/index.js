let htmlBodyCode = "";

function mainPage()
{
    console.log("javascript")
    let htmlCode = "";
    var body = document.getElementById("container");

    //gets html text from header file
    fetch("./main/framework/mainpage.html")
    .then(response => {
    return response.text();
    })
    .then(htmlText => {
        htmlCode = htmlText;
        htmlBodyCode += htmlCode;
        console.log("this work");
        //writes the fetched html code into index.html
        body.innerHTML = htmlCode;
    });
}