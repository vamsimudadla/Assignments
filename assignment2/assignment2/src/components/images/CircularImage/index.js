import React from 'react';
import './styles.css'
function CircularImage(props){
    return(
        <div>
            <img src={props.image} alt='' className='circular-image' />
        </div>
    );
}
 export default CircularImage