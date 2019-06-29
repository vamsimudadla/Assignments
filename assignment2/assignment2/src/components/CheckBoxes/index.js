import React, { Component } from 'react';
import './styles.css'

class CheckBoxes extends Component {
    constructor(props){
        super(props)
        this.state = {
           cities : [] ,
           text : '' ,
           clicked : []
        }
    }

    handleBox = e =>{
        let i=0
        for(i=0;i < this.state.cities.length;i++){
            if(this.state.cities[i] === e.target.value)
            {
                this.state.cities.splice(i,1)
                this.setState({
                     cities : this.state.cities,
                     text : '' ,
                     clicked : []
                })
                return null
            }

        }
        this.setState({
            cities : this.state.cities.concat(e.target.value) ,
            text : '' ,
            clicked : []

        })
    }
    
    displayBoxes = () =>{
        let boxes = []
        for(let i=0;i<this.props.list.length;i++)
        {
            const box = (
                <div>
                <input type='checkbox' value={this.props.list[i]} onChange={this.handleBox}/> {this.props.list[i]} 
                </div>
            )
            boxes.push(box)
        }
        return boxes
    }

    displayText = () =>{
        if(this.state.cities.length !== 0)
        {
            this.setState({
                text : 'You have visited these cities' ,
                clicked : this.state.cities
            })
        }

    }

    render(){
        return(
            <div>
                    <h3>Which cities you have visited?</h3>
                    <div className='check-boxes'>
                        {this.displayBoxes()}
                    </div>
                    <button onClick={this.displayText}>SUBMIT</button>
                    <p>{this.state.text + ' ' + this.state.clicked}</p>
            </div>
        );
    }

}

export default CheckBoxes
