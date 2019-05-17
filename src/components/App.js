import React from 'react';
import {Toolbar} from './Toolbar';
import List from './List/List';
import Editor from './Editor';
import '../style/styles.css';
//require('bootstrap');

function App() {
  return (
    <div className="container-fluid">

      <br/>

      <Toolbar />
     
      <hr/>

      <div className="row expand">
      
        <div className="col-md-3 list">
          <List />
        </div>
        <div className="col-md-9">
          <Editor />
        </div>

      </div>
    </div>
  );
}

export default App;
