import {mainPage as firstPage} from "./mainpage.js"
import {mainPage as classiclistPage} from "./listpage.js"
import {mainPage as platlistPage} from "./platformerlistpage.js"
import {mainPage as leaderboardPage} from "./leaderboardpage.js"
import {mainPage as roulettePage} from "./roulettepage.js"

import {mainPage as footerInfo} from "./footer.js"
import {mainPage as mainpageFooterInfo} from "./mainpagefooter.js"

import {mainPage as sidebarHTML} from "./sidebar.js"
import {mainPage as mainpageSidebarHTML} from "./mainpagesidebar.js"

const routes = {}

let mainpage = "";

let mainpagebool = false;
let classicbool = false;
let platformerbool = false;
let leaderboardbool = false;

async function homePage()
{
    mainpage = await firstPage();
    routes["/Official-GDCP-Website/"] = mainpage;
    mainpagebool = true;
    nextStep();
}

async function toListPage()
{
    mainpage = await classiclistPage();
    routes["/Official-GDCP-Website/api/classiclist/"] = mainpage;
    classicbool = true;
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

async function nextStep()
{
    const path = window.location.pathname;
    const container = document.getElementById("container");
    const sidebar = document.getElementById("sidebar");
    console.log(path);

    container.innerHTML = await routes[path] || "404 Not found";
    if (classicbool == true) classicJSON();

    const footer = document.getElementById("footer");
    let footerHTML = "";
    let sidebarHTML = "";
    if (mainpagebool == false)
    {
        footerHTML = await footerInfo();
        sidebarHTML = await sidebarHTML();
    }
    else
    {
        footerHTML = await mainpageFooterInfo();
        sidebarHTML = await mainpageSidebarHTML();
        mainpagebool = false;
    }

    footer.innerHTML = footerHTML;
    sidebar.innerHTML = sidebarHTML;
}


//Open sidebar functions

function toggleSidebar()
{
    const blur = document.getElementById("sidebarblur");
    const sidebar = document.getElementById("sidebar");

    blur.classList.toggle("active");
    sidebar.classList.toggle("visable")
}

//Get JSON file functions

async function classicJSON()
{
    const response = await fetch("../../main/json/list.json");
    const levels = await response.json();
    let listCount = levels.length;

    var text = "";
    for (var i = 0; i < listCount; i++)
    {
        let challenge = levels[i];

        if (i + 1 <= 150)
        {
            text += "<tr><td class=\"levelitem\" onclick=\"levelInfo('" + challenge + "')\">" + (i+1) + ". "+ challenge +"</td></tr>";
        }
        else
        {
            text += "<tr><td class=\"levelitem\" onclick=\"levelInfo('" + challenge + "')\">Legacy  "+ challenge +"</td></tr>";
        }
    }
    const innerlist = document.getElementById("innerlevellist");
    innerlist.innerHTML = text;

    classicbool = false;
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
window.toggleSidebar = toggleSidebar;