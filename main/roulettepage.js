async function mainPage() {
    const response = await fetch("/Official-GDCP-website/main/framework/roulettepage.html");
    const htmlText = await response.text();
    return htmlText; // This returns a Promise that resolves to the text
}

export { mainPage };