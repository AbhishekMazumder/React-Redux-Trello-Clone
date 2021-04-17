import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrelloList from './TrelloList';
import TrelloActionBtn from './TrelloActionBtn'

class App extends Component {
	render() {
		const { lists } = this.props;
		return (
			<div className="App">
				<h2>Trello Clone</h2>
				<div style={styles.listContainer}>
					{lists.map(list => (
						<TrelloList key={list.id} title={list.title} cards={list.cards} />
					))}
					<TrelloActionBtn list />
				</div>
			</div>
		);
	}
}

const styles = {
	listContainer: {
		display: 'flex',
	},
};

const mapStateToProps = state => {
	return {
		lists: state.lists,
	};
};

export default connect(mapStateToProps)(App);
