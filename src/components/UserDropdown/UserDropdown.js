import React from "react";
import UserDropdownItem from './UserDropdownItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import UserList from '../user-list';

class UserDropdown extends React.Component{
    constructor(props) {
        super(props);
        this.setSelected = this.setSelected.bind(this);
        this.state={
            selectedUser: "Select user"
        };
    }

    setSelected(e){
        this.setState({
            selectedUser: e.currentTarget.innerHTML 
        });
    }
    
    createUserList(){
        return this.props.users.map((user) => {
            
            return (
                
                <UserDropdownItem user={user.first +" "+ user.last} key={user.id} handleClick={this.setSelected}/>
            );
        } );
        
    }
    
    render(){

        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.selectedUser}
                </button>

                <div className="dropdown-menu dropdown-menu-right">
                    {this.createUserList()}
                </div>
            </div>
        );
    }
    
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserDropdown);