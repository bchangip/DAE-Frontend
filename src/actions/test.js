import * as types from "@/types/test";
import { VOICE_MODULE_RESET } from "@/types/voiceModule";
import { EEG_MODULE_RESET } from "@/types/eegModule";
import { MICRO_MODULE_RESET } from "@/types/microModule";
import axios from "axios";

export default {
  startQuestion({ commit }, model) {
    commit(types.TEST_START_QUESTION);
    axios.post("http://localhost:5000/start-question", model);
  },
  startAnswer({ commit }, model) {
    commit(types.TEST_START_ANSWER);
    axios.post("http://localhost:5000/start-answer", model);
  },
  finishAnswer({ commit }, model) {
    commit(types.TEST_FINISH_ANSWER);
    axios.post("http://localhost:5000/finish-answer", model);
  },
  resetSystem({ commit }) {
    commit(VOICE_MODULE_RESET);
    commit(EEG_MODULE_RESET);
    commit(MICRO_MODULE_RESET);
    commit(types.TEST_RESET);
  },
  connectSocket({ commit }) {
    commit(types.TEST_CONNECT_SOCKET);
  }
};
