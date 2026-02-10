async function mainPage() {
    const response = await fetch("./main/framework/listpage.html");
    const htmlText = await response.text();
    return htmlText; // This returns a Promise that resolves to the text
}

export { mainPage };