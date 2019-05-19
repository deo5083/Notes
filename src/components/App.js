import React from 'react';
import {Toolbar} from './Toolbar';
import List from './List/List';
import Editor from './Editor';
import '../style/styles.css';

require('bootstrap/dist/css/bootstrap.css');

require('font-awesome/css/font-awesome.min.css');
require('codemirror/lib/codemirror.css');
require('froala-editor/css/froala_editor.pkgd.css');
require('froala-editor/css/froala_style.min.css');

require('codemirror/lib/codemirror.js');
require('codemirror/mode/xml/xml.js');



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
