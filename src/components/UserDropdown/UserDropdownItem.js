import React from "react";

class UserDropdownItem extends React.Component{
    render(){

        return (
           
            <button className="dropdown-item">{this.props.user}</button>
          
        );
    }
    
}

export default UserDropdownItem;