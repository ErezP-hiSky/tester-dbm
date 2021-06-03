import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/main.scss';


function Units() {

    const [allsn, setAllsn] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = () => {
            axios.get('/general-test-data/only_finished', { signal: signal })
                .then((response) => {
                    // console.log(response.data);
                    const newData = response.data;
                    const allsnArr = []
                    newData.forEach((item) => {
                        // prevent multiple appearance of sn:
                        if (!allsnArr.includes(item['unit_SN'])) {
                            allsnArr.push(item['unit_SN']);                            
                        }                        
                    });
                    allsnArr.sort();
                    setAllsn(allsnArr);
                }, (error) => {
                    console.log(error);
                });
        }
        fetchData();
        
        return function cleanup() {
            abortController.abort();
        }
        // eslint-disable-next-line
    }, []);

    const options = ["all units" ];
    
    options.push(...allsn);

    const [searchstate, setSearchstate] = useState({
        "snFrom": 0,
        "snTo": 0,
        "dateFrom": 0,
        "dateTo": 0
    })

    const history = useHistory();
    const formData = history.location.state;
    // console.log(formData);

    function handleChange(e) {
        setSearchstate({...searchstate,
            [e.target.name]: e.target.value});
    }

    function handleClick(e) {
        e.preventDefault()        
        const snFromindex = options.findIndex((item) => item === searchstate['snFrom']);
        const snToindex = options.findIndex((item) => item === searchstate['snTo']);
        const snLimited = options.slice(snFromindex, snToindex + 1);

            history.push({
            pathname: '/tests-result',
                state: {
                    searchState: searchstate,
                    allSN: snLimited,
                    testsToPresent: formData
                }
        }); 
    }

    return (
        <div>
            <h2 className="units-heading"> Choose Serial Number: </h2>
            <div className="row search-units">
                <div className="col-1-of-3 search-units--from">
                    <h3>SN From: </h3>
                    <div className="select-container--main">                        
                        <select onChange={handleChange}
                            value={searchstate['snFrom']}
                            name="snFrom"
                            className="select-container--options">
                            {options.length === 1 ?
                                <option value="empty">looking...</option> :
                                options.map((Item, i) => (
                                <option key={i} value={Item}>{Item}</option>
                            ))}
                        </select>
                        <label className="date-input__label" 
                                htmlFor="datefrom">Date From:</label>
                        <input className="date-input__field"
                            type="date"
                            name="dateFrom" 
                            autoComplete="off"
                            id="datefrom"
                            onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <h3>SN To :</h3>
                    <div className="select-container--main">
                        <select onChange={handleChange}
                            value={searchstate['snTo']}
                            name="snTo"
                            className="select-container--options">
                            {options.length === 1 ?
                                <option value="empty">looking...</option> :
                                options.map((Item, i) => (
                                <option key={i} value={Item}>{Item}</option>
                            ))}
                        </select>
                        <label className="date-input__label" 
                                htmlFor="dateto">Date To:</label>
                        <input className="date-input__field"
                            type="date"
                            name="dateTo" 
                            autoComplete="off"
                            id="dateto"
                            onChange={handleChange}/>
                    </div>
                </div>
            </div>
            
            <div >                    
                <button type="button" onClick={handleClick}
                    className="search-button choose-btn">
                    Search
                </button>          
            </div>
            
        </div>
    )
}

export default Units;
