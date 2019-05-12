import React from "react";
import TrashBtn from '../Buttons/TrashBtn';
import UserDropdown from '../UserDropdown/UserDropdown';

function RightToolbar(){
    
    return (
        <div className="row">
        
          <div className="col-4 text-left">
            <TrashBtn/>
          </div>
          <div className="col-8 text-right">
            <span className="align-middle">
                <UserDropdown username="[username]"/>
            </span> 
          </div>

        </div>
    );
    
}

export default RightToolbar;