import React from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/main.scss';

function SearchOptionsPage() {
    const history = useHistory();

    function handleTestClick(e) {
        e.preventDefault()
        history.push('/techByTest');
    }

    function handleSNClick(e) {
        e.preventDefault()
        history.push('/technician'); 
    }

    return (
        <div>
            <h1> Technician Page </h1>
            <h2> What do you want to search ? </h2>
            <div>
              <button type="button" onClick={handleSNClick} className="search-button">
                Serial number
              </button>          
            </div>
            <div>
              <button type="button" onClick={handleTestClick} className="search-button">
                Test name
              </button>          
          </div>
        </div>
    )
}

export default SearchOptionsPage;
