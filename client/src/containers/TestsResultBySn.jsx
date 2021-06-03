import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Spinner from '../components/layout/Spinner.jsx';
import '../sass/main.scss';
import P1dbCompare from '../components/tests_compare/p1dBcompare.jsx';
import FullLinkCompare from '../components/tests_compare/fullLinkCompare';

function TestsbySn() {
    const history = useHistory();
    const formData = history.location.state;
    
    const testsToPresent = formData.testsToPresent;
    const snLimited = formData.allSN;
    const snLength = formData.allSN.length - 1;
    const date_from = formData.searchState.dateFrom;
    const date_to = formData.searchState.dateTo;
    
    const [testsBySNdate, setTestsBySNdate] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(testsToPresent.testsChosen);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/general-test-data/findbyUnitSNrangeNdate/
                        ${snLimited[0]}/${snLimited[snLength]}/dateFrom/${date_from}/dateTo/${date_to}`);
            setTestsBySNdate(res.data);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <h3 className="units-heading">Tests result by serial number :</h3>
                <h5>test presented:</h5>
                {testsToPresent.testsChosen.map((test,i) => <p key={i}>{test}</p>)}
                <h2>P1db Compare: </h2>
                <p>{testsBySNdate.length} results</p>
                {typeof(testsBySNdate) === 'undefined' ? <h1>Waiting ...</h1> :
                    testsBySNdate.map((item, index) => (
                        <P1dbCompare
                        key={index}
                        idToShow = {item['_id']}
                        unitSN = {item['unit_SN']}
                        />
                    ))
                
                }
                <h2>Full link compare:</h2>
                {testsBySNdate.map((item, index) =>
                    <FullLinkCompare
                        key={index}
                        idToShow = {item['_id']}
                        unitSN = {item['unit_SN']} />
                )}
            </div>
            );
    }
}

export default TestsbySn;
