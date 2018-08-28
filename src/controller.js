export default class Controller {
    constructor(model, view) {
        model.context = this
        view.context = this
    }

    emitModelChange() {

    }

    emitViewEvent() {
        
    }
}