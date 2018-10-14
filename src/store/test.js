import mutations from "@/mutations/test";
import actions from "@/actions/test";

const state = {
  status: "standby",
  socket: null
};

const getters = {
  testStatus: state => state.status,
  testSocket: state => state.socket
};

export default {
  state,
  getters,
  actions,
  mutations
};
