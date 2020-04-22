import React from 'react';

const User = (props) => (
	<li key={props.user.userName}>
		<p>{`${props.user.firstName} ${props.user.lastName}`}</p>
		<p>{props.user.userName}</p>
		<p>Number of game played: {props.showGamePlayed ? props.user.numGamesPlayed : '*'}</p>
	</li>
)

export default User;