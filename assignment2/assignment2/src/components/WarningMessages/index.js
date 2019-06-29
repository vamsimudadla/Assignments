import React from 'react';
import './styles.css'
function WarningMessages(props){
    return(
        <div className={props.block}>
            <span className='warn-text'>{props.warn_msg}</span>
         </div>
    )
}

export default WarningMessages