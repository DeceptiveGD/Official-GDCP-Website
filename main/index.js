let htmlBodyCode = "";

function mainPage()
{
    console.log("javascript")
    let htmlCode = "";
    var body = document.getElementById("lefttext");

    //gets html text from header file
    fetch("./main/texts/lefttext")
    .then(response => {
    return response.text();
    })
    .then(htmlText => {
        htmlCode = htmlText;
        htmlBodyCode += htmlCode;
        //writes the fetched html code into index.html
        body.innerHTML = htmlCode;
    });

    var body2 = document.getElementById("righttext");

    fetch("./main/texts/righttext")
    .then(response => {
    return response.text();
    })
    .then(htmlText => {
        htmlCode = htmlText;
        htmlBodyCode += htmlCode;
        //writes the fetched html code into index.html
        body2.innerHTML = htmlCode;
    });
}