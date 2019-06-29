import React from 'react';
import './styles.css'
function NormalImage(props){
    return(
        <div>
            <img src={props.image} alt='' className='image' />
        </div>
    );
}
 export default NormalImage