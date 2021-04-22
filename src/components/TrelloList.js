import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloCard from './TrelloCard';
import TrelloActionBtn from './TrelloActionBtn';

const TrelloList = ({ title, cards, listID, index }) => {
	return (
		<Draggable draggableId={String(listID)} index={index}>
			{provided => (
				<ListContainer
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
				>
					<Droppable droppableId={String(listID)}>
						{provided => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
								<h4>{title}</h4>
								{cards.map((card, index) => (
									<TrelloCard
										index={index}
										key={card.id}
										text={card.text}
										id={card.id}
									/>
								))}
								{provided.placeholder}
								<TrelloActionBtn listID={listID} />
							</div>
						)}
					</Droppable>
				</ListContainer>
			)}
		</Draggable>
	);
};

const ListContainer = styled.div`
	background-color: #dfe3e6;
	border-radius: 3px;
	width: 300px;
	padding: 8px;
	height: 100%;
	margin-right: 10px;
`;

export default TrelloList;
