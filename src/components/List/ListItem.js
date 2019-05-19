import React from 'react';
import '../../style/styles.css';
import {connect} from 'react-redux';


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
      ,itemClass: "list-item"
      ,active: false
    };
    this.handleClick = this.handleClick.bind(this);
    
  }

  componentDidUpdate(prevProps){
    if (this.props.title !== prevProps.title) {
      this.updateState();
      this.removeActiveClass();
    }
  }

  componentDidMount(){
    this.updateState();
  }

  updateState(){
    this.setState({
      title: this.props.title
    });
  }

  removeActiveClass(){
    const items = document.getElementsByName('items');
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('clickedItem');
    }
  }

  handleClick(element){
    
    this.removeActiveClass();
    
    element.currentTarget.classList.add('clickedItem');

    this.props.handleClick();

  }

  render(){
  
    return (
    
      <div name="items" className="list-item" onClick={this.handleClick}>
          <div className="card-body">
              {this.state.title}
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

export default connect(mapStateToProps)(ListItem);