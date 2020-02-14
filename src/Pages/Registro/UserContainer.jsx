import React, { Component } from 'react'
import axios from 'axios'

import UserForm from './registro'

// import './UserContainer.css';

export class UserContainer extends Component {

    state = {
        users:[]
    }

    componentDidMount(){
        console.log(this)
        axios.get('https://greenlifemx.herokuapp.com/users/read')
        .then(response =>{
            
            this.setState({
                users:response.data
            })
            console.log(this.state.users)
        })
    }

    renderUsers(){
        return this.state.users.map((user,i) =>{

           return <UserForm id={user._id} name={user.name} email={user.email} year={user.year} password={user.password} key={i}/>
        })
    }

    render() {
        console.log('Durante el render')
        return (
            <div className="user-container">
                {
                    this.renderUsers()
                }
            </div>
        )
    }
}

export default UserContainer
