import React from 'react';
import ListItem from './ListItem';
import Search from '../Search';
import {connect} from 'react-redux';

class List extends React.Component {
  
  generateList(){
    if(this.props.user){

      return this.props.user.notes.map((note, i) => {
        return (
            <ListItem title={note.title} key={i}/> //need to update component. it doesnt create a new one
        );
      });
      
    } else {
      return "";
    }
      
  }
  
  render() {
      return (
        <div className="">
    
            <Search/>
            
            <hr/>
            
            <div className="scrollable" id="list">
              
              {this.generateList()}
              
    
            </div>
    
        </div>
      );
  }
  
}

function mapStateToProps(state){
  return {
      user: state.activeUser
  }
}

export default connect(mapStateToProps)(List);