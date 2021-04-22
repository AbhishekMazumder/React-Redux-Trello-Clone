import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloList from './TrelloList';
import TrelloActionBtn from './TrelloActionBtn';
import { sort } from '../actions';

const AppContainer = styled.div`
	display: flex;
`;

class App extends Component {
	onDragEnd = result => {
		const { destination, source, draggableId, type } = result;
		if (!destination) {
			return;
		}
		this.props.dispatch(
			sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId,
				type
			)
		);
	};

	render() {
		const { lists } = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="App">
					<h2>Trello Clone</h2>
					<Droppable droppableId="all-lists" direction="horizontal" type="list">
						{provided => (
							<AppContainer
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{lists.map((list, index) => (
									<TrelloList
										listID={list.id}
										key={list.id}
										title={list.title}
										cards={list.cards}
										index={index}
									/>
								))}
								{provided.placeholder}
								<TrelloActionBtn list />
							</AppContainer>
						)}
					</Droppable>
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
