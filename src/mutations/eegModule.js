import * as types from "@/types/eegModule";

export default {
  [types.EEG_MODULE_START_RECORDING](state) {
    state.status = "recording";
  },
  [types.EEG_MODULE_START_ANALYSIS](state) {
    state.status = "analyzing";
  },
  [types.EEG_MODULE_SET_RESULT](state, { category, confidence }) {
    state.category = category;
    state.confidence = confidence;
    state.status = "finished";
  },
  [types.EEG_MODULE_RESET](state) {
    state.status = "standby";
  }
};
