import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({ text, id, index }) => {
	// calling custom styles
	const classes = useStyles();

	return (
		<Draggable draggableId={String(id)} index={index}>
			{provided => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<Card className={classes.cardItem}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								{text}
							</Typography>
						</CardContent>
					</Card>
				</div>
			)}
		</Draggable>
	);
};

// custom styles for list item useing material ui instruction
const useStyles = makeStyles({
	cardItem: {
		marginBottom: 8,
	},
});

export default TrelloCard;
