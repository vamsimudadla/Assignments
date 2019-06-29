import React, { Component } from 'react';
import './styles.css'
var t
class StopWatch extends Component {
    constructor(props){
        super(props)
        this.state = {
            min : 0 ,
            sec : 0 ,
            timer_on : 0,
            pre_lap_time : 0 ,
            lap_times : [] ,
            counter : 0
        }
    }

    startCount = ()=>{
        if(this.state.sec===59)
        {
            this.setState({
                min : this.state.min + 1 ,
                sec : 0
            })
        }
        else{
            this.setState({
                sec : this.state.sec + 1
            })
        }
        t = setTimeout(this.startCount,1000)
    }

    startTime = ()=>{
        if(!this.state.timer_on){
            this.setState({
                timer_on : 1
            })
            this.startCount()
        }
    }

    stopTime = ()=>{
        clearTimeout(t)
        this.setState({
            timer_on : 0
        })
    }

    resetTime = ()=>{
        clearTimeout(t)
        this.setState({
            timer_on : 0 ,
            min : 0,
            sec : 0,
            pre_lap_time : 0 ,
            lap_times : [] ,
            counter : 0
        })
    }

    lapTime = ()=>{
            let t = this.state.min*60 + this.state.sec
            let time_diff = t - this.state.pre_lap_time
            const val = (<div className='lap-times'>
                            <span className='left-margin'>{'#' + (this.state.counter+1)}</span>
                            <span>{ Math.floor(time_diff/60) + ':' + time_diff%60}</span>
                            <span className='right-margin'>{Math.floor(t/60) + ':' + t%60}</span>
                         </div>)
             this.setState({
                     counter : this.state.counter + 1,
                     pre_lap_time : t,
                     lap_times : this.state.lap_times.concat(val)
               })
           
    }

    render(){
        return (
            <div>
                <div className='watch-div'>
                <div className='stop-watch'>
                    {this.state.min + ':' + this.state.sec}
                </div>
                </div>
                <div className='rev-laps'>
                    {this.state.lap_times}
                </div>
                <div className='time-buttons'>
                    <button onClick={this.startTime}>START</button>
                    <button onClick={this.stopTime}>STOP</button>
                    <button onClick={this.resetTime}>RESET</button>
                    <button onClick={this.lapTime}>LAP</button>
                </div>
            </div>
        );
    }

}

export default StopWatch
