import View from "./view.js";
import Controller from "./controller.js";
import Model from "./model.js";


let initialize = () => {
    let model = new Model();
    let view = new View();
    let controller = new Controller(model,view);
    // controller.init();
};


window.addEventListener("DOMContentLoaded",initialize)