import React from 'react';
import '../../style/styles.css';

class ListItem extends React.Component {

  render(){
    return (
      <div className="list-item" tabIndex="1">
          <div className="card-body">
              {this.props.title}
          </div>
      </div>
    );

  }
  
}

export default ListItem;