import Model from "./model"
import Controller from "./controller"
import View from "./view"

export default class Computed {
    constructor(sel) {
        const model = this.model_ = new Model()
        const view = this.view_ = new View(sel)

        this.controller_ = new Controller(model, view)
    }
    start() {
        this.view_.start()
        this.model_.start()
    }
    stop() {

    }
}