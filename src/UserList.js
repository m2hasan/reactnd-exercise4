import React, {Component} from 'react';
import User from './User'

class UserList extends Component {
	state = {
  		showGamePlayed: true
  	}

  	toggleShowGamePlayed = (event) => {
		event.preventDefault();
    	this.setState((curStae) => ({
        	showGamePlayed: !curStae.showGamePlayed
     	}));
  	}
  	render() {
    	return (
      		<div>
  				<h2>Users</h2>
  				<div>
  					<button 
       					onClick={this.toggleShowGamePlayed}
       					className='show-game-played-button'>{this.state.showGamePlayed? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}</button>
  				</div>
  				<ol>
                  	{this.props.users.map((user) => (
                      	<User key={user.userName} user={user} showGamePlayed={this.state.showGamePlayed} />
                  	))}
              	</ol>
  			</div>
  		);
	}
}

export default UserList;