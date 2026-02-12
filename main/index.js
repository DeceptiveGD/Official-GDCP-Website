import {mainPage as firstPage} from "./mainpage.js"
import {mainPage as listPage} from "./listpage.js"
import {mainPage as leaderboardPage} from "./leaderboardpage.js"
import {mainPage as roulettePage} from "./roulettepage.js"


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
    routes["/Official-GDCP-Website/api/list/index.html"] = mainpage;
    nextStep();
}

async function toLeaderboardPage()
{
    mainpage = await leaderboardPage();
    routes["/Official-GDCP-Website/api/leaderboard/index.html"] = mainpage;
    nextStep();
}

async function toRoulettePage()
{
    mainpage = await roulettePage();
    routes["/Official-GDCP-Website/api/roulette/index.html"] = mainpage;
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