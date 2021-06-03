import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => 
    <Fragment>
        <img src={spinner} alt="Loading..." 
            style={ { width: '200px', margin: 'auto', display: 'block', backgroundColor : '#fefff2'} } />
    </Fragment>

export default Spinner;