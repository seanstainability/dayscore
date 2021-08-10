import axios from "axios";
import shortId from "shortid";
import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  throttle,
} from "redux-saga/effects";

import {
  ADD_SCORE_FAILURE,
  ADD_SCORE_REQUEST,
  ADD_SCORE_SUCCESS,
  generateDummyScore,
  LOAD_SCORES_FAILURE,
  LOAD_SCORES_REQUEST,
  LOAD_SCORES_SUCCESS,
  REMOVE_SCORE_FAILURE,
  REMOVE_SCORE_REQUEST,
  REMOVE_SCORE_SUCCESS,
} from "../reducers/score";
import { ADD_SCORE_TO_ME, REMOVE_SCORE_OF_ME } from "../reducers/user";

function loadScoresAPI(data) {
  return axios.get("/api/scores", data);
}

function* loadScores(action) {
  try {
    // const result = yield call(loadScoresAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOAD_SCORES_SUCCESS,
      data: generateDummyScore(10),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SCORES_FAILURE,
      data: err.response.data,
    });
  }
}

function addScoreAPI(data) {
  return axios.post("/api/score", data);
}

function* addScore(action) {
  try {
    // const result = yield call(addScoreAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_SCORE_SUCCESS,
      data: {
        id,
        title: action.data.title,
        score: action.data.score,
      },
    });
    yield put({
      type: ADD_SCORE_TO_ME,
      data: id,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_SCORE_FAILURE,
      data: err.response.data,
    });
  }
}

function removeScoreAPI(data) {
  return axios.delete("/api/score", data);
}

function* removeScore(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_SCORE_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_SCORE_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_SCORE_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadScores() {
  yield throttle(5000, LOAD_SCORES_REQUEST, loadScores);
}

function* watchAddScore() {
  yield takeLatest(ADD_SCORE_REQUEST, addScore);
}

function* watchRemoveScore() {
  yield takeLatest(REMOVE_SCORE_REQUEST, removeScore);
}

export default function* scoreSaga() {
  yield all([
    fork(watchLoadScores),
    fork(watchAddScore),
    fork(watchRemoveScore),
  ]);
}
