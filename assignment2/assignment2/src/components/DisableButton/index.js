import React, { Component } from 'react';

class DisableButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : 0 ,
        }
    }

    handleBox = () =>{
        if(this.state.value===0){
            this.setState({
                value : 1 ,
        })
        }
        else
            this.setState({
                value : 0 ,
            })
    }

    alertFunction = ()=>{
        if(this.state.value===0)
            alert('I am working')
    }

    render(){
        return(
            <div>
                <input type='checkbox' value='Disabled' onChange={this.handleBox}/> Disabled
                <button onClick={this.alertFunction}>SUBMIT</button>
            </div>
        );
    }
}

export default DisableButton