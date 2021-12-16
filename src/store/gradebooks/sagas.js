import { takeLatest, call, put } from "redux-saga/effects";
import { getGradebooks, setGradebooks,addGradebooks, getGradebook, setGradebook } from "./slice";
import gradebooksService from "../../services/GradebooksService";

function* handleGetGradebooks(action) {
  try {
    const gradebooks = yield call(gradebooksService.getGradebooks, action.payload.name, action.payload.page);
if(action.payload?.page>1){
  yield put(addGradebooks(gradebooks));
}else{
  yield put(setGradebooks(gradebooks));
}
  } catch (error) {
    console.error(error);
  }
}

function* handleGetGradebook(action) {
  try {
    const gradebook = yield call(gradebooksService.getGradebook, action.payload);
    yield put(setGradebook(gradebook));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetGradebooks() {
  yield takeLatest(getGradebooks.type, handleGetGradebooks);
}

export function* watchGetGradebook() {
  yield takeLatest(getGradebook.type, handleGetGradebook);
}