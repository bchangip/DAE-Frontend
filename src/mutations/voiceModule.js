import * as types from "@/types/voiceModule";
import * as testTypes from "@/types/test";

export default {
  [testTypes.TEST_START_ANSWER](state) {
    state.olga.status = "recording";
    state.leonel.status = "recording";
    state.chan.status = "recording";
  },
  [testTypes.TEST_FINISH_ANSWER](state) {
    state.olga.status = "analyzing";
    state.leonel.status = "analyzing";
    state.chan.status = "analyzing";
  },
  [types.VOICE_MODULE_RESET](state) {
    state.olga.category = "";
    state.olga.confidence = 0;
    state.olga.status = "standby";
    state.leonel.category = "";
    state.leonel.confidence = 0;
    state.leonel.status = "standby";
    state.chan.category = "";
    state.chan.confidence = 0;
    state.chan.status = "standby";
  },
  [types.VOICE_MODULE_SET_OLGA_RESPONSE](state, { category, confidence }) {
    state.olga.category = category;
    state.olga.confidence = confidence;
    state.olga.status = "finished";
  },
  [types.VOICE_MODULE_SET_LEONEL_RESPONSE](state, { category, confidence }) {
    state.leonel.category = category;
    state.leonel.confidence = confidence;
    state.leonel.status = "finished";
  },
  [types.VOICE_MODULE_SET_CHAN_RESPONSE](state, { category, confidence }) {
    state.chan.category = category;
    state.chan.confidence = confidence;
    state.chan.status = "finished";
  }
};
