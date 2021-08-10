import shortId from "shortid";
import faker from "faker";

import produce from "../util/produce";

export const initialState = {
  mainScores: [],
  hasMoreScores: true,
  loadScoresLoading: false,
  loadScoresDone: false,
  loadScoresError: null,
  addScoreLoading: false,
  addScoreDone: false,
  addScoreError: null,
  removeScoreLoading: false,
  removeScoreDone: false,
  removeScoreError: null,
};

export const generateDummyScore = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      title: faker.lorem.sentence(),
      score: 1,
    }));

export const LOAD_SCORES_REQUEST = "LOAD_SCORES_REQUEST";
export const LOAD_SCORES_SUCCESS = "LOAD_SCORES_SUCCESS";
export const LOAD_SCORES_FAILURE = "LOAD_SCORES_FAILURE";

export const ADD_SCORE_REQUEST = "ADD_SCORE_REQUEST";
export const ADD_SCORE_SUCCESS = "ADD_SCORE_SUCCESS";
export const ADD_SCORE_FAILURE = "ADD_SCORE_FAILURE";

export const REMOVE_SCORE_REQUEST = "REMOVE_SCORE_REQUEST";
export const REMOVE_SCORE_SUCCESS = "REMOVE_SCORE_SUCCESS";
export const REMOVE_SCORE_FAILURE = "REMOVE_SCORE_FAILURE";

export const addScore = (data) => ({
  type: ADD_SCORE_REQUEST,
  data,
});

const dummyScore = (data) => ({
  id: data.id,
  User: {
    id: 1,
    nickname: "sean",
  },
  title: data.title,
  score: data.score,
});

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_SCORES_REQUEST:
        draft.loadScoresLoading = true;
        draft.loadScoresDone = false;
        draft.loadScoresError = null;
        break;
      case LOAD_SCORES_SUCCESS:
        draft.loadScoresLoading = false;
        draft.loadScoresDone = true;
        draft.mainScores = action.data.concat(draft.mainScores);
        draft.hasMoreScores = draft.mainScores.length < 50;
        break;
      case LOAD_SCORES_FAILURE:
        draft.loadScoresLoading = false;
        draft.loadScoresError = action.error;
        break;
      case ADD_SCORE_REQUEST:
        draft.addScoreLoading = true;
        draft.addScoreDone = false;
        draft.addScoreError = null;
        break;
      case ADD_SCORE_SUCCESS:
        draft.addScoreLoading = false;
        draft.addScoreDone = true;
        draft.mainScores.unshift(dummyScore(action.data));
        break;
      case ADD_SCORE_FAILURE:
        draft.addScoreLoading = false;
        draft.addScoreError = action.error;
        break;
      case REMOVE_SCORE_REQUEST:
        draft.removeScoreLoading = true;
        draft.removeScoreDone = false;
        draft.removeScoreError = null;
        break;
      case REMOVE_SCORE_SUCCESS:
        draft.removeScoreLoading = false;
        draft.removeScoreDone = true;
        draft.mainScores = draft.mainScores.filter((v) => v.id !== action.data);
        break;
      case REMOVE_SCORE_FAILURE:
        draft.removeScoreLoading = false;
        draft.removeScoreError = action.error;
        break;
    }
  });

export default reducer;
