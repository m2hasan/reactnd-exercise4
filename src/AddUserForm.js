import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends Component {
  	state= {
      user:{
          firstName: '',
          lastName: '',
          userName: '',
          numGamesPlayed: 0
      },
      isUserExist: false
    }
	getuserData = () => {
    	return {
        	firstName: this.state.user.firstName,
        	lastName: this.state.user.lastName,
        	userName: this.state.user.userName,
        	numGamesPlayed: this.state.user.numGamesPlayed
        };
    }
	handleChange = (event) => {
      	const {name, value} = event.target;
      	this.setState((curState) => ({
          	user: {
              ...curState.user,
              [name]: value
            }
        }));
    }
	isButtonDisabled = () => {
    	return !(this.state.user.firstName && this.state.user.lastName && this.state.user.userName);
    }
	handleSubmit = (event) => {
      	event.preventDefault();
      	const isUserExists = this.props.isUserExists(this.state.user.userName);
        this.setState({isUserExist: isUserExists});
    	!isUserExists && this.props.addUser(this.getuserData());
    }
	render() {
    	return (
          	<div>
          		<h1>New User</h1>
        		<form onSubmit={this.handleSubmit}>
          			<div>
          				<input
          					type='text'
             				name='firstName'
          					placeholder='First name'
          					value={this.state.user.firstName}
            				onChange={this.handleChange}
          				/>
          			</div>
          			<div>
          				<input
          					type='text'
             				name='lastName'
          					placeholder='Last name'
          					value={this.state.user.lastName}
            				onChange={this.handleChange}
          				/>
          			</div>
          			<div>
          				<input
          					type='text'
             				name='userName'
          					placeholder='User name'
          					value={this.state.user.userName}
            				onChange={this.handleChange}
          				/>
          			</div>
          			<div>
          				<input
          					type='text'
             				name='numGamesPlayed'
          					placeholder='Number of games played'
          					value={this.state.user.numGamesPlayed}
            				onChange={this.handleChange}
          				/>
          			</div>
					<button disabled={this.isButtonDisabled()}>Add user</button>
          		</form>
				{this.state.isUserExist && <p>User already exists!</p>}
          	</div>
        );
    }
}

AddUserForm.propTypes = {
	addUser: PropTypes.func.isRequired,
  	isUserExists: PropTypes.func.isRequired
};

export default AddUserForm;