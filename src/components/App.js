import React from 'react';
import {Toolbar} from './Toolbar';
//import '../style/App.css';

function App() {
  return (
    <div className="container-fluid">

      <br/>

      <Toolbar />
     
      <hr/>

      <div className="row">
        <div className="col-md-3">
          col-4
        </div>
        <div className="col-md-9">
          col-8
        </div>

      </div>
    </div>
  );
}

export default App;
