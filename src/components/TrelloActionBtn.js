import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

class TrelloActionBtn extends Component {
	state = {
		formOpen: false,
		text: '',
	};

	openForm = () => {
		this.setState({
			formOpen: true,
		});
	};

	closeForm = () => {
		this.setState({
			formOpen: false,
		});
	};

	handleInputChange = e => {
		this.setState({
			text: e.target.value,
		});
	};

	renderAddButton = () => {
		const { list } = this.props;
		const buttonText = list ? 'Add another list' : 'Add another card';
		const buttonTextOpacity = list ? 1 : 0.5;
		const buttonTextBg = list ? 'rgba(0,0,0,0.15)' : 'inherit';
		const buttonTextColor = list ? 'white' : 'inherit';
		return (
			<div
				onClick={this.openForm}
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

	renderForm = () => {
		const { list } = this.props;
		const placeholder = list
			? 'Enter list title'
			: 'Enter a title for the the card';
		const btnTitle = list ? 'Add List' : 'Add Card';
		return (
			<div>
				<Card
					style={{
						overflow: 'hidden',
						minHeight: 80,
						minWidth: 272,
						padding: '6px 8px 2px',
					}}
				>
					<Textarea
						placeholder={placeholder}
						autoFocus
						onBlur={this.closeForm}
						value={this.state.text}
						onChange={this.handleInputChange}
						style={{
							resize: 'none',
							width: '100%',
							outline: 'none',
							border: 'none',
						}}
					/>
				</Card>
				<div style={styles.formBtnGrp}>
					<Button
						variant="contained"
						style={{ color: 'white', backgroundColor: '#5aac44' }}
					>
						{btnTitle}
					</Button>
					<Icon style={{ marginLeft: 8, pointer: 'cursor' }}>close</Icon>
				</div>
			</div>
		);
	};

	render() {
		return this.state.formOpen ? this.renderForm() : this.renderAddButton();
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
	formBtnGrp: {
		marginTop: 8,
		display: 'flex',
		alignItems: 'center',
	},
};

export default TrelloActionBtn;
