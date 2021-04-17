import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({ title, cards }) => {
	return (
		<div style={styles.Container}>
			<h4>{title}</h4>
			{cards.map(card => (
				<TrelloCard text={card.text} />
			))}
		</div>
	);
};

const styles = {
	Container: {
		backgroundColor: '#dfe3e6',
		borderRadius: 3,
		width: 300,
		padding: 8,
		margin: 10,
	},
};

export default TrelloList;
