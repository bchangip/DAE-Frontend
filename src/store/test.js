import mutations from "@/mutations/test";
import actions from "@/actions/test";

const state = {
  status: "standby",
  chanCategory: null,
  chanConfidence: null,
  kochCategory: null,
  kochConfidence: null,
  socket: null
};

const getters = {
  chanCategory: state => state.chanCategory,
  chanConfidence: state => state.chanConfidence,
  kochCategory: state => state.kochCategory,
  kochConfidence: state => state.kochConfidence,
  testStatus: state => state.status,
  testSocket: state => state.socket
};

export default {
  state,
  getters,
  actions,
  mutations
};
