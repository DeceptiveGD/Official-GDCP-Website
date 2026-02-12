import {mainPage as firstPage} from "./mainpage.js"
import {mainPage as listPage} from "./listpage.js"
//import for lb and rl

const routes = {}

let mainpage = "";

async function welcomePage()
{
    mainpage = await firstPage();
    routes["/Official-GDCP-Website/"] = mainpage;
    nextStep();
}

async function toListPage()
{
    mainpage = await listPage();
    routes["/Official-GDCP-Website/api/list/"] = mainpage;
    nextStep();
}

async function toLeaderboardPage()
{
    mainpage = await listPage();
    routes["/Official-GDCP-Website/api/leaderboard/"] = mainpage;
    nextStep();
}

async function toRoulettePage()
{
    mainpage = await listPage();
    routes["/Official-GDCP-Website/api/roulette/"] = mainpage;
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
window.toListPage = toListPage;
window.toLeaderboardPage = toLeaderboardPage;
window.toRoulettePage = toRoulettePage;