import "regenerator-runtime";
import "./styles/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

import "./script/component/app-bar.js";
import "./script/component/head-jumbotron.js";
import "./script/component/footer-bar.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);