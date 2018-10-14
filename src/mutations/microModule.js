import * as types from "@/types/microModule";
import * as testTypes from "@/types/test";

export default {
  [testTypes.TEST_START_QUESTION](state) {
    state.castro.status = "recording";
    state.noriega.status = "recording";
  },
  [testTypes.TEST_FINISH_ANSWER](state) {
    state.castro.status = "analyzing";
    state.noriega.status = "analyzing";
  },
  [types.MICRO_MODULE_RESET](state) {
    state.castro.category = "";
    state.castro.confidence = 0;
    state.castro.status = "standby";
    state.noriega.category = "";
    state.noriega.confidence = 0;
    state.noriega.status = "standby";
  },
  [types.MICRO_MODULE_SET_CASTRO_RESPONSE](state, { category, confidence }) {
    state.castro.category = category;
    state.castro.confidence = confidence;
    state.castro.status = "finished";
  },
  [types.MICRO_MODULE_SET_NORIEGA_RESPONSE](state, { category, confidence }) {
    state.noriega.category = category;
    state.noriega.confidence = confidence;
    state.noriega.status = "finished";
  }
};
