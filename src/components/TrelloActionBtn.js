import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';


class TrelloActionBtn extends Component {
	renderAddButton = () => {
		const { list } = this.props;
		const buttonText = list ? 'Add another list' : 'Add another card';
		const buttonTextOpacity = list ? 1 : 0.5;
		const buttonTextBg = list ? 'rgba(0,0,0,0.15)' : 'inherit';
		const buttonTextColor = list ? 'white' : 'inherit';
		return (
			<div
				style={{
          ...styles.openForBtnGrp,
					opacity: buttonTextOpacity,
					color: buttonTextColor,
					background: buttonTextBg,
				}}
			>
				<AddIcon color="primary" />
				<p>{buttonText}</p>
			</div>
		);
	};

	render() {
		return this.renderAddButton();
	}
}

const styles = {
	openForBtnGrp: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		borderRadius: 3,
		height: 36,
		width: 272,
		paddingLeft: 10,
	},
};

export default TrelloActionBtn;
