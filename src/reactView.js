import React from "react"
import ButtonGroup from "./Button"
import { column1, column2, column3, column4 } from "./const"

export default class ReactView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            values : "",
            result : ""   //计算结果
        }
    } 

    onClick(data) {
        const customeValue = this.validisKyes(data)
        
        this.setState({
            values : customeValue
        })
    }

    calc(sign, num1, num2) {
        let rst = null
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
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

    compute(values) {
        const reg = /(\d+(?:\.\d+)?)(\+|-|×|÷)(\d+(?:\.\d+)?)/
        
        if(!reg.test(values)) {
            return values
        }

        values = values.replace(reg,(match, $1, $2, $3) => {
            return this.calc($2, $1, $3)
        })
        
        return this.compute(values)
    }

    validisKyes(data) {
        const { values } = this.state

        switch(data) {
            case "←": 
                return values.substring(0, values.length-1)      
            case "C":
                return ""
            case "=":
                return this.compute(values)
            case "%":
                return this.perc(values)
        }

        return values ? `${values}${data}` : data
    }

    perc(values) {
        // 把当前数字转换成百分比,   2% => 0.02 
        const reg = /\d+%$/
        if(!reg) {
            console.log("非法操作....")
            return 
        }

        values = values.replace("$", "")
        return parseFloat(values) / 100
    }

    render() {
        const onClick = this.onClick.bind(this) 
        const { values } = this.state

        return <div className="computed-wrap">
            <div className="computed-display">
                <div className="computed-value" id="value">{ values }</div>
            </div>
            <div className="foresee-value"></div>
            <div className="rows-wrap" >
                <ButtonGroup onClick={ onClick } keys={ column1 } />
                <ButtonGroup onClick={ onClick } keys={ column2 } />
                <ButtonGroup onClick={ onClick } keys={ column3 } />
                <ButtonGroup onClick={ onClick } keys={ column4 } />
            </div>
        </div>
    }
}