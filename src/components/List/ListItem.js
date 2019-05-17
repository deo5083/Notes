import React from 'react';
import '../../style/styles.css';
//import classnames from '../node_modules/classnames';

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

  componentDidMount(){
    this.setState({
      title: this.props.title
    });
  }
  

  handleClick(element){
    
    const items = document.getElementsByName('items');

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('clickedItem');
      
    }
    
    element.currentTarget.classList.add('clickedItem');


  }
  render(){
    //let classes = classnames("list-item", {active: this.state.active});
    let classes = "list-item";
      //classes = "list-item clickedItem";
  

    return (
    

      <div name="items" className={classes} onClick={this.handleClick}>
          <div className="card-body">
              {this.state.title}
          </div>
      </div>
    );

  }
  
}

export default ListItem;