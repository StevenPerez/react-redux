import ACTION from '../constants/shopping';

const initialState = {
	waiting: false,
	articles: []
};

export function shopping(state = initialState, action) {
	const {type, payload} = action;

	switch (type) {
		//------------------ CREATE ------------------
		case ACTION.REQUEST_CREATE_START:
			return {
				...state,
				...payload
			};

		case ACTION.REQUEST_CREATE_COMPLETED:
			return {
				...state,
				...payload
			};

		case ACTION.REQUEST_CREATE_ERROR:
			return {
				...state,
				...payload
			};
		//------------------ READ --------------------
		case ACTION.REQUEST_READ_START:
			return {
				...state,
				...payload
			};

		case ACTION.REQUEST_READ_COMPLETED:
			return {
				...state,
				...payload,
				articles: _.get(payload, 'confirm.data', [])
			};

		case ACTION.REQUEST_READ_ERROR:
			return {
				...state,
				...payload
			};
		//------------------ UPDATE ------------------
		case ACTION.REQUEST_UPDATE_START:
			return {
				...state,
				...payload
			};

		case ACTION.REQUEST_UPDATE_COMPLETED:
			return {
				...state,
				...payload
			};

		case ACTION.REQUEST_UPDATE_ERROR:
			return {
				...state,
				...payload
			};
		//------------------ DELETE ------------------
		case ACTION.REQUEST_DELETE_START:
			return {
				...state,
				...payload
			};

		case ACTION.REQUEST_DELETE_COMPLETED:
			return {
				...state,
				...payload
			};

		case ACTION.REQUEST_DELETE_ERROR:
			return {
				...state,
				...payload
			};
		//------------------ WAITING -----------------
		case ACTION.SHOPPING_WAITING_STATE:
			return {
				...state,
				...payload
			};

		default:
			return state;
	}
}
