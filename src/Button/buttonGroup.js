import React from "react"
import Button from "./button"

export default class ButtonGroup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onClick } = this.props
        return <div className="rows-wrap" ><div className="rows">
            <Button value="C" className="bg" onClick={ onClick }  />
            <Button value="7" onClick={ onClick }  />
            <Button value="4" onClick={ onClick } />
            <Button value="1" onClick={ onClick } />
            <Button value="%" onClick={ onClick } />
        </div>
        <div className="rows">    
            <Button value="÷" className="bg" onClick={ onClick } />
            <Button value="8" onClick={ onClick } />
            <Button value="5" onClick={ onClick } />
            <Button value="2" onClick={ onClick } />
            <Button value="0" onClick={ onClick } />
        </div>
        <div className="rows">
            <Button value="×" className="bg" onClick={ onClick } />
            <Button value="9" onClick={ onClick }  />
            <Button value="6" onClick={ onClick } />
            <Button value="3" onClick={ onClick } />
            <Button value="." onClick={ onClick } />       
        </div>
        <div className="rows">
            <Button value="←" className="bg" onClick={ onClick } />
            <Button value="-" className="bg" onClick={ onClick } />
            <Button value="+" className="bg" onClick={ onClick } />
            <Button value="=" className="compoted" onClick={ onClick } />
        </div></div>
    }
}