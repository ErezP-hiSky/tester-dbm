import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/main.scss';

function TechPage() {
  const history = useHistory();

  const [state, setState] = useState({
    name:"",
    date:"",
    unitSN:"",  
  });

  const handleChange = (e) => setState({[e.target.name]: e.target.value});

  function handleClick (e) {
    e.preventDefault()
    history.push({
      pathname: '/results',
      state: {
        techName: state.name,
        testDate: state.date,
        techUnitSN: state.unitSN
      }
    }); 
  }

  return (
    <div className="tech-container" >
      <h1 className="header">Technician Page</h1>
      <h2 className="header-sub"> Search by Serial Number: </h2>
        <form className="searchSN-form" action="/search" method="POST">
          <div className="search-fields">
            
            <br />
           <div className="name-input">
              <p className="name">unit SN :</p>
              <input className="name-input-field"
                name="unitSN" 
                autoComplete="off"
                onChange={handleChange}/>
          </div>
          <br/>
            <button type="button" onClick={handleClick} className="search-button">
              Search
            </button>          
          </div>
        </form>
    </div>
  );
}

export default TechPage;
