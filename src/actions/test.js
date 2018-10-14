import * as types from "@/types/test";
import { VOICE_MODULE_RESET } from "@/types/voiceModule";
import { EEG_MODULE_RESET } from "@/types/eegModule";
import { MICRO_MODULE_RESET } from "@/types/microModule";
import axios from "axios";

export default {
  startQuestion({ commit }) {
    commit(types.TEST_START_QUESTION);
    axios({
      method: "get",
      url: "http://localhost:5000/start-question"
    });
  },
  startAnswer({ commit }) {
    commit(types.TEST_START_ANSWER);
    axios({
      method: "get",
      url: "http://localhost:5000/start-answer"
    });
  },
  finishAnswer({ commit }) {
    commit(types.TEST_FINISH_ANSWER);
    axios({
      method: "get",
      url: "http://localhost:5000/finish-answer"
    });
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
