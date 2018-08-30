import ReactDOM from "react-dom"
import ReactView from "./reactView"
import "./view.less"

export default class View {
    constructor(sel) {
        this.app_ = document.querySelector(sel)
    }

    render() {
        const { app_ } = this

        ReactDOM.render(<ReactView />, app_)
    }
}