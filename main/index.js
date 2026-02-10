import {mainPage as firstPage} from "./mainpage.js"
import {mainPage as listPage} from "./listpage.js"

const routes = {}

let mainpage = "";

async function welcomePage()
{
    mainpage = await firstPage();
    routes["/"] = mainpage;
    console.log(mainpage);
    nextStep();
}

async function toListPage()
{
    mainpage = await listPage();
    routes["/"] = mainpage;
    console.log(mainpage);
    nextStep();
}

function nextStep()
{
    const path = window.location.pathname;
    const container = document.getElementById("container");
    console.log(path);

    container.innerHTML = routes[path] || "404 Not found";
}

window.onpopstate = welcomePage;

window.welcomePage = welcomePage;