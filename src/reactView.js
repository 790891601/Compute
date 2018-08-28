import React from "react"
import ReactDOM from "react-dom"
import ButtonGroup from "./Button"

class ReactView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value : "",
            foresee : ""   //预见值
        }
    } 

    onClick(val) {
        const customeValue = this.validValue(val)
        
        this.setState({
            value : customeValue
        })
    }

    validValue(val) {
        const { value } = this.state

        let customeValue = ""

        if(val === -1) {
            return value.substring(0, value.length-1)
        }

        if(!val) {
            customeValue = ""
            return customeValue
        }

        return customeValue = value ? `${value}${val}` : val
    }

    render() {
        return <div className="computed-wrap">
            <div className="computed-display">
                <div className="computed-value" id="value">{ this.state.value }</div>
            </div>
            <div className="foresee-value">{ this.state.foresee }</div>
            <ButtonGroup onClick={ this.onClick.bind(this) } />
        </div>
    }
}

export default function(app) {
    ReactDOM.render(<ReactView />, app)
}