import React from "react"

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick() {
        const { onClick:click } = this.props

        click(this.el_.innerHTML)
    }

    render() {
        const { className, value } = this.props

        return <div ref={ el => { this.el_ = el }} className={ className }
             onClick={ this.onClick.bind(this) }>{ value }</div>
    }
}