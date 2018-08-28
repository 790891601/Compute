import React from "react"

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick() {
        const { value, onClick } = this.props
        this.click = onClick
    
        switch(value) {
            case "C":
                this.setValue("")
                break
            case "×":
            case "÷":
            case "+":
            case ".":
                this.setValue(value)
                break
            case "-":
                this.setValue(value)
                break
            case "%":
                this.foresee(value)
                this.setValue(value)
                break
            case "←":
                this.setValue(-1)
                break
            case "=":
                this.computed()
                break
            default: 
                this.addValue()
                break
        }
    }

    setValue(value) {
        this.click(value)
    }

    dotValue() {

    }

    computed(value) {
        
    }

    calc(sign, num1, num2) {
        let rst = null
        switch(sign) {
            case "+":
                rst = num1 + num2 
                break
            case "-":
                rst = num1 - num2
                break
            case "×":
                rst = num1 * num2
                break
            case "÷":
                rst = num1 / num2
                break
        }
        return rst
    }

    addValue() {
        this.click(this.el_.innerHTML)
    }

    render() {
        const { className, value } = this.props

        const customeClassName = className ?  `${className} row`: `row`

        return <div ref={ el => { this.el_ = el }} className={ customeClassName } onClick={ this.onClick.bind(this) }>{ value }</div>
    }
}