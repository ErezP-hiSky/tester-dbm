import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Spinner from './layout/Spinner';
import PieChart from './PieChart.jsx';
import HistogramChart from './HistogramChart.jsx';
import '../sass/main.scss';


function ShowAll() {
  const [loading, setLoading] = useState(false);
  const [passUnits, setPassUnits] = useState([]);
  const [failUnits, setFailUnits] = useState([]);
  const [testsFailedCount, setTestsFailedCount] = useState([]);
  const testsNames = ["firstprep", "imuGps", "TcxoCal", "EirpTx",
    "p1dB", "TxCal", "EirpRx", "RxGainNF", "full_link", "gpsfix"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res1 = await axios.get(`/general-test-data/only_pass`);
      setPassUnits(res1.data);
      const res2 = await axios.get(`/general-test-data/only_fail`);
      setFailUnits(res2.data);
      var testsFailed = [];
      var i;
      for (i = 0; i < testsNames.length; i++) {
        var unitsFailInTest = await axios.get(`/general-test-data/only_fail/tests/${testsNames[i]}`);
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
      <div >
        <h3>All units</h3>
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

export default ShowAll;
