import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../sass/main.scss';


function ImuGpsRes({resultId}) {
    const [imuDetails, setImuDetails] = useState([]);
    const [endsOfAngDetails, setEndOfAng] = useState({
        imu_x_start: 0,
        imu_x_stop: 0,
        imu_y_start: 0,
        imu_y_stop: 0
    });
    
    useEffect(() => {
        let isRendered = true;
        // isRendered = true;
        const fetchData = async () => {
            
            await axios.get(`/imugps/findbyid/${resultId}`)
                .then(function (response) {
                // handle success
                    if (isRendered) {
                        const newData = response.data;
                        setImuDetails(newData);
                        const endsOfAng = {
                            imu_x_start: response.data['ends_of_ang'][0],
                            imu_x_stop: response.data['ends_of_ang'][1],
                            imu_y_start: response.data['ends_of_ang'][2],
                            imu_y_stop: response.data['ends_of_ang'][3]
                        }
                        setEndOfAng(endsOfAng);
                        isRendered = false;
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("There is an error");
                    console.log(error);
            });
            
            if (JSON.stringify(imuDetails) === '{}') {
                console.log("imuDetails empty");
            }
            if (imuDetails === null) {
                console.log("imuDetails null");
            }
            if (typeof Object.keys(imuDetails) === 'undefined' ) {
                console.log("imuDetails undefined");
            }
            // if (Object.keys(imuDetails).length = 0) {
            //     console.log("no keys");
            // }
            return () => {
               isRendered = false;
            };
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div  >
            <h1> Imu Gps Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {JSON.stringify(imuDetails) === '{}' ? <tr><td>empty</td></tr> :
                        Object.keys(imuDetails).map((item, i) =>
                            item === "ends_of_ang" ? null :
                                <tr key={i}>
                                    <td >{item}</td>
                                    <td >{imuDetails[item]}</td>
                                </tr>
                        )}
                    {JSON.stringify(endsOfAngDetails) === '{}' ? <tr><td>empty</td></tr> :
                        Object.keys(endsOfAngDetails).map((item, i) =>
                            item === "ends_of_ang" ? null :
                                <tr key={i}>
                                    <td >{item}</td>
                                    <td >{endsOfAngDetails[item]}</td>
                                </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default ImuGpsRes;
