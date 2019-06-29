import React, { Component } from 'react';
import './styles.css'
class CommentsBox extends Component {
    constructor(props){
        super(props)
        this.state = {
           text : '' ,
           comments : [] ,
           users : ['vamsi','Naveen','Sri kanth','Prasanth'],
           i : 0
        }
    }

    changeText = text =>{
        this.setState({
                text: text.target.value
        })
    }

    displayText = (e)=>{
        let t = new Date()
        let day = t.getDay()
        let hrs= t.getHours()
        let min = t.getMinutes()
        const comment_box = ( <div className='comment-box'>
                                <div className='img-user'>
                                    <img src='/assets/image.jpeg' alt='none' className='user-image'/>
                                    <span>{this.state.users[this.state.i]}</span>
                                </div>
                                <div className='user-comment'>
                                    <span>{this.state.text}</span>
                                    <span>{hrs+':'+min}</span>
                                </div>
                            </div>)
        this.setState({
            comments : this.state.comments.concat(comment_box) ,
            text : '' ,
            i : (this.state.i===3)?0:this.state.i + 1
        })
    }
    render(){
        return(
            <div>
                <div>
                    <input type='text' onChange={this.changeText}></input>
                </div>
                <button onClick={this.displayText}>Comment</button>
                {this.state.comments}
            </div> 

    );
    }
}
export default CommentsBox

