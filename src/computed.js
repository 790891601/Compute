import View from "./view"

export default class Computed {
    constructor(sel) {
        const view = this.view_ = new View(sel)
    }
    start() {
        this.view_.render()   //渲染界面
    }
    stop() {

    }
}