import { takeLatest, call, put } from "redux-saga/effects";
import { getGradebooks, setGradebooks } from "./slice";
import gradebooksService from "../../services/GradebooksService";

function* handleGetGradebooks() {
  try {
    const gradebooks = yield call(gradebooksService.getGradebooks);
    yield put(setGradebooks(gradebooks));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetGradebooks() {
  yield takeLatest(getGradebooks.type, handleGetGradebooks);
}