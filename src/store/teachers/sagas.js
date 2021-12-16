import { takeLatest, call, put } from "redux-saga/effects";
import { getTeachers, setTeachers } from "./slice";
import teachersService from "../../services/TeachersService";

function* handleGetTeachers(action) {
  try {
    const teachers = yield call(teachersService.getTeachers, action.payload);
    yield put(setTeachers(teachers));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetTeachers() {
  yield takeLatest(getTeachers.type, handleGetTeachers);
}