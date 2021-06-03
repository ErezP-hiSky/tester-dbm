import React, { useState } from 'react';
import Filter3Results from './Filter3Results';

const ManShowFilter3 = () => {
    const [state, setState] = useState({
        showFilter1Results: false,
        showFilter2Results: false,
        showFilter3Results: false
      });
    
    const [manageSearch, setManageSearch] = useState({
        testerName: "",
        dateFrom: "10-10-2020",
        dateTo: "10-10-2021",
        uniType: "dynamic",
        freqBand: "Ka"
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

    const { showFilter3Results } = state;
    
    return (
        <div className="tester-manage-results">
            <h3>By Tester</h3>            
            <form className="manage-search-form">
                <div className="tester-name">
                    <p className="tester-name__p">Tester name:</p>
                    <input className="tester-name__input-field"
                        name="testerName" required
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
                <div className="row">
                  <label className="date-input__label col-1-of-4" 
                                  htmlFor="dateFrom">Unit type:</label>
                          <select name="uniType" 
                            onChange={handleChange} 
                            className="date-input__combox col-1-of-4" id="uniType">
                            <option value="dynamic">Dynamic</option>
                            <option value="static">Static</option>
                          </select>
                  <label className="date-input__label col-1-of-4" 
                                  htmlFor="dateTo">Frequency band:</label>
                          <select name="freqBand" 
                            onChange={handleChange} 
                            className="date-input__combox col-1-of-4" id="freqBand">
                            <option value="Ka">Ka</option>
                            <option value="Ku">Ku</option>
                          </select>
                </div>
                <button type="button" 
                        onClick={() => hideComponent("showFilter3Results")}
                        className="tester-name__search-button">
                        {showFilter3Results ? "Hide Results" : "Search"}
                </button>
            </form>
            
            {showFilter3Results &&      
                <Filter3Results 
                    manageSearch={manageSearch}
                />
            }
        </div>
    );

}

export default ManShowFilter3;