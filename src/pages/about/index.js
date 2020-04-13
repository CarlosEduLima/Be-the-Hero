import React from 'react';
import './style.css';
import {withRouter} from 'react-router-dom';
function About(){
    return(
        <div className='main'>
            <div className='content'>
            <p>This is a simple web aplication made with React.js. The porpose is...</p>
            </div>
        </div>
    )
}
export default withRouter(About);