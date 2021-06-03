import React, { useContext, useEffect } from 'react';
import DBMText from './DBMText';
import ShapedBtns from './shapedBtns';
import AuthContext from '../context/auth/authContext';
import '../sass/main.scss';


function Home() {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <div className="home-page" >
                <DBMText />
                <ShapedBtns />
            </div>
        </div>
    );
}


export default Home;
