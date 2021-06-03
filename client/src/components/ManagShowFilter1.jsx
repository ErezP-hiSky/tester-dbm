import React, { useState } from 'react';
import Filter1Results from './Filter1Results';

const ManShowFilter1 = () => {
    const [state, setState] = useState({
        showFilter1Results: false,
        showFilter2Results: false,
        showFilter3Results: false
      });
    
    const [manageSearch, setManageSearch] = useState({
        TesterName:"",
        date:"",
        unitSN:"",  
      });
    
    function handleChange(e) {        
        setManageSearch({ [e.target.name]: e.target.value });
    }

    const hideComponent = (name) => {
        if(!name) {
            console.log("No name was chosen, default is Filter1 Results")
            name = "showFilter1Results";
        }
        switch (name) {
          case "showFilter1Results":
              setState({ showFilter1Results: !state.showFilter1Results });
              break;
          case "showFilter2Results":
              setState({ showFilter2Results: !state.showFilter2Results });
              break;
          case "showFilter3Results":
              setState({ showFilter3Results: !state.showFilter3Results });
              break;
      
          default:
            console.log("error name");
            break;
        }
      }

    const { showFilter1Results } = state;
    // , showFilter2Results, showFilter3Results
   
    return (
        <div className="tester-manage-results">
            <h3>By Tester</h3>            
            <form className="manage-search-form">
                <div className="tester-name">
                    <p className="tester-name__p">Tester name:</p>
                    <input className="tester-name__input-field"
                        name="TesterName" required
                        autoComplete="off"
                        onChange={handleChange}/>
                    
                </div> 
                <button type="button" 
                        onClick={() => hideComponent("showFilter1Results")}
                        className="tester-name__search-button">
                        {showFilter1Results ? "Hide Results" : "Search"}
                </button>
            </form>
            
            {showFilter1Results &&      
                <Filter1Results 
                    testerName={manageSearch.TesterName}
                />
            }
        </div>
    );

}

export default ManShowFilter1;
;