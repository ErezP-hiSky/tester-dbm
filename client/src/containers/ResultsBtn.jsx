import React, { useState } from "react";

import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

function SHowHideBtn() {
    
    const [state, setState] = useState({
        name: "React",
        showHideDemo1: false,
        showHideDemo2: false,
        showHideDemo3: false
    });
    
  

    function hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHideDemo1":
                setState({ showHideDemo1: !state.showHideDemo1 });
                break;
            case "showHideDemo2":
                setState({ showHideDemo2: !state.showHideDemo2 });
                break;
            case "showHideDemo3":
                setState({ showHideDemo3: !state.showHideDemo3 });
                break;
            default:
                console.log("error name");
                break;
        }
    }


    const { showHideDemo1, showHideDemo2, showHideDemo3 } = state;
    return (
        <div>
            {showHideDemo1 && <Demo1 />}
            <hr />
            {showHideDemo2 && <Demo2 />}
            <hr />
            {showHideDemo3 && <Demo3 />}
            <hr />
            <div>
                <button onClick={() => hideComponent("showHideDemo1")}>
                    Click to hide Demo1 component
        </button>
                <button onClick={() => hideComponent("showHideDemo2")}>
                    Click to hide Demo2 component
        </button>
                <button onClick={() => hideComponent("showHideDemo3")}>
                    Click to hide Demo3 component
        </button>
            </div>
        </div>
    );
  
}

export default SHowHideBtn;
