import React from 'react';
import ListItem from './ListItem';
import Search from '../Search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectNote} from '../../actions/index';

class List extends React.Component {
  
  generateList(){
    if(this.props.user){

      return this.props.user.notes.map((note, i) => {
        return (
            <ListItem title={note.title} key={i} handleClick={() => this.props.selectNote(note)}/> 
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
            
            <div className="scrollable">
              
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

function matchDispatchToProps(dispatch){
  return bindActionCreators({
      selectNote: selectNote
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(List);