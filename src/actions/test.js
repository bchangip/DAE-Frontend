import * as types from "@/types/test";
import { VOICE_MODULE_RESET } from "@/types/voiceModule";
import { EEG_MODULE_RESET } from "@/types/eegModule";
import { MICRO_MODULE_RESET } from "@/types/microModule";

export default {
  startQuestion({ commit }) {
    commit(types.TEST_START_QUESTION);
  },
  startAnswer({ commit }) {
    commit(types.TEST_START_ANSWER);
  },
  finishAnswer({ commit }) {
    commit(types.TEST_FINISH_ANSWER);
  },
  resetSystem({ commit }) {
    commit(VOICE_MODULE_RESET);
    commit(EEG_MODULE_RESET);
    commit(MICRO_MODULE_RESET);
    commit(types.TEST_RESET);
  }
};
