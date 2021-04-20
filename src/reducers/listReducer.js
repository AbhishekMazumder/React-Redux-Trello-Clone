import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 5;

const initialState = [
	{
		title: 'ToDo',
		id: `list-${0}`,
		cards: [
			{ id: `card-${0}`, text: 'create a static list & Static card' },
			{ id: `card-${1}`, text: 'use materialUI to render list & card' },
			{ id: `card-${2}`, text: 'use Styled Components' },
		],
	},
	{
		title: 'In Progress',
		id: `list-${1}`,
		cards: [
			{ id: `card-${3}`, text: 'React Firebase Crud' },
			{ id: `card-${4}`, text: 'use semanticUI to build contactlist' },
		],
	},
];

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards: [],
				id: `list-${listID}`,
			};
			listID += 1;
			return [...state, newList];

		case CONSTANTS.ADD_CARD:
			const newCard = {
				text: action.payload.text,
				id: `card-${cardID}`,
			};
			cardID += 1;
			const newState = state.map(list => {
				if (list.id === action.payload.listID) {
					return {
						...list,
						cards: [...list.cards, newCard],
					};
				} else {
					return list;
				}
			});
			return newState;
		default:
			return state;
	}
};

export default listReducer;
