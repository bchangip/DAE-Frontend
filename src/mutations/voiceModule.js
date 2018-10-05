import * as types from "@/types/voiceModule";

export default {
  [types.VOICE_MODULE_START_RECORDING](state) {
    state.status = "recording";
  },
  [types.VOICE_MODULE_START_ANALYSIS](state) {
    state.status = "analyzing";
  },
  [types.VOICE_MODULE_SET_RESULT](state, { category, confidence }) {
    state.category = category;
    state.confidence = confidence;
    state.status = "finished";
  },
  [types.VOICE_MODULE_RESET](state) {
    state.status = "standby";
  }
};
