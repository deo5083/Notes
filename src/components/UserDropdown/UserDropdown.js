import React from "react";
import UserDropdownItem from './UserDropdownItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../../actions/index';


class UserDropdown extends React.Component{
    
    createUserList(){
        return this.props.users.map((user) => {
            return (
                
                <UserDropdownItem user={user.first +" "+ user.last} key={user.id} handleClick={() => this.props.selectUser(user)}/>
            );
        });
    }
    
    render(){
        let active;
        if(this.props.activeUser){
            active = (
                this.props.activeUser.first + " " + this.props.activeUser.last 
            );
        } else {
            active = "Select user";
        }


        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {active}
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
        ,activeUser: state.activeUser
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDropdown);