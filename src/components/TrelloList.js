import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloCard from './TrelloCard';
import TrelloActionBtn from './TrelloActionBtn';

const TrelloList = ({ title, cards, listID }) => {
	return (
		<Droppable droppableId={String(listID)}>
			{provided => (
				<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
					<h4>{title}</h4>
					{cards.map((card, index) => (
						<TrelloCard
							index={index}
							key={card.id}
							text={card.text}
							id={card.id}
						/>
					))}
					<TrelloActionBtn listID={listID} />
					{provided.placeholder}
				</ListContainer>
			)}
		</Droppable>
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
