import React, { Component } from 'react'
import TextBody from '../TextBody'

class TextBox extends Component{

    constructor(props){
        super(props)
        this.state= {
            value:'',
            msg: '' ,
            hint: ''
        }
    }

    changeText = text =>{
        this.setState({
                value: text.target.value
        })
    }

    displayText = text =>{
        this.setState({
            msg: 'Hello ' + this.state.value + ', Have a nice day' ,
            value: '' ,
            hint: ''
        })
    }

    hintMsg = text =>{
        this.setState({
            hint: 'Username should be in A-Za-z'

        })
    }
    
    render(){
        return(
            <div>
                <input type='text' onChange={this.changeText} onFocus={this.hintMsg}></input>
                <p>{this.state.hint}</p>
                <button onClick={this.displayText}>GREET</button>
                <TextBody name={this.state.msg} />
            </div> 

    );
    }

}
export default TextBox