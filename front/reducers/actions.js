import shortId from "shortid";
import faker from "faker";

import produce from "../util/produce";

export const initialState = {
  mainActions: [],
  hasMoreActions: true,
  loadActionsLoading: false,
  loadActionsDone: false,
  loadActionsError: null,
  addActionLoading: false,
  addActionDone: false,
  addActionError: null,
  removeActionLoading: false,
  removeActionDone: false,
  removeActionError: null,
};

export const generateDummyAction = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      Score: {
        id: shortId.generate(),
        title: faker.lorem.sentence(),
        score: 1,
      },
      date: faker.date.recent(),
    }));

export const LOAD_ACTIONS_REQUEST = "LOAD_ACTIONS_REQUEST";
export const LOAD_ACTIONS_SUCCESS = "LOAD_ACTIONS_SUCCESS";
export const LOAD_ACTIONS_FAILURE = "LOAD_ACTIONS_FAILURE";

export const ADD_ACTION_REQUEST = "ADD_ACTION_REQUEST";
export const ADD_ACTION_SUCCESS = "ADD_ACTION_SUCCESS";
export const ADD_ACTION_FAILURE = "ADD_ACTION_FAILURE";

export const REMOVE_ACTION_REQUEST = "REMOVE_ACTION_REQUEST";
export const REMOVE_ACTION_SUCCESS = "REMOVE_ACTION_SUCCESS";
export const REMOVE_ACTION_FAILURE = "REMOVE_ACTION_FAILURE";

export const addActionRequest = (received) => ({
  type: ADD_ACTION_REQUEST,
  data: received,
});

const dummyAction = (data) => ({
  id: data.id,
  User: {
    id: 1,
    nickname: "sean",
  },
  Score: {
    id: 1,
    title: "물 한 잔 마시기",
    score: 1,
  },
  date: data.date,
});

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ACTIONS_REQUEST:
        draft.loadActionsLoading = true;
        draft.loadActionsDone = false;
        draft.loadActionsError = null;
        break;
      case LOAD_ACTIONS_SUCCESS:
        draft.loadActionsLoading = false;
        draft.loadActionsDone = true;
        draft.mainActions = action.data.concat(draft.mainActions);
        draft.hasMoreActions = draft.mainActions.length < 50;
        break;
      case LOAD_ACTIONS_FAILURE:
        draft.loadActionsLoading = false;
        draft.loadActionsError = action.error;
        break;
      case ADD_ACTION_REQUEST:
        draft.addActionLoading = true;
        draft.addActionDone = false;
        draft.addActionError = null;
        break;
      case ADD_ACTION_SUCCESS:
        draft.addActionLoading = false;
        draft.addActionDone = true;
        draft.mainActions.unshift(dummyAction(action.data));
        break;
      case ADD_ACTION_FAILURE:
        draft.addActionLoading = false;
        draft.addActionError = action.error;
        break;
      case REMOVE_ACTION_REQUEST:
        draft.removeActionLoading = true;
        draft.removeActionDone = false;
        draft.removeActionError = null;
        break;
      case REMOVE_ACTION_SUCCESS:
        draft.removeActionLoading = false;
        draft.removeActionDone = true;
        draft.mainActions = draft.mainActions.filter(
          (v) => v.id !== action.data
        );
        break;
      case REMOVE_ACTION_FAILURE:
        draft.removeActionLoading = false;
        draft.removeActionError = action.error;
        break;
    }
  });

export default reducer;
