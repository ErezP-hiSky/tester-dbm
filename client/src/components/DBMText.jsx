import React from 'react';
import '../sass/main.scss';
import logo from '../images/hiskyLogo.PNG';


function DBMText() {
    return (
        <div className="db-text">
            <img src={logo} alt="hisky-logo" className="db-text__logo"/>
            <h1 className="db-text__header">DBM - Data Base Management</h1>
            <div className="hisky-db-text">
                <p>
                    hiSky is testing all of its products. 
                    This is a system that manages the results in real time, 
                    show to the user what is the current status and what should they pay attention to. 
                </p>
                <br/>
                <p>
                    This is a very important system also for the technicians because 
                    they need to observe what are the main fails a terminal or terminals are having.
                </p>
            </div>
            
        </div>
        
    );
}

export default DBMText;
