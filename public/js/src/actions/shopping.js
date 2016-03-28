import ACTION from '../constants/shopping';
import axios from 'axios';

//------------------------- WAITING ------------------------
export function wait(waiting) {
	return {
		type: ACTION.SHOPPING_WAITING_STATE,
		payload: {waiting}
	};
}
//--------------------- END OF WAITING ---------------------

//------------------------- CREATE -------------------------
function startCreateRequest(newArticle) {
	return {
		type: ACTION.REQUEST_CREATE_START,
		payload: {newArticle}
	};
}

function completedCreateRequest(confirm) {
	return {
		type: ACTION.REQUEST_CREATE_COMPLETED,
		payload: {confirm}
	};
}

function errorCreateRequest(error) {
	return {
		type: ACTION.REQUEST_CREATE_ERROR,
		payload: {error}
	};
}

export function createArticle(article) {
	return (dispatch, getState) => {

		dispatch(startCreateRequest(article));
		dispatch(wait(true));

		axios.post('/api/shopping/articles', {article})
			.then((result) => {
				dispatch(completedCreateRequest(result));
				dispatch(wait(false));
			})
			.catch((error) => {
				dispatch(errorCreateRequest(error));
				dispatch(wait(false));
			});

	};
}
//-------------------- END OF CREATE -----------------------

//------------------------- READ -------------------------
function startReadRequest() {
	return {
		type: ACTION.REQUEST_READ_START
	};
}

function completedReadRequest(confirm) {
	return {
		type: ACTION.REQUEST_READ_COMPLETED,
		payload: {confirm}
	};
}

function errorReadRequest(error) {
	return {
		type: ACTION.REQUEST_READ_ERROR,
		payload: {error}
	};
}

export function readArticles() {
	return (dispatch, getState) => {

		dispatch(startReadRequest());
		dispatch(wait(true));

		axios.get('/api/shopping/articles', {})
			.then((result) => {
				dispatch(completedReadRequest(result));
				dispatch(wait(false));
			})
			.catch((error) => {
				dispatch(errorReadRequest(error));
				dispatch(wait(false));
			});

	};
}
//-------------------- END OF READ -------------------------

//------------------------- UPDATE -------------------------
function startUpdateRequest(updateArticle) {
	return {
		type: ACTION.REQUEST_UPDATE_START,
		payload: {updateArticle}
	};
}

function completedUpdateRequest(confirm) {
	return {
		type: ACTION.REQUEST_UPDATE_COMPLETED,
		payload: {confirm}
	};
}

function errorUpdateRequest(error) {
	return {
		type: ACTION.REQUEST_UPDATE_ERROR,
		payload: {error}
	};
}

export function updateArticle(article) {
	return (dispatch, getState) => {

		dispatch(startUpdateRequest(article));
		dispatch(wait(true));

		axios.put(`/api/shopping/articles/${article.cid}`, {article})
			.then((result) => {
				dispatch(completedUpdateRequest(result));
				dispatch(wait(false));
			})
			.catch((error) => {
				dispatch(errorUpdateRequest(error));
				dispatch(wait(false));
			});

	};
}
//-------------------- END OF DELETE -------------------------

//------------------------- DELETE -------------------------
function startDeleteRequest(deleteArticle) {
	return {
		type: ACTION.REQUEST_DELETE_START,
		payload: {deleteArticle}
	};
}

function completedDeleteRequest(confirm) {
	return {
		type: ACTION.REQUEST_DELETE_COMPLETED,
		payload: {confirm}
	};
}

function errorDeleteRequest(error) {
	return {
		type: ACTION.REQUEST_DELETE_ERROR,
		payload: {error}
	};
}

export function deleteArticle(cid) {
	return (dispatch, getState) => {

		dispatch(startDeleteRequest(cid));
		dispatch(wait(true));

		axios.delete(`/api/shopping/articles/${cid}`, {})
			.then((result) => {
				dispatch(completedDeleteRequest(result));
				dispatch(wait(false));
			})
			.catch((error) => {
				dispatch(errorDeleteRequest(error));
				dispatch(wait(false));
			});

	};
}
//-------------------- END OF DELETE -----------------------
