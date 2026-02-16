import {mainPage as firstPage} from "./mainpage.js"
import {mainPage as classiclistPage} from "./listpage.js"
import {mainPage as platlistPage} from "./platformerlistpage.js"
import {mainPage as leaderboardPage} from "./leaderboardpage.js"
import {mainPage as roulettePage} from "./roulettepage.js"

const routes = {}

let mainpage = "";

async function homePage()
{
    mainpage = await firstPage();
    routes["/Official-GDCP-Website/"] = mainpage;
    nextStep();
}

async function toListPage()
{
    mainpage = await classiclistPage();
    routes["/Official-GDCP-Website/api/classiclist/"] = mainpage;
    nextStep();
}

async function toLeaderboardPage()
{
    mainpage = await leaderboardPage();
    routes["/Official-GDCP-Website/api/leaderboard/"] = mainpage;
    nextStep();
}

async function toRoulettePage()
{
    mainpage = await roulettePage();
    routes["/Official-GDCP-Website/api/roulette/"] = mainpage;
    nextStep();
}

async function toPlatlistPage()
{
    mainpage = await platlistPage();
    routes["/Official-GDCP-Website/api/platformerlist/"] = mainpage;
    nextStep();
}

function nextStep()
{
    const path = window.location.pathname;
    const container = document.getElementById("container");
    console.log(path);

    container.innerHTML = routes[path] || "404 Not found";
}

//background color fade functions

function startColorInterval()
{
    let firstActive = false;
    if (firstActive == false)
    {
        colorFade();
        firstActive = true;
    }

    setInterval(colorFade, 3000);
}

function colorFade()
{
    const bgColor = document.body;
    bgColor.classList.toggle("highlighted")
}

window.onpopstate = homePage;

window.homePage = homePage;
window.toListPage = toListPage;
window.toLeaderboardPage = toLeaderboardPage;
window.toRoulettePage = toRoulettePage;
window.toPlatlistPage = toPlatlistPage;

window.startColorInterval = startColorInterval;