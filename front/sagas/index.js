import { all, fork } from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";
import scoreSaga from "./score";
import actionSaga from "./action";

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(userSaga),
    fork(scoreSaga),
    fork(actionSaga),
  ]);
}
