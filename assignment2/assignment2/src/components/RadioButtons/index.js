import React, { Component } from 'react';
import './styles.css'
class RadioButtons extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : '' ,
            data : '' ,
            text : ''
        }
    }

    handleButton = event =>{
        this.setState({
            value : event.target.value,
            text : '' ,
            data : ''
        })
    }

    displayText = (e) =>{
        this.setState({
            data : this.state.value ,
            text : 'Your favourite Dessert is '
        })
    }


    render() {
        return(
            <div className='radio-buttons'>
                <h3>What is your favourite Ice Cream</h3>
                
                <div>
                    <input type='radio' value='Vannila' checked={this.state.value==='Vannila'} onChange={this.handleButton} />Vannila
                </div>
                <div>
                    <input type='radio' value='Butterscotch' checked={this.state.value==='Butterscotch'} onChange={this.handleButton}/>Butterscotch
                </div>
                <div>    
                    <input type='radio' value='Chocolate' checked={this.state.value==='Chocolate'} onChange={this.handleButton}/>Chocolate
                </div>
                <div>    
                    <input type='radio' value='Strawberry' checked={this.state.value==='Strawberry'} onChange={this.handleButton}/>Strawberry
                </div>
                
                <button onClick={this.displayText}>Submit</button>
                <p>{this.state.text + this.state.data.toUpperCase()}</p>
            </div>
        );
    }
}

export default RadioButtons

