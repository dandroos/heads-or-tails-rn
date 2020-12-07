import { SET_IS_HEADS, SET_ABOUT_DIALOG, SET_TOSS_IN_PROGRESS } from "./types";

export const setIsHeads = (payload) => ({
  type: SET_IS_HEADS,
  payload,
});

export const setAboutDialog = (payload) => ({
  type: SET_ABOUT_DIALOG,
  payload,
});

export const setTossInProgress = (payload) => ({
  type: SET_TOSS_IN_PROGRESS,
  payload,
});
