import { takeLatest, call, put } from "redux-saga/effects";
import { getTeachers, setTeachers,getTeacher, setTeacher } from "./slice";
import teachersService from "../../services/TeachersService";

function* handleGetTeachers(action) {
  try {
    const teachers = yield call(teachersService.getTeachers, action.payload);
    yield put(setTeachers(teachers));
  } catch (error) {
    console.error(error);
  }
}

function* handleGetTeacher(action) {
  try {
    const teacher = yield call(teachersService.getTeacher, action.payload);
    yield put(setTeacher(teacher));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetTeachers() {
  yield takeLatest(getTeachers.type, handleGetTeachers);
}
export function* watchGetTeacher() {
  yield takeLatest(getTeacher.type, handleGetTeacher);
}