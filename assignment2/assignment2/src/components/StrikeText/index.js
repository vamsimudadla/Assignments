import React from 'react';
import './styles.css'

function StrikeText(props){
    return(
        <div>
        <span className='text'>{props.data}</span>
        </div>
    )
}

export default StrikeText