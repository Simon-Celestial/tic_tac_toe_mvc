import View from "./view.js";
import Controller from "./controller.js";
import Model from "./model.js";

let initialize = () => {
    let model = new Model();
    let view = new View();
    new Controller(model, view);
};

window.addEventListener("DOMContentLoaded", initialize);
