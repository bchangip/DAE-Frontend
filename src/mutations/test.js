import * as types from "@/types/test";

export default {
  [types.TEST_START_QUESTION](state) {
    state.status = "questioning";
  },
  [types.TEST_START_ANSWER](state) {
    state.status = "answering";
  },
  [types.TEST_FINISH_ANSWER](state) {
    state.status = "results";
  },
  [types.TEST_RESET](state) {
    state.status = "standby";
  }
};
