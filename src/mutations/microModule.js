import * as types from "@/types/microModule";

export default {
  [types.MICRO_MODULE_START_RECORDING](state) {
    state.status = "recording";
  },
  [types.MICRO_MODULE_START_ANALYSIS](state) {
    state.status = "analyzing";
  },
  [types.MICRO_MODULE_SET_RESULT](state, { category, confidence }) {
    state.category = category;
    state.confidence = confidence;
    state.status = "finished";
  },
  [types.MICRO_MODULE_RESET](state) {
    state.status = "standby";
  }
};
