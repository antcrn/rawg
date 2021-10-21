import routes from "./routes";
import '../sass/style.scss';

let pageArgument;

const setRoute = () => {
    let path = window.location.hash.substring(1).split("/");
    pageArgument = path[1] || "";

    let pageContent = document.getElementById("pageContent");
    routes[path[0]](pageArgument);
    return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());