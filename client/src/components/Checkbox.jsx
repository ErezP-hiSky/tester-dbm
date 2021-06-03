import React from 'react';

function Chckbox(props) {
   return (
        <div>
            <label>
              <Checkbox
                checked={props.state.checked}
                onChange={props.handleCheckboxChange}
              />
              <span>{props.labelText}</span>
            </label>
        </div>
    );
}


export default Chckbox;
