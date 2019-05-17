import React from "react";

class UserDropdownItem extends React.Component{
    render(){

        return (
           
            <button className="dropdown-item" onClick={this.props.handleClick}>{this.props.user}</button>
          
        );
    }
    
}

export default UserDropdownItem;