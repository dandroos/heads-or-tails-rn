import { SET_IS_HEADS, SET_ABOUT_DIALOG, SET_TOSS_IN_PROGRESS } from "./types";

const initialState = {
  isHeads: true,
  tossInProgress: false,
  aboutDialog: false,
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_IS_HEADS:
      newState.isHeads = payload;
      break;
    case SET_TOSS_IN_PROGRESS:
      newState.tossInProgress = payload;
      break;
    case SET_ABOUT_DIALOG:
      newState.aboutDialog = payload;
      break;
    default:
      break;
  }
  return newState;
};
