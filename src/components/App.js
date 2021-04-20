import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloList from './TrelloList';
import TrelloActionBtn from './TrelloActionBtn';
import { sort } from '../actions';




const AppContainer = styled.div`
	display: flex;
`;

class App extends Component {
	onDragEnd = result => {
		// TODO: reordering logic
		const { destination, source, draggableId } = result;
		if (!destination) {
			return;
		}
		this.props.dispatch(
			sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId
			)
		);
	};

	render() {
		const { lists } = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="App">
					<h2>Trello Clone</h2>
					<AppContainer>
						{lists.map(list => (
							<TrelloList
								listID={list.id}
								key={list.id}
								title={list.title}
								cards={list.cards}
							/>
						))}
						<TrelloActionBtn list />
					</AppContainer>
				</div>
			</DragDropContext>
		);
	}
}

const mapStateToProps = state => {
	return {
		lists: state.lists,
	};
};

export default connect(mapStateToProps)(App);
