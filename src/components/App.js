import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';

import TrelloList from './TrelloList';
import TrelloActionBtn from './TrelloActionBtn'

class App extends Component {

	onDragEnd = () =>{
		// TODO: reordering logic
	}

	render() {
		const { lists } = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="App">
					<h2>Trello Clone</h2>
					<div style={styles.listContainer}>
						{lists.map(list => (
							<TrelloList
								listID={list.id}
								key={list.id}
								title={list.title}
								cards={list.cards}
							/>
						))}
						<TrelloActionBtn list />
					</div>
				</div>
			</DragDropContext>
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
