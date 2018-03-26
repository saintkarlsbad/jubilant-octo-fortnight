import React from 'react';
import {connect} from 'react-redux';
import {getUser} from './../../ducks/users'


class Private extends React.Component {

    componentDidMount() {
        this.props.getUser(); 
    }

    bankBalance() {
        return '$' + Math.floor((Math.random()+1)*1000) + '.00';
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <h1>Community Bank</h1><hr />
                <h4>Account information:</h4>
                { user ? <img className='avatar' src={user.img} /> : null }
                <p>Username: { user ? user.user_name : null }</p>
                <p>ID: { user ? user.auth_id : null }</p>
                <h4>Available balance: { user ? this.bankBalance() : null } </h4>
                <a href='http://localhost:3535/auth/logout'><button>Log out</button></a>
            </div> 
        )
    }
}

//mapping redux store-state to props-object of this component
function mapStateToProps(state) {
    return {
        user: state.user //merged w/ props object for this component
    }
}

export default connect( mapStateToProps, {getUser} )(Private)

//redux is a global app state manager!
//reducer is like the gatekeeper to the store
//action-creator is a function 
//react sends(dispatches) an action {type, payload} to the store
//the reducer takes in state and an action (^)
//recucer returns a new state and updates the object