import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/main.scss';

function TechByTest() {
  const history = useHistory();

  const [chosenTests, setChosenTests] = useState([]);

  const handleCheckboxChange = event => {
    const inputChecked = event.target.checked;
    const inputVal = event.target.name;
    // console.log(`inputChecked ${inputChecked}, inputVal ${inputVal}`);
    if (inputChecked) {
          setChosenTests([
            ...chosenTests,
            inputVal
          ]);
    }
  }

  function handleClick (e) {
    e.preventDefault()
    history.push({
      pathname: '/units',
      state: {
        testsChosen: chosenTests
      }
    }); 
  }

  return (
    <div className="tech-container" >
      <h1 className="header">Search by test</h1>
        
        <form className="searchSN-form" action="/search" method="POST">
          
        <h3> Select tests: </h3>

            <div className="tests-input">
              <p className="tests-header">tests :</p>
              
              <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="firstPrepRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">First-General-Prep-test</span>
            </label>
            
            <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="imuGpsRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">IMU-test</span>
            </label>
            
            <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="TcxoCalRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">TCXO-calibration</span>
            </label>
            
            <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="p1dbRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">P1db-test</span>
            </label>
            
            <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="curConsRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">Current-consumption</span>
            </label>
            
            <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="fulLinkRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">FullLink</span>
            </label>
            
            <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="crossPollRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">cross-poll</span>
            </label>
            
            <label className="checkbox-lbl">
                <input
                  type="checkbox"
                  name="generalRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">General results</span>
            </label>
                        
                          
            </div>
            <br />
           
          
          <div>
            <button type="button" onClick={handleClick} className="search-button">
              Search
            </button>          
          </div>
        </form>
    </div>
  );
}

export default TechByTest;
