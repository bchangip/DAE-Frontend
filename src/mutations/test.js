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
    socket.on("olga_response", socket => {
      this.dispatch("setOlgaResponse", socket.data);
    });
    socket.on("leonel_response", socket => {
      this.dispatch("setLeonelResponse", socket.data);
    });
    socket.on("chan_response", socket => {
      this.dispatch("setChanResponse", socket.data);
    });
    socket.on("koch_response", socket => {
      this.dispatch("setKochResponse", socket.data);
    });
    socket.on("rudy_response", socket => {
      this.dispatch("setRudyResponse", socket.data);
    });
    socket.on("alvaro_response", socket => {
      this.dispatch("setAlvaroResponse", socket.data);
    });
    socket.on("castro_response", socket => {
      this.dispatch("setCastroResponse", socket.data);
    });
    socket.on("noriega_response", socket => {
      this.dispatch("setNoriegaResponse", socket.data);
    });
    state.socket = socket;
  }
};
