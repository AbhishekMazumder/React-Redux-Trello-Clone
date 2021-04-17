import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({ text }) => {

  // calling custom styles
  const classes = useStyles();
  
	return (
		<Card className={classes.cardItem}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					{text}
				</Typography>
			</CardContent>
		</Card>
	);
};

// custom styles for list item useing material ui instruction
const useStyles = makeStyles({
	cardItem: {
		marginBottom: 8,
	},
});

export default TrelloCard;
