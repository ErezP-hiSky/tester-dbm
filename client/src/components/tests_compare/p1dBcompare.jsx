import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../sass/main.scss';

function P1dbCompare(props) {

    const [dateDifMin, setDateDifMin] = useState();
    const [test_date, setTest_date] = useState();
    const [isDataFlag, setIsDataFlag] = useState(true);

    const [unit_p1db, setUnit_p1db] = useState({
        "sn": 29200100000050,
        "freq": [13500, 14000, 14500],
        "p1db_pout": [51.48, 60.8, 66.76],
        "p1db_tpc": [26, 35, 39],
        "RF Temperature": [25, 26.2, 32],
        "during": "4:34",
        "date-of-test": "Sun 2 Mar 2021 15:46:23"
    });

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData =  () => {
            axios.get('/p1db-results/findbyid/' + props.idToShow, { signal: signal })
                .then((response) => {
                    // console.log(`response.data is --> ${response}`);
                    // console.log(response.data);
                    if (response.data.length === 0) {
                        console.log("p1db - there was no data");
                        setIsDataFlag(false);
                    } else {
                        
                        const start_date = new Date(response.data['start_time']);
                        const end_date = new Date(response.data['end_time']);
                        
                        var {test_day, test_month} = getDayNMonth(start_date);
                        
                        setTest_date(`${test_day}  ${start_date.getDate()} 
                        ${test_month} ${start_date.getFullYear()}  
                        ${start_date.getHours()}:${start_date.getMinutes()}:${start_date.getSeconds()}`);
                        
                        var dateDif = new Date(end_date - start_date);
                        setDateDifMin(`${dateDif.getMinutes()}:${dateDif.getSeconds()}`);

                        setUnit_p1db ( prevState => ({
                            "sn": props.unitSN,
                            "freq": response.data['freqs'],
                            "p1db_pout": response.data['p1db_pout'],
                            "p1db_tpc": response.data['p1db'],
                            "RF_Temperature": response.data['p1db_Rftemp']                            
                        }));                        
                    }                    
                })
                .catch( (error) => {
                    console.log(error);
                });
        }        
        fetchData();

        return function cleanup() {
            abortController.abort();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="test-table test-table--p1db"> 
        {isDataFlag ? 
            <table className="results-table results-table--p1db">
                <thead>
                    <tr>
                        <td>Serial Number</td>
                        <td>Results</td>
                        <td>During [Min.]</td>
                        <td>Date Of Test</td>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>{unit_p1db["sn"]}</td>
                        <td>
                        
                            <table className="results-table--inside">
                                <thead>
                                    <tr>
                                        {Object.keys(unit_p1db).map((item, i) => 
                                            item === "sn" ? null :
                                            item === "during" ? null :
                                            item === "date-of-test" ? null :
                                            <th key={i}>{item}</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{unit_p1db["freq"][0]}</td>
                                        <td>{unit_p1db["p1db_pout"][0]}</td>
                                        <td>{unit_p1db["p1db_tpc"][0]}</td>
                                        <td>{typeof(unit_p1db['RF_Temperature']) === 'undefined' ? "waiting..." :
                                                unit_p1db["RF_Temperature"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>{unit_p1db["freq"][1]}</td>
                                        <td>{unit_p1db["p1db_pout"][1]}</td>
                                        <td>{unit_p1db["p1db_tpc"][1]}</td>
                                        <td>{typeof(unit_p1db['RF_Temperature']) === 'undefined' ? "waiting...":
                                                unit_p1db["RF_Temperature"][1]}</td>
                                    </tr>
                                    <tr>
                                        <td>{unit_p1db["freq"][2]}</td>
                                        <td>{unit_p1db["p1db_pout"][2]}</td>
                                        <td>{unit_p1db["p1db_tpc"][2]}</td>
                                        <td>{typeof(unit_p1db['RF_Temperature']) === 'undefined' ? "waiting...":
                                                unit_p1db["RF_Temperature"][2]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        
                        </td>
                        <td>{dateDifMin}</td>
                        <td>{test_date}</td>
                    </tr>
                </tbody>
            </table>
            : <p className="test-table__p">id {props.idToShow} p1db results is empty</p>}
        </div>
        );
}

function getDayNMonth(dataDate) {
    var test_day = "";
    var test_month = "";
    switch (dataDate.getDay()) {
        case 0:
            test_day = "Sun";
            break;
        case 1:
            test_day = "Mon";
            break;
        case 2:
            test_day = "Tue";
            break;
        case 3:
            test_day = "Wed";
            break;
        case 4:
            test_day = "Thu";
            break;
        case 5:
            test_day = "Fri";
            break;
        case 6:
            test_day = "Sat";
            break;
        default:
            test_day = "wrong day";
            break;    

    }
    
    switch (dataDate.getMonth()) {
        case 0:
            test_month = "Jan";
            break;
        case 1:
            test_month = "Feb";
            break;
        case 2:
            test_month = "Mar";
            break;
        case 3:
            test_month = "Apr";
            break;
        case 4:
            test_month = "May";
            break;
        case 5:
            test_month = "Jun";
            break;
        case 6:
            test_month = "Jul";
            break;
        case 7:
            test_month = "Aug";
            break;
        case 8:
            test_month = "Sep";
            break;
        case 9:
            test_month = "Oct";
            break;
        case 10:
            test_month = "Nov";
            break;
        case 11:
            test_month = "Dec";
            break;
        default:
            test_month = "wrong day";
            break;    

    }

    return {test_day, test_month};
}

export default P1dbCompare;