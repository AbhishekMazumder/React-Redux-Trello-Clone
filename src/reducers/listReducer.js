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
		default:
			return state;
	}
};

export default listReducer;
