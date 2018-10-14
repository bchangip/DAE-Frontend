import * as types from "@/types/eegModule";
import * as testTypes from "@/types/test";

export default {
  [testTypes.TEST_START_QUESTION](state) {
    state.koch.status = "recording";
    state.rudy.status = "recording";
    state.alvaro.status = "recording";
  },
  [testTypes.TEST_FINISH_ANSWER](state) {
    state.koch.status = "analyzing";
    state.rudy.status = "analyzing";
    state.alvaro.status = "analyzing";
  },
  [types.EEG_MODULE_RESET](state) {
    state.koch.category = "";
    state.koch.confidence = 0;
    state.koch.status = "standby";
    state.rudy.category = "";
    state.rudy.confidence = 0;
    state.rudy.status = "standby";
    state.alvaro.category = "";
    state.alvaro.confidence = 0;
    state.alvaro.status = "standby";
  },
  [types.EEG_MODULE_SET_KOCH_RESPONSE](state, { category, confidence }) {
    state.koch.category = category;
    state.koch.confidence = confidence;
    state.koch.status = "finished";
  },
  [types.EEG_MODULE_SET_RUDY_RESPONSE](state, { category, confidence }) {
    state.rudy.category = category;
    state.rudy.confidence = confidence;
    state.rudy.status = "finished";
  },
  [types.EEG_MODULE_SET_ALVARO_RESPONSE](state, { category, confidence }) {
    state.alvaro.category = category;
    state.alvaro.confidence = confidence;
    state.alvaro.status = "finished";
  }
};
