import React from "react";
import PlusBtn from '../Buttons/PlusBtn';

function LeftToolbar(){
    
    return (
        <div className="row">
          <div className="col-8">
            <span className="align-middle">Notes</span> 
          </div>
          <div className="col-4 text-right">
            <PlusBtn/>
          </div>
        </div>
    );
    
}

export default LeftToolbar;