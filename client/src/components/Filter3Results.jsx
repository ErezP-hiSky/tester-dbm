import React, {useState, useEffect} from 'react';
import PieChart from './PieChart.jsx';
import HistogramChart from './HistogramChart.jsx';
import Spinner from './layout/Spinner';
import PropTypes from 'prop-types';
import axios from 'axios';

const Filter2Results = ({ manageSearch }) => {
    
    const { testerName, dateFrom, dateTo, uniType, freqBand } = manageSearch;

    const [loading, setLoading] = useState(false);
    const [passUnits, setPassUnits] = useState([]);
    const [failUnits, setFailUnits] = useState([]);
    const [testsFailedCount, setTestsFailedCount] = useState([]);
    const testsNames = ["firstprep", "imuGps", "TcxoCal", "EirpTx",
        "p1dB", "TxCal", "EirpRx", "RxGainNF", "full_link", "gpsfix"];

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        const res1 = await axios.get(`/general-test-data/only_pass/tester/${testerName}/date_from/${dateFrom}/date_to/${dateTo}/antenna_type/${uniType}/frequency_band/${freqBand}`);
        setPassUnits(res1.data);
        const res2 = await axios.get(`/general-test-data/only_fail/tester/${testerName}/date_from/${dateFrom}/date_to/${dateTo}/antenna_type/${uniType}/frequency_band/${freqBand}`);
        setFailUnits(res2.data);
        var testsFailed = [];
        var i;
        for (i = 0; i < testsNames.length; i++) {
            var unitsFailInTest = 
            await axios.get(
                `/general-test-data/only_fail/tests/${testsNames[i]}/tester/${testerName}/date_from/${dateFrom}/date_to/${dateTo}/antenna_type/${uniType}/frequency_band/${freqBand}`
                );
            testsFailed.push(unitsFailInTest.data.length);
        }
        setTestsFailedCount(testsFailed);
        setLoading(false);
        }
        fetchData();
        //eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div className="tester-manage-filter1-results">
                <p>Results for Tester {testerName}</p>
                <p>Date: from: {dateFrom} to: {dateTo}</p>
                <p>Unit Type: {uniType}, Band: {freqBand}</p>
                <div className="FailsChart">
                    <PieChart 
                        failUnits={failUnits.length}
                        passUnits={passUnits.length}
                    />
                    <HistogramChart 
                        categories={testsNames}
                        dataCounted={testsFailedCount}
                    />
                </div>
        </div>
        );
    }
}

Filter2Results.propTypes = {
    manageSearch: PropTypes.object.isRequired,
}

export default Filter2Results;
