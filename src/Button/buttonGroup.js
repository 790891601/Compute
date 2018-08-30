import React from "react"
import Button from "./button"

export default class ButtonGroup extends React.Component {
    constructor(props) {
        super(props)
    }

    setClassName() {
        const { keys } = this.props
        const  bg = ["C", "÷", "×", "←", "-", "+"]
        const defaultClassName = "row"

        return keys.map(value => {
            //class=bg,row
            if(bg.includes(value)) {
                return `${ defaultClassName } bg`
            //class=computed,row
            }else if(value === "=") {
                return `${ defaultClassName } conputed`
            }
            //class="row"
            return defaultClassName
        })
    }

    render() {
        const { onClick, keys } = this.props

        // customeClassName = array(列1,列2, 列3 )类名数组
        const customeClassName = this.setClassName()

        return <div className="rows">
            { 
                keys.map((value,index) => {
                    return <Button key={ value } value={ value } className={ customeClassName[index] } onClick={ onClick } ></Button>
                })
            }
        </div>
    }
}