import React from "react";
import UserDropdownItem from './UserDropdownItem';

class UserDropdown extends React.Component{
    render(){

        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.username}
                </button>

                <div className="dropdown-menu dropdown-menu-right">
                    <UserDropdownItem user="user"/>
                    <UserDropdownItem user="user"/>
                    <UserDropdownItem user="user"/>
                    <UserDropdownItem user="user"/>
                    <UserDropdownItem user="user"/>
                </div>
            </div>
        );
    }
    
}

export default UserDropdown;