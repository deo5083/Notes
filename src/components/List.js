import React from 'react';
import ListItem from './ListItem';

function List() {
  return (
    <div className="list">
        Notes
        <hr/>
        
        <div className="scrollable">
          

          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>

        </div>

    </div>
  );
}

export default List;