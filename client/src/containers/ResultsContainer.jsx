
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/main.scss';
import gear from '../images/gear_2699.png';
import AmbientTempRes from '../components/tests_results/Ambient_Temps.jsx';
import GeneralTestDataRes from '../components/tests_results/general_details.jsx';
import CurrentConsumption from '../components/tests_results/currentCons.jsx';
import ManDetailsDataRes from '../components/tests_results/Manufactur_Details.jsx';
import GuiDataRes from '../components/tests_results/GuiTextbxData.jsx';
import LedRes from '../components/tests_results/LedStatus.jsx';
import PicVersionRes from '../components/tests_results/PicVersion.jsx';
import PingStatRes from '../components/tests_results/PingStatus.jsx';
import FirstPrepStatRes from '../components/tests_results/FirstPrepStatus.jsx';
import TempTestRes from '../components/tests_results/TempTest.jsx';
import TempChangesRes from '../components/tests_results/TempChanges.jsx';
import ImuGpsRes from '../components/tests_results/ImuGps.jsx';
import TcxoCalRes from '../components/tests_results/TcxoCal.jsx';
import P1dbRes from '../components/tests_results/P1dbResults.jsx';
import FLdLRes from '../components/tests_results/FullLinkDL.jsx';
import FLuLRes from '../components/tests_results/FullLinkUL.jsx';
import FLCrossPollRes from '../components/tests_results/FLcrossPoll.jsx';
import FLGeneralRes from '../components/tests_results/FullLinkGeneral.jsx';
import P1dbPwrGraph from '../components/tests_results/p1dbPwrRes.jsx';
import Spinner from '../components/layout/Spinner';
import axios from 'axios';


function Results() {
    const history = useHistory();    
    const formData = history.location.state;
    const unitSN = formData.techUnitSN;
    
    const [idFound, setIdFound] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(`/general-test-data/findbyUnitSN/${unitSN}`);            
            setIdFound(res.data[0]['_id']);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    const [state, setState] = useState({
        name: "React",
        showTest1: false,
        showTest2: false,
        showTest3: false,
        showTest4: false,
        showTest5: false,
        showTest6: false,
        showTest7: false,
        showTest8: false,
        showTest9: false,
        showTest10: false,
        showTest11: false,
        showTest12: false,
        showTest13: false,
        showTest14: false,
        showTest15: false,
        showTest16: false,
        showTest17: false,
        showTest18: false,
        showTest19: false
    });

    function hideComponent(name) {
        // console.log(name);
        switch (name) {
            case "showTest1":
                setState({ showTest1: !state.showTest1 });
                break;
            case "showTest2":
                setState({ showTest2: !state.showTest2 });
                break;
            case "showTest3":
                setState({ showTest3: !state.showTest3 });
                break;
            case "showTest4":
                setState({ showTest4: !state.showTest4});
                break;
            case "showTest5":
                setState({ showTest5: !state.showTest5 });
                break;
            case "showTest6":
                setState({ showTest6: !state.showTest6 });
                break;
            case "showTest7":
                setState({ showTest7: !state.showTest7 });
                break;
            case "showTest8":
                setState({ showTest8: !state.showTest8 });
                break;
            case "showTest9":
                setState({ showTest9: !state.showTest9 });
                break;
            case "showTest10":
                setState({ showTest10: !state.showTest10 });
                break;
            case "showTest11":
                setState({ showTest11: !state.showTest11 });
                break;
            case "showTest12":
                setState({ showTest12: !state.showTest12 });
                break;
            case "showTest13":
                setState({ showTest13: !state.showTest13});
                break;
            case "showTest14":
                setState({ showTest14: !state.showTest14 });
                break;
            case "showTest15":
                setState({ showTest15: !state.showTest15 });
                break;
            case "showTest16":
                setState({ showTest16: !state.showTest16 });
                break;
            case "showTest17":
                setState({ showTest17: !state.showTest17 });
                break;
            case "showTest18":
                setState({ showTest18: !state.showTest18 });
                break;
            case "showTest19":
                setState({ showTest19: !state.showTest19 });
                break;
            default:
                console.log("error name");
                break;
        }
        window.scrollTo(0, document.body.scrollHeight);
    }

    const {
        showTest1,
        showTest2,
        showTest3,
        showTest4,
        showTest5,
        showTest6,
        showTest7,
        showTest8,
        showTest9,
        showTest10,
        showTest11,
        showTest12,
        showTest13,
        showTest14,
        showTest15,
        showTest16,
        showTest17,
        showTest18,
        showTest19
    } = state;
    
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div className="all-results">
                <p className="m-top-2">Unit SN - <strong>{unitSN}</strong> - results page</p>
                <img className="gear-img" src={gear} alt="result-gear"/>
                <div className="hide-btns">
                    <button className="btn1" onClick={() => hideComponent("showTest1")}>
                        <span>Click to general test details</span>
                    </button>
                    <button className="btn2" onClick={() => hideComponent("showTest2")}>
                        <span>Click to Ambient Temperature</span>
                    </button>
                    <button className="btn3" onClick={() => hideComponent("showTest3")}>
                        <span>Click to Current Consumption</span>
                    </button>
                    <button className="btn4" onClick={() => hideComponent("showTest4")}>
                        <span>Click to Manufacturer Details</span>
                    </button>
                    <button className="btn5" onClick={() => hideComponent("showTest5")}>
                        <span>Click to Data user input in ui</span>
                    </button>
                    <button className="btn6" onClick={() => hideComponent("showTest6")}>
                        <span>Click to Led status</span>
                    </button>
                    <button className="btn7" onClick={() => hideComponent("showTest7")}>
                        <span>Click to PIC version</span>
                    </button>
                    <button className="btn8" onClick={() => hideComponent("showTest8")}>
                        <span>Click to Ping Status</span>
                    </button>
                    <button className="btn9" onClick={() => hideComponent("showTest9")}>
                        <span>Click to First prep results</span>
                    </button>
                    <button className="btn10" onClick={() => hideComponent("showTest10")}>
                        <span>Click to Temperature Test Results</span>
                    </button>
                    <button className="btn11" onClick={() => hideComponent("showTest11")}>
                        <span>Click to temperature changes</span>
                    </button>
                    <button className="btn12" onClick={() => hideComponent("showTest12")}>
                        <span>Click to Imu Gps</span>
                    </button>
                    <button className="btn13" onClick={() => hideComponent("showTest13")}>
                        <span>Click to Tcxo Calibration</span>
                    </button>
                    <button className="btn14" onClick={() => hideComponent("showTest14")}>
                        <span>Click to p1db results</span>
                    </button>
                    <button className="btn15" onClick={() => hideComponent("showTest15")}>
                        <span>Click to Full Link DownLink</span>
                    </button>
                    <button className="btn16" onClick={() => hideComponent("showTest16")}>
                        <span>Click to Full Link UpLink</span>
                    </button>
                    <button className="btn17" onClick={() => hideComponent("showTest17")}>
                        <span>Click to FL cross poll</span>
                    </button>
                    <button className="btn18" onClick={() => hideComponent("showTest18")}>
                        <span>Click to FL General Results</span>
                    </button>

                    <button className="btn19" onClick={() => hideComponent("showTest19")}>
                        <span>Click to p1db graphs</span>
                    </button>
                </div>

                <h2>The Results are: </h2>
                {showTest1 &&
                <GeneralTestDataRes 
                    resultId={idFound}
                />}
                
                {showTest2 &&
                    <AmbientTempRes 
                    resultId={idFound}
                />}
                
                {showTest3 &&
                    <CurrentConsumption 
                    resultId={idFound}
                />}
                
                {showTest4 &&
                    <ManDetailsDataRes 
                    resultId={idFound}
                />}
                
                {showTest5 &&
                    <GuiDataRes 
                    resultId={idFound}
                />}
                
                {showTest6 &&
                    <LedRes 
                    resultId={idFound}
                />}
                
                {showTest7 &&
                    <PicVersionRes 
                    resultId={idFound}
                />}
                
                {showTest8 &&
                    <PingStatRes 
                    resultId={idFound}
                />}
                
                {showTest9 &&
                    <FirstPrepStatRes 
                    resultId={idFound}
                    />}
                
                {showTest10 &&
                    <TempTestRes 
                    resultId={idFound}
                    />}
                
                {showTest11 &&
                    <TempChangesRes 
                    resultId={idFound}
                    />}
                
                {showTest12 &&
                    <ImuGpsRes 
                    resultId={idFound}
                    />}
                
                {showTest13 &&
                    <TcxoCalRes 
                    resultId={idFound}
                    />}
                
                {showTest14 &&
                    <P1dbRes 
                    resultId={idFound}
                    />}
                
                {showTest15 &&
                    <FLdLRes 
                    resultId={idFound}
                    />}
                
                {showTest16 &&
                    <FLuLRes 
                    resultId={idFound}
                    />}
                
                {showTest17 &&
                    <FLCrossPollRes 
                    resultId={idFound}
                    />}
                
                {showTest18 &&
                    <FLGeneralRes 
                    resultId={idFound}
                    />}
                
                {showTest19 &&
                    <P1dbPwrGraph 
                    resultId={idFound}
                    />}
                
                <br />
            </div>
        );
    }
};

export default Results;
