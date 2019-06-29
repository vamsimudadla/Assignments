import React from 'react';
import './styles1.css'
function RoundCornerImage(props){
    return(
        <div>
            <img src={props.image} alt='' className='round-corner-image' />
        </div>
    );
}
 export default RoundCornerImage