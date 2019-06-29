import React, { Component } from 'react';
class DropDown extends Component {
    constructor(props){
        super(props)
        this.state = {
           value : '' ,
           text : '' ,
           clicked : '' ,
           text1 : ''

        }
    }

    displayDrop = () =>{
        let drop_downs = []
        for(let i=0;i<this.props.list.length;i++)
        {
            const drop_down = (
                <option value={this.props.list[i]}> {this.props.list[i]}  </option> 
            )
            drop_downs.push(drop_down)
        }
        return drop_downs
    }

    handleChange = (e) =>{
        this.setState({
            value : e.target.value ,
            text : '' ,
            clicked : '' ,
            text1 : ''

        })
    }

    displayText = () =>{
        this.setState({
            text : 'You are from' ,
            clicked : this.state.value,
            text1 : 'State'
        })
    }

    render(){
        return(
            <div>
                    <div className='drop-downs'>
                        <select name='select-your-state'  onChange = {this.handleChange}>
                            {this.displayDrop()}
                        </select>
                    </div>
                    <button onClick={this.displayText}>SUBMIT</button>
                    <p>{this.state.text + ' ' + this.state.clicked + ' '+ this.state.text1}</p>
            </div>
        );
    }
}

export default DropDown