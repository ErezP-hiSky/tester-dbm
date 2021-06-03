import React, { useState } from 'react';
import ShowAll from '../components/ManagShowAll.jsx';
import ManShowFilter1 from '../components/ManagShowFilter1.jsx';
import ManShowFilter2 from '../components/ManagShowFilter2.jsx';
import ManShowFilter3 from '../components/ManagShowFilter3.jsx';
import '../sass/main.scss';


function Management() {

  const [state, setState] = useState({
    showAll: true,
    showFilter1: false,
    showFilter2: false,
    showFilter3: false
  });

  const hideComponent = (name) => {
    switch (name) {
      case "showAll":
          setState({ showAll: !state.showAll });
          break;
      case "showFilter1":
          setState({ showFilter1: !state.showFilter1 });
          break;
      case "showFilter2":
          setState({ showFilter2: !state.showFilter2 });
          break;
      case "showFilter3":
          setState({ showFilter3: !state.showFilter3 });
          break;
  
      default:
        console.log("error name");
        break;
    }
  }

  const { showAll, showFilter1, showFilter2, showFilter3 } = state;

  return (
    <div >
        <h1>Management Page</h1>
        <div className="sidenav">
          <button href="#" className="sidenav__about" 
            onClick={() => hideComponent("showAll")}>All</button>
          <button href="#" className="sidenav__blog" 
            onClick={() => hideComponent("showFilter1")}>Tester Filter</button>
          <button href="#" className="sidenav__projects" 
            onClick={() => hideComponent("showFilter2")}>Date Filter</button>
          <button href="#" className="sidenav__contact" 
            onClick={() => hideComponent("showFilter3")}>Type Filter</button>
        </div>
        {showAll && 
          <ShowAll />
        }
        {showFilter1 && 
          <ManShowFilter1 />
        }
        {showFilter2 && 
          <ManShowFilter2 />
        }
        {showFilter3 && 
          <ManShowFilter3 />
        }
    </div>
  );
  
}

export default Management;
