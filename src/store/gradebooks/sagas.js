import { takeLatest, call, put } from "redux-saga/effects";
import { getGradebooks, setGradebooks,addGradebooks, getGradebook, setGradebook,createGradebook,createStudent ,createComment,addComment,deleteComment} from "./slice";
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
    console.log('gradebook',gradebook);
    yield put(setGradebook(gradebook));
  } catch (error) {
    console.log(error);
  }
}

function* handleCreateGradebook(action) {
  try {
    const gradebook = yield call(gradebooksService.createGradebook, action.payload.gradebook);
    if (action.payload.onSuccess) {
      yield call(action.payload.onSuccess);
    }
  } catch (error) {
    console.error(error);
  }
}

function* handleCreateStudent(action) {
  try {
    const student = yield call(gradebooksService.createStudent, action.payload.gradebook_id,action.payload.student);

    if (action.payload.onSuccess) {
      yield call(action.payload.onSuccess);
    }
  } catch (error) {
    console.error(error);
  }
}

function* handleCreateComment(action) {
  try {
    const comment = yield call(gradebooksService.createComment, action.payload.gradebook_id,action.payload.comment);
    yield put(addComment(comment));  
  } catch (error) {
    console.error(error);
  }
}

function* handleDeleteComment(action) {
  try {
    const comment = yield call(gradebooksService.deleteComment, action.payload);
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

export function* watchCreateGradebook() {
  yield takeLatest(createGradebook.type, handleCreateGradebook);
}

export function* watchCreateStudent() {
  yield takeLatest(createStudent.type, handleCreateStudent);
}

export function* watchCreateComment() {
  yield takeLatest(createComment.type, handleCreateComment);
}

export function* watchDeleteComment() {
  yield takeLatest(deleteComment.type, handleDeleteComment);
}