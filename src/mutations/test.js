import * as types from "@/types/test";
import socketIO from "socket.io-client";

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
  },
  [types.TEST_CONNECT_SOCKET](state) {
    const socket = socketIO("http://localhost:5000");
    socket.on("chan_response", socket => {
      this.dispatch("setChanResponse", socket.data);
    });
    socket.on("koch_response", socket => {
      this.dispatch("setKochResponse", socket.data);
    });
    state.socket = socket;
  },
  [types.TEST_SET_CHAN_RESPONSE](state, { category, confidence }) {
    state.chanCategory = category;
    state.chanConfidence = confidence;
  },
  [types.TEST_SET_KOCH_RESPONSE](state, { category, confidence }) {
    state.kochCategory = category;
    state.kochConfidence = confidence;
  }
};
