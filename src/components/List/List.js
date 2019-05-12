import React from 'react';
import ListItem from './ListItem';
import Search from '../Search';

function List() {
  return (
    <div className="">

        <Search/>
        
        <hr/>
        
        <div className="scrollable">
          
          <ListItem title="test"/>
          <ListItem title="test"/>
          <ListItem title="test"/>
          <ListItem title="test"/>

        </div>

    </div>
  );
}

export default List;