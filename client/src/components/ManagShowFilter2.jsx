import React, { useState } from 'react';
import Filter2Results from './Filter2Results';

const ManShowFilter2 = () => {
    const [state, setState] = useState({
        showFilter1Results: false,
        showFilter2Results: false,
        showFilter3Results: false
      });
    
    const [manageSearch, setManageSearch] = useState({
        TesterName: "",
        dateFrom: "10-10-2020",
        dateTo: "10-10-2021" 
      });
    
    function handleChange(e) {        
        setManageSearch({ ...manageSearch, [e.target.name]: e.target.value });
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

    const { showFilter2Results } = state;
    
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
                <div className="row">
                  <label className="date-input__label col-1-of-4" 
                                  htmlFor="dateFrom">Date From:</label>
                          <input className="date-input__field col-1-of-4"
                              type="date"
                              name="dateFrom" 
                              autoComplete="off"
                              id="dateFrom"
                              onChange={handleChange}/>
                  <label className="date-input__label col-1-of-4" 
                                  htmlFor="dateTo">Date To:</label>
                          <input className="date-input__field col-1-of-4"
                              type="date"
                              name="dateTo" 
                              autoComplete="off"
                              id="dateTo"
                              onChange={handleChange}/>
                </div>
                <button type="button" 
                        onClick={() => hideComponent("showFilter2Results")}
                        className="tester-name__search-button">
                        {showFilter2Results ? "Hide Results" : "Search"}
                </button>
            </form>
            
            {showFilter2Results &&      
                <Filter2Results 
                    testerName={manageSearch.TesterName}
                    dateFrom={manageSearch.dateFrom}
                    dateTo={manageSearch.dateTo}
                />
            }
        </div>
    );

}

export default ManShowFilter2;