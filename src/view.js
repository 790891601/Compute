import ReactView from "./reactView"
import "./view.less"

export default class View {
    context = null

    constructor(sel) {
        this.container_ = document.querySelector(sel)
    }

    get container() {
        return this.container_
    }

    start() {
        ReactView(this.container)
    }
}