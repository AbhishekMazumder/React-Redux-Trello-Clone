import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 3;

const initialState = [
	{
		title: 'ToDo',
		id: 0,
		cards: [
			{ id: 0, text: 'create a static list & Static card' },
			{ id: 1, text: 'use materialUI to render list & card' },
			{ id: 2, text: 'use Styled Components' },
		],
	},
	{
		title: 'In Progress',
		id: 1,
		cards: [
			{ id: 0, text: 'React Firebase Crud' },
			{ id: 1, text: 'use semanticUI to build contactlist' },
		],
	},
];

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards: [],
				id: listID,
			};
			listID += 1;
			return [...state, newList];

		case CONSTANTS.ADD_CARD:
			const newCard = {
				text: action.payload.text,
				id: cardID,
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
